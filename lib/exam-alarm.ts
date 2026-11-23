/**
 * Engine Alarm Darurat Ujian Offline — LesinAja
 * Menggabungkan Web Audio API + <audio> WAV Data URL in-memory dengan penguncian
 * volume 90% (0.9) serta mekanisme anti-mute & getar perangkat saat siswa
 * melewati batas waktu tunggu pembuka kunci.
 */

interface AndroidExamBridge {
  setForceVolume?: (percent: number) => void;
}

interface LesinAjaExamBroAlarmBridge {
  setAlarmActive?: (active: boolean) => void;
}

function notifyNativeAlarm(active: boolean): void {
  if (typeof window === "undefined") return;
  try {
    const win = window as unknown as {
      AndroidExamBridge?: AndroidExamBridge;
      LesinAjaExamBro?: LesinAjaExamBroAlarmBridge;
    };
    win.LesinAjaExamBro?.setAlarmActive?.(active);
    if (active) {
      win.AndroidExamBridge?.setForceVolume?.(90);
    }
  } catch {
    // bridge opsional
  }
}

let audioCtx: AudioContext | null = null;
let alarmOscillator: OscillatorNode | null = null;
let alarmGain: GainNode | null = null;
let alarmCompressor: DynamicsCompressorNode | null = null;
let alarmAudioEl: HTMLAudioElement | null = null;
let sirenStepTimer: ReturnType<typeof setInterval> | null = null;
let volumeGuardTimer: ReturnType<typeof setInterval> | null = null;
let vibrateTimer: ReturnType<typeof setInterval> | null = null;
let cachedSirenWavDataUrl: string | null = null;
let isAlarmRunning = false;
let keyBlockerAttached = false;

const TARGET_VOLUME = 0.9;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Membuat buffer WAV sirine dua nada berdurasi 1,4 detik sebagai Data URL
 * agar <audio> tetap berbunyi offline tanpa aset eksternal.
 */
function getSirenWavDataUrl(): string {
  if (cachedSirenWavDataUrl) return cachedSirenWavDataUrl;
  const sampleRate = 16000;
  const durationSec = 1.4;
  const numSamples = Math.floor(sampleRate * durationSec);
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) {
      view.setUint8(offset + i, s.charCodeAt(i));
    }
  };

  writeStr(0, "RIFF");
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, numSamples * 2, true);

  let phase = 0;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const freq = t % 0.7 < 0.35 ? 1320 : 880;
    phase += (2 * Math.PI * freq) / sampleRate;
    // Gelombang campuran sawtooth + sine supaya tajam & terdengar jelas di speaker HP
    const sine = Math.sin(phase);
    const overtone = 0.35 * Math.sin(phase * 2);
    const sample = Math.max(-1, Math.min(1, (sine + overtone) * 0.75));
    view.setInt16(44 + i * 2, Math.floor(sample * 32767), true);
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  cachedSirenWavDataUrl = `data:audio/wav;base64,${btoa(binary)}`;
  return cachedSirenWavDataUrl;
}

function ensureAudioElement(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!alarmAudioEl) {
    const el = new Audio(getSirenWavDataUrl());
    el.loop = true;
    el.preload = "auto";
    el.volume = TARGET_VOLUME;
    el.muted = false;
    el.addEventListener("volumechange", () => {
      if (!isAlarmRunning) return;
      if (el.muted) el.muted = false;
      if (Math.abs(el.volume - TARGET_VOLUME) > 0.01) {
        el.volume = TARGET_VOLUME;
      }
    });
    el.addEventListener("pause", () => {
      if (isAlarmRunning) {
        el.play().catch(() => {});
      }
    });
    alarmAudioEl = el;
  }
  return alarmAudioEl;
}

function blockMuteKeys(event: KeyboardEvent): void {
  if (!isAlarmRunning) return;
  if (
    event.key === "AudioVolumeMute" ||
    event.key === "AudioVolumeDown" ||
    event.key === "VolumeMute" ||
    event.key === "VolumeDown" ||
    event.key === "MediaPlayPause" ||
    event.key === "MediaStop"
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function enforceForceVolume90(): void {
  notifyNativeAlarm(true);

  if (alarmAudioEl) {
    if (alarmAudioEl.muted) alarmAudioEl.muted = false;
    if (Math.abs(alarmAudioEl.volume - TARGET_VOLUME) > 0.01) {
      alarmAudioEl.volume = TARGET_VOLUME;
    }
    if (isAlarmRunning && alarmAudioEl.paused) {
      alarmAudioEl.play().catch(() => {});
    }
  }

  if (audioCtx && alarmGain) {
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    try {
      alarmGain.gain.setValueAtTime(TARGET_VOLUME, audioCtx.currentTime);
    } catch {
      // safe ignore
    }
  }
}

/**
 * Harus dipanggil dalam gesture klik user sebelum ujian dimulai (mis. saat mengaktifkan Fullscreen)
 * agar browser HP mengizinkan alarm berbunyi nanti walaupun tanpa klik tambahan.
 */
export function unlockExamAlarmAudio(): void {
  if (typeof window === "undefined") return;
  const ctx = getAudioContext();
  if (ctx) {
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // safe ignore
    }
  }

  const el = ensureAudioElement();
  if (el) {
    try {
      el.volume = TARGET_VOLUME;
      el.muted = true;
      const p = el.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          if (!isAlarmRunning) {
            el.pause();
            el.currentTime = 0;
            el.muted = false;
          }
        }).catch(() => {});
      }
    } catch {
      // safe ignore
    }
  }
}

