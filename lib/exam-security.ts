import { isMasterAccessCode, normalizeAccessCode } from "./access-codes";
import type { Category, Choice, Question } from "./types";

export const DEVICE_ID_STORAGE_KEY = "lesinaja.exam.device-id";

export interface ExamSubmissionPayload {
  formatVersion: 1;
  sessionId: string;
  packageId: string;
  packageTitle: string;
  participantName: string;
  deviceId: string;
  shuffleSeed: string;
  startedAt: number;
  completedAt: number;
  durationSeconds: number;
  finishTrigger: "manual" | "time_up";
  answers: Record<string, string>;
  flagged: string[];
  questionOrder: string[];
  alarmTriggeredDuringExam: boolean;
}

export interface EncryptedExamEnvelope {
  format: "LESINAJA_ENCRYPTED_EXAM_V1";
  version: 1;
  exportedAt: number;
  deviceId: string;
  packageId: string;
  participantHint: string;
  iv: string;
  salt: string;
  ciphertext: string;
}

const CODE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const NORMAL_SECRET = "LSN-PROCTOR-NORMAL-KEY-2026-V1";
const EMERGENCY_SECRET = "LSN-PROCTOR-EMERGENCY-OVERRIDE-2026-V1";
const ENCRYPTION_PASSPHRASE =
  "LESINAJA::AES256GCM::EXAM_VAULT::SKD_2026::9f8a7c6e5d4b3a29";

function getCryptoOrThrow(): Crypto {
  if (typeof globalThis === "undefined" || !globalThis.crypto?.subtle) {
    throw new Error(
      "Enkripsi Web Crypto (HTTPS / localhost) tidak tersedia pada browser ini."
    );
  }
  return globalThis.crypto;
}

function randomChars(length: number): string {
  const bytes = new Uint8Array(length);
  if (typeof globalThis !== "undefined" && globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  let out = "";
  for (let i = 0; i < length; i++) {
    out += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length];
  }
  return out;
}

export function normalizeDeviceId(input: string): string {
  const compact = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!compact) return "";
  const match = compact.match(/^LSN([A-Z0-9]{4})([A-Z0-9]{4})$/);
  if (match) {
    return `LSN-${match[1]}-${match[2]}`;
  }
  return input.trim().toUpperCase().replace(/\s+/g, "");
}

export function normalizeLockPin(input?: string): string {
  if (!input) return "";
  return input.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function createDeviceId(): string {
  return `LSN-${randomChars(4)}-${randomChars(4)}`;
}

export function getOrCreateDeviceId(): string {
  if (typeof window === "undefined") {
    return createDeviceId();
  }
  try {
    const existing = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY);
    if (existing) {
      const normalized = normalizeDeviceId(existing);
      if (normalized) return normalized;
    }
    const created = createDeviceId();
    window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, created);
    return created;
  } catch {
    return createDeviceId();
  }
}

export function generateLockPin(): string {
  return randomChars(4);
}

/**
 * Menghasilkan 8 karakter kode deterministik berbasis hash 2x32-bit FNV-1a + Murmur mix
 * agar berjalan sinkron baik di client maupun Node.js test tanpa tergantung lingkungan.
 */
function deriveCode8(seedMaterial: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;
  for (let i = 0; i < seedMaterial.length; i++) {
    const code = seedMaterial.charCodeAt(i);
    h1 ^= code;
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= code + (i << 5);
    h2 = Math.imul(h2, 0x85ebca6b);
    h1 ^= h2 >>> 13;
    h2 ^= h1 >>> 11;
  }

  let state = (h1 ^ h2) >>> 0;
  let result = "";
  for (let i = 0; i < 8; i++) {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const mixed = ((t ^ (t >>> 14)) ^ (i % 2 === 0 ? h1 : h2)) >>> 0;
    result += CODE_ALPHABET[mixed % CODE_ALPHABET.length];
  }
  return result;
}

export function generateNormalUnlockCode(deviceId: string, lockPin?: string): string {
  const cleanDevice = normalizeDeviceId(deviceId);
  const cleanPin = normalizeLockPin(lockPin);
  const key = cleanPin ? `${cleanDevice}::${cleanPin}` : cleanDevice;
  return deriveCode8(`${NORMAL_SECRET}::${key}`);
}

