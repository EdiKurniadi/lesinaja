/**
 * Modul Registri Kode Akses Try Out dan Drill LesinAja
 * Format aturan kode: [JUDUL/KATEGORI][4 KARAKTER RANDOM ALFANUMERIK KAPITAL]
 * Contoh: MINITOTWKHF67
 */

export const MASTER_ACCESS_CODES: string[] = ["LESINAJASUPER", "LESINAJA2026"];

export const PACKAGE_ACCESS_CODES: Record<string, string> = {
  // === FULL TRY OUT ===
  "paket-a": "PAKETAFN24",
  "paket-b": "PAKETBPM38",

  // === MINI TRY OUT TIU, TWK, TKP ===
  "mini-tiu-kedinasan": "MINITOTIU1KD92",
  "mini-tiu-pemantapan": "MINITOTIU2PM56",
  "mini-tiu-lanjutan": "MINITOTIU3LJ81",
  "mini-tiu-skd-casn": "MINITIUSKD4K82",
  "mini-tiu-skd-casn-2": "MINITIUSKD2M73",
  "mini-tiu-skd-casn-3": "MINITIUSKD3V85",
  "mini-tiu-skd-casn-4": "MINITIUSKD4P29",
  "mini-twk-kebangsaan": "MTTWKNIPSQUAD",
  "mini-tkp-karakteristik": "MTTKPNIPSQUAD",

  // === DRILL TWK ===
  "twk-pancasila-1": "TWKPANCASILA1AB72",
  "twk-pancasila-2": "TWKPANCASILA2CD49",
  "twk-uud-1945-1": "TWKUUD19451EF83",
  "twk-uud-1945-2": "TWKUUD19452GH15",
  "twk-nkri-dan-bhinneka-1": "TWKNKRIBHINNEKA1JK64",
  "twk-nkri-dan-bhinneka-2": "TWKNKRIBHINNEKA2LM27",
  "twk-nasionalisme-1": "TWKNASIONALISME1NP51",
  "twk-nasionalisme-2": "TWKNASIONALISME2QR93",
  "twk-nasionalisme-3": "TWKNASIONALISME3ST36",
  "twk-nasionalisme-4": "TWKNASIONALISME4UV78",
  "twk-nasionalisme-5": "TWKNASIONALISME5WX42",
  "twk-integritas-1": "TWKINTEGRITAS1ZA19",
  "twk-integritas-2": "TWKINTEGRITAS2BC84",
  "twk-integritas-3": "TWKINTEGRITAS3DE57",
  "twk-integritas-4": "TWKINTEGRITAS4FG23",
  "twk-integritas-5": "TWKINTEGRITAS5HJ96",
  "twk-bela-negara-1": "TWKBELANEGARA1KL38",
  "twk-bela-negara-2": "TWKBELANEGARA2MN71",
  "twk-bela-negara-3": "TWKBELANEGARA3PQ45",
  "twk-bela-negara-4": "TWKBELANEGARA4RS82",
  "twk-bela-negara-5": "TWKBELANEGARA5TU16",

  // === DRILL TIU ===
  "tiu-kemampuan-verbal-1": "TIUVERBAL1VW59",
  "tiu-kemampuan-verbal-2": "TIUVERBAL2XY34",
  "tiu-kemampuan-numerik-1": "TIUNUMERIK1ZA87",
  "tiu-kemampuan-numerik-2": "TIUNUMERIK2BC41",
  "tiu-deret-dan-pola-1": "TIUDERETPOLA1DE63",
  "tiu-deret-dan-pola-2": "TIUDERETPOLA2FG95",
  "tiu-logika-analitis-1": "TIUANALITIS1HJ28",
  "tiu-logika-analitis-2": "TIUANALITIS2KL74",

  // === DRILL TKP ===
  "tkp-pelayanan-publik-1": "TKPPELAYANANPUBLIK1MN39",
  "tkp-pelayanan-publik-2": "TKPPELAYANANPUBLIK2PQ81",
  "tkp-pelayanan-publik-3": "TKPPELAYANANPUBLIK3RS54",
  "tkp-pelayanan-publik-4": "TKPPELAYANANPUBLIK4TU26",
  "tkp-pelayanan-publik-5": "TKPPELAYANANPUBLIK5VW68",
  "tkp-profesionalisme-1": "TKPPROFESIONALISME1XY17",
  "tkp-profesionalisme-2": "TKPPROFESIONALISME2ZA43",
  "tkp-profesionalisme-3": "TKPPROFESIONALISME3BC98",
  "tkp-profesionalisme-4": "TKPPROFESIONALISME4DE65",
  "tkp-profesionalisme-5": "TKPPROFESIONALISME5FG32",
  "tkp-jejaring-kerja-1": "TKPJEJARINGKERJA1HJ79",
  "tkp-jejaring-kerja-2": "TKPJEJARINGKERJA2KL41",
  "tkp-jejaring-kerja-3": "TKPJEJARINGKERJA3MN86",
  "tkp-jejaring-kerja-4": "TKPJEJARINGKERJA4PQ29",
  "tkp-jejaring-kerja-5": "TKPJEJARINGKERJA5RS73",
  "tkp-teknologi-informasi-1": "TKPTEKNOLOGIINFORMASI1TU35",
  "tkp-teknologi-informasi-2": "TKPTEKNOLOGIINFORMASI2VW82",
  "tkp-teknologi-informasi-3": "TKPTEKNOLOGIINFORMASI3XY64",
  "tkp-teknologi-informasi-4": "TKPTEKNOLOGIINFORMASI4ZA18",
  "tkp-teknologi-informasi-5": "TKPTEKNOLOGIINFORMASI5BC57",
  "tkp-sosial-budaya-1": "TKPSOSIALBUDAYA1DE91",
  "tkp-sosial-budaya-2": "TKPSOSIALBUDAYA2FG46",
  "tkp-sosial-budaya-3": "TKPSOSIALBUDAYA3HJ83",
  "tkp-sosial-budaya-4": "TKPSOSIALBUDAYA4KL25",
  "tkp-sosial-budaya-5": "TKPSOSIALBUDAYA5MN69",
};

export function normalizeAccessCode(input: string): string {
  return input.trim().replace(/\s+/g, "").toUpperCase();
}

export function isMasterAccessCode(input: string): boolean {
  const normalized = normalizeAccessCode(input);
  return MASTER_ACCESS_CODES.includes(normalized);
}

export function getPackageAccessCode(packageId: string): string | undefined {
  return PACKAGE_ACCESS_CODES[packageId];
}

export function validatePackageAccessCode(packageId: string, input: string): boolean {
  const normalized = normalizeAccessCode(input);
  if (!normalized) return false;
  if (isMasterAccessCode(normalized)) return true;
  const expected = PACKAGE_ACCESS_CODES[packageId];
  return Boolean(expected && normalized === expected);
}