export function startExamAlarm(): void {
  if (typeof window === "undefined") return;
  if (isAlarmRunning) {
    enforceForceVolume90();
    return;
  }
  isAlarmRunning = true;

  if (!keyBlockerAttached) {
    window.addEventListener("keydown", blockMuteKeys, true);
    keyBlockerAttached = true;
  }

  // 1. Web Audio API Sirine dua frekuensi dengan compressor & gain terkunci 0.9
  const ctx = getAudioContext();
  if (ctx) {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const compressor = ctx.createDynamicsCompressor();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(1320, ctx.currentTime);
      gain.gain.setValueAtTime(TARGET_VOLUME, ctx.currentTime);

      osc.connect(gain);
      gain.connect(compressor);
      compressor.connect(ctx.destination);

      osc.start();
      alarmOscillator = osc;
      alarmGain = gain;
      alarmCompressor = compressor;

      let high = true;
      sirenStepTimer = setInterval(() => {
        if (!isAlarmRunning || !audioCtx || !alarmOscillator) return;
        high = !high;
        try {
          alarmOscillator.frequency.setValueAtTime(
            high ? 1320 : 880,
            audioCtx.currentTime
          );
        } catch {
          // safe ignore
        }
      }, 350);
    } catch {
      // fallback ke <audio>
    }
  }

  // 2. HTML5 <audio> WAV loop + MediaSession lock
  const el = ensureAudioElement();
  if (el) {
    el.muted = false;
    el.volume = TARGET_VOLUME;
    el.currentTime = 0;
    el.play().catch(() => {});
  }

  try {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.setActionHandler("pause", () => {
        enforceForceVolume90();
      });
      navigator.mediaSession.setActionHandler("stop", () => {
        enforceForceVolume90();
      });
    }
  } catch {
    // safe ignore
  }

  // 3. Loop penjaga volume 90% anti-mute setiap 50ms
  enforceForceVolume90();
  volumeGuardTimer = setInterval(enforceForceVolume90, 50);

  // 4. Getar perangkat HP
  try {
    navigator.vibrate?.([700, 150, 700]);
    vibrateTimer = setInterval(() => {
      if (isAlarmRunning) {
        navigator.vibrate?.([700, 150, 700]);
      }
    }, 1800);
  } catch {
    // safe ignore
  }
}

export function stopExamAlarm(): void {
  isAlarmRunning = false;
  notifyNativeAlarm(false);

  if (typeof window !== "undefined" && keyBlockerAttached) {
    window.removeEventListener("keydown", blockMuteKeys, true);
    keyBlockerAttached = false;
  }

  if (sirenStepTimer !== null) {
    clearInterval(sirenStepTimer);
    sirenStepTimer = null;
  }
  if (volumeGuardTimer !== null) {
    clearInterval(volumeGuardTimer);
    volumeGuardTimer = null;
  }
  if (vibrateTimer !== null) {
    clearInterval(vibrateTimer);
    vibrateTimer = null;
  }

  if (alarmOscillator) {
    try {
      alarmOscillator.stop();
      alarmOscillator.disconnect();
    } catch {
      // safe ignore
    }
    alarmOscillator = null;
  }
  if (alarmGain) {
    try {
      alarmGain.disconnect();
    } catch {
      // safe ignore
    }
    alarmGain = null;
  }
  if (alarmCompressor) {
    try {
      alarmCompressor.disconnect();
    } catch {
      // safe ignore
    }
    alarmCompressor = null;
  }
  if (alarmAudioEl) {
    try {
      alarmAudioEl.pause();
      alarmAudioEl.currentTime = 0;
    } catch {
      // safe ignore
    }
  }

  try {
    navigator.vibrate?.(0);
  } catch {
    // safe ignore
  }
}

export function isExamAlarmRunning(): boolean {
  return isAlarmRunning;
}