export function generateEmergencyOverrideCode(
  deviceId: string,
  lockPin?: string
): string {
  const cleanDevice = normalizeDeviceId(deviceId);
  const cleanPin = normalizeLockPin(lockPin);
  const key = cleanPin ? `${cleanDevice}::${cleanPin}` : cleanDevice;
  return deriveCode8(`${EMERGENCY_SECRET}::${key}`);
}

export function validateExamUnlockCode({
  deviceId,
  lockPin,
  inputCode,
  requireEmergencyOverride,
}: {
  deviceId: string;
  lockPin?: string;
  inputCode: string;
  requireEmergencyOverride: boolean;
}): {
  valid: boolean;
  mode?: "normal" | "emergency";
  error?: string;
} {
  const normalizedInput = normalizeAccessCode(inputCode).replace(/-/g, "");
  if (!normalizedInput) {
    return { valid: false, error: "Masukkan kode pembuka dari pengawas." };
  }

  const cleanDevice = normalizeDeviceId(deviceId);
  const cleanPin = normalizeLockPin(lockPin);

  const expectedEmergencyWithPin = cleanPin
    ? generateEmergencyOverrideCode(cleanDevice, cleanPin)
    : "";
  const expectedEmergencyNoPin = generateEmergencyOverrideCode(cleanDevice);
  const matchesEmergency =
    normalizedInput === expectedEmergencyWithPin ||
    normalizedInput === expectedEmergencyNoPin ||
    isMasterAccessCode(normalizedInput);

  if (matchesEmergency) {
    return { valid: true, mode: "emergency" };
  }

  const expectedNormalWithPin = cleanPin
    ? generateNormalUnlockCode(cleanDevice, cleanPin)
    : "";
  const expectedNormalNoPin = generateNormalUnlockCode(cleanDevice);
  const matchesNormal =
    normalizedInput === expectedNormalWithPin ||
    normalizedInput === expectedNormalNoPin;

  if (requireEmergencyOverride) {
    if (matchesNormal) {
      return {
        valid: false,
        error:
          "Batas waktu 2+2 menit telah habis. Kode biasa tidak berlaku — wajib gunakan Kode Override Darurat dari pengawas.",
      };
    }
    return {
      valid: false,
      error: "Kode Override Darurat tidak valid untuk Device ID ini.",
    };
  }

  if (matchesNormal) {
    return { valid: true, mode: "normal" };
  }

  return {
    valid: false,
    error: "Kode pembuka tidak sesuai dengan Device ID / PIN Kunci ini.",
  };
}

function cyrb128(str: string): [number, number, number, number] {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0; i < str.length; i++) {
    const k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  return [(h1 ^ h2 ^ h3 ^ h4) >>> 0, (h2 ^ h1) >>> 0, (h3 ^ h1) >>> 0, (h4 ^ h1) >>> 0];
}

function mulberry32(seedInt: number): () => number {
  let a = seedInt >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const [s] = cyrb128(seed);
  const rand = mulberry32(s);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Mengacak urutan soal (berdasarkan subtes jika paket Full SKD, atau penuh untuk Mini TO)
 * serta mengacak urutan choices tiap soal secara deterministik tanpa mengubah `choice.id` asli.
 */
export function shuffleExamQuestions(
  questions: Question[],
  seed: string,
  kind: "full" | "mini" = "mini"
): Question[] {
  let orderedQuestions: Question[];
  if (kind === "full") {
    const categoryOrder: Category[] = ["TWK", "TIU", "TKP"];
    const grouped: Question[] = [];
    for (const cat of categoryOrder) {
      const slice = questions.filter((q) => q.category === cat);
      grouped.push(...seededShuffle(slice, `${seed}::cat::${cat}`));
    }
    const remaining = questions.filter((q) => !categoryOrder.includes(q.category));
    if (remaining.length > 0) {
      grouped.push(...seededShuffle(remaining, `${seed}::cat::OTHER`));
    }
    orderedQuestions = grouped;
  } else {
    orderedQuestions = seededShuffle(questions, `${seed}::questions`);
  }

  return orderedQuestions.map((question) => {
    const shuffledChoices: Choice[] = seededShuffle(
      question.choices,
      `${seed}::choices::${question.id}`
    ).map((choice) => ({ ...choice }));
    return {
      ...question,
      choices: shuffledChoices,
    };
  });
}

function sanitizeFilenameToken(value: string, fallback: string): string {
  const cleaned = value
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || fallback;
}

export function buildSubmissionFilename(
  participantName: string,
  packageId: string,
  deviceId: string
): string {
  const nameToken = sanitizeFilenameToken(participantName, "PESERTA");
  const pkgToken = sanitizeFilenameToken(packageId, "PAKET");
  const deviceToken = sanitizeFilenameToken(deviceId, "DEVICE");
  return `JAWABAN_${nameToken}_${pkgToken}_${deviceToken}.lesinaja.json`;
}

function toBase64(bytes: Uint8Array): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function fromBase64(base64: string): Uint8Array {
  if (typeof Buffer !== "undefined") {
    return new Uint8Array(Buffer.from(base64, "base64"));
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function toArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

async function deriveAesKey(saltBytes: Uint8Array, usage: KeyUsage[]): Promise<CryptoKey> {
  const cryptoObj = getCryptoOrThrow();
  const encoder = new TextEncoder();
  const keyMaterial = await cryptoObj.subtle.importKey(
    "raw",
    encoder.encode(ENCRYPTION_PASSPHRASE),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  return cryptoObj.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: toArrayBuffer(saltBytes),
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    usage
  );
}

export async function encryptExamSubmission(
  payload: ExamSubmissionPayload
): Promise<EncryptedExamEnvelope> {
  const cryptoObj = getCryptoOrThrow();
  const iv = new Uint8Array(12);
  const salt = new Uint8Array(16);
  cryptoObj.getRandomValues(iv);
  cryptoObj.getRandomValues(salt);

  const key = await deriveAesKey(salt, ["encrypt"]);
  const plaintext = new TextEncoder().encode(JSON.stringify(payload));
  const encryptedBuffer = await cryptoObj.subtle.encrypt(
    { name: "AES-GCM", iv: toArrayBuffer(iv) },
    key,
    plaintext
  );

  const trimmedName = payload.participantName.trim();
  const participantHint = trimmedName
    ? `${trimmedName.slice(0, 3).toUpperCase()}***`
    : "PESERTA";

  return {
    format: "LESINAJA_ENCRYPTED_EXAM_V1",
    version: 1,
    exportedAt: Date.now(),
    deviceId: payload.deviceId,
    packageId: payload.packageId,
    participantHint,
    iv: toBase64(iv),
    salt: toBase64(salt),
    ciphertext: toBase64(new Uint8Array(encryptedBuffer)),
  };
}

export async function decryptExamSubmission(
  rawJsonOrEnvelope: string | EncryptedExamEnvelope
): Promise<ExamSubmissionPayload> {
  const cryptoObj = getCryptoOrThrow();
  let envelope: EncryptedExamEnvelope;

  if (typeof rawJsonOrEnvelope === "string") {
    try {
      envelope = JSON.parse(rawJsonOrEnvelope) as EncryptedExamEnvelope;
    } catch {
      throw new Error("Format file bukan JSON yang valid.");
    }
  } else {
    envelope = rawJsonOrEnvelope;
  }

  if (
    !envelope ||
    typeof envelope !== "object" ||
    envelope.format !== "LESINAJA_ENCRYPTED_EXAM_V1" ||
    typeof envelope.iv !== "string" ||
    typeof envelope.salt !== "string" ||
    typeof envelope.ciphertext !== "string"
  ) {
    throw new Error("Struktur file jawaban terenkripsi LesinAja tidak dikenali.");
  }

  const iv = fromBase64(envelope.iv);
  const salt = fromBase64(envelope.salt);
  const ciphertext = fromBase64(envelope.ciphertext);

  const key = await deriveAesKey(salt, ["decrypt"]);
  let decryptedBuffer: ArrayBuffer;
  try {
    decryptedBuffer = await cryptoObj.subtle.decrypt(
      { name: "AES-GCM", iv: toArrayBuffer(iv) },
      key,
      toArrayBuffer(ciphertext)
    );
  } catch {
    throw new Error(
      "File jawaban rusak, tidak sah, atau telah dimodifikasi sehingga gagal didekripsi."
    );
  }

  const decodedText = new TextDecoder().decode(decryptedBuffer);
  const payload = JSON.parse(decodedText) as Partial<ExamSubmissionPayload>;
  if (
    !payload ||
    payload.formatVersion !== 1 ||
    typeof payload.packageId !== "string" ||
    typeof payload.participantName !== "string" ||
    typeof payload.deviceId !== "string" ||
    !payload.answers ||
    typeof payload.answers !== "object"
  ) {
    throw new Error("Isi payload jawaban di dalam file terenkripsi tidak lengkap.");
  }

  return payload as ExamSubmissionPayload;
}
