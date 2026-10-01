import test from "node:test";
import assert from "node:assert/strict";
import {
  MASTER_ACCESS_CODES,
  PACKAGE_ACCESS_CODES,
  getPackageAccessCode,
  isMasterAccessCode,
  normalizeAccessCode,
  validatePackageAccessCode,
} from "../lib/access-codes";
import { ALL_TRYOUT_PACKAGES, DRILL_PACKAGES } from "../lib/content";

test("seluruh paket tryout dan drill memiliki kode akses terdaftar", () => {
  assert.equal(ALL_TRYOUT_PACKAGES.length, 12);
  assert.equal(DRILL_PACKAGES.length, 62);

  for (const pkg of ALL_TRYOUT_PACKAGES) {
    const code = getPackageAccessCode(pkg.id);
    assert.ok(code, `Paket tryout ${pkg.id} tidak memiliki kode akses`);
    assert.match(code, /^[A-Z0-9]{5,30}$/, `Format kode ${code} tidak valid`);
  }

  for (const pkg of DRILL_PACKAGES) {
    const code = getPackageAccessCode(pkg.id);
    assert.ok(code, `Paket drill ${pkg.id} tidak memiliki kode akses`);
    assert.match(code, /^[A-Z0-9]{5,35}$/, `Format kode ${code} tidak valid`);
  }

  assert.equal(Object.keys(PACKAGE_ACCESS_CODES).length, 74);
});

test("kode akses Drill Pilar Negara sesuai spesifikasi", () => {
  const codes: Record<string, string> = {
    "twk-pilar-negara-1": "TWKPILARNEGARA1PN55",
    "twk-pilar-negara-2": "TWKPILARNEGARA2AB81",
    "twk-pilar-negara-3": "TWKPILARNEGARA3CD64",
    "twk-pilar-negara-4": "TWKPILARNEGARA4EF92",
  };
  for (const [id, code] of Object.entries(codes)) {
    assert.equal(getPackageAccessCode(id), code);
    assert.equal(validatePackageAccessCode(id, code), true);
    assert.equal(validatePackageAccessCode(id, code.toLowerCase()), true);
    assert.equal(validatePackageAccessCode(id, `  ${code.toLowerCase()}  `), true);
    assert.equal(validatePackageAccessCode(id, "SALAHKODE88"), false);
  }
});

test("kode akses Drill Bahasa Indonesia sesuai spesifikasi", () => {
  const codes: Record<string, string> = {
    "twk-bahasa-indonesia-1": "TWKBAHASAINDONESIA1KL88",
    "twk-bahasa-indonesia-2": "TWKBAHASAINDONESIA2MN45",
    "twk-bahasa-indonesia-3": "TWKBAHASAINDONESIA3PQ92",
    "twk-bahasa-indonesia-4": "TWKBAHASAINDONESIA4RS37",
  };
  for (const [id, code] of Object.entries(codes)) {
    assert.equal(getPackageAccessCode(id), code);
    assert.equal(validatePackageAccessCode(id, code), true);
    assert.equal(validatePackageAccessCode(id, code.toLowerCase()), true);
    assert.equal(validatePackageAccessCode(id, `  ${code.toLowerCase()}  `), true);
    assert.equal(validatePackageAccessCode(id, "SALAHKODE88"), false);
  }
});

test("kode akses Mini TO TIU SKD CASN, Mini TO TWK, dan Mini TO TKP sesuai spesifikasi", () => {
  const tiuCode = getPackageAccessCode("mini-tiu-skd-casn");
  assert.equal(tiuCode, "MINITIUSKD4K82");
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn", "MINITIUSKD4K82"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn", "minitiuskd4k82"), true);

  const tiu2Code = getPackageAccessCode("mini-tiu-skd-casn-2");
  assert.equal(tiu2Code, "MINITIUSKD2M73");
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-2", "MINITIUSKD2M73"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-2", "minitiuskd2m73"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-2", "  minitiuskd2m73  "), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-2", "WRONGCODE88"), false);

  const tiu3Code = getPackageAccessCode("mini-tiu-skd-casn-3");
  assert.equal(tiu3Code, "MINITIUSKD3V85");
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-3", "MINITIUSKD3V85"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-3", "minitiuskd3v85"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-3", "  minitiuskd3v85  "), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-3", "WRONGCODE99"), false);

  const tiu4Code = getPackageAccessCode("mini-tiu-skd-casn-4");
  assert.equal(tiu4Code, "MINITIUSKD4P29");
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-4", "MINITIUSKD4P29"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-4", "minitiuskd4p29"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-4", "  minitiuskd4p29  "), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn-4", "WRONGCODE77"), false);

  const newTiuCode = getPackageAccessCode("mini-tiu-new-casn");
  assert.equal(newTiuCode, "MINITIUNEWCASN26");
  assert.equal(validatePackageAccessCode("mini-tiu-new-casn", "MINITIUNEWCASN26"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-new-casn", "minitiunewcasn26"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-new-casn", "  minitiunewcasn26  "), true);
  assert.equal(validatePackageAccessCode("mini-tiu-new-casn", "WRONGCODE55"), false);

  const twkCode = getPackageAccessCode("mini-twk-kebangsaan");
  assert.equal(twkCode, "MTTWKNIPSQUAD");
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "MTTWKNIPSQUAD"), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "mttwknipsquad"), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "  mttwknipsquad  "), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "WRONGCODE12"), false);

  const tkpCode = getPackageAccessCode("mini-tkp-karakteristik");
  assert.equal(tkpCode, "MTTKPNIPSQUAD");
  assert.equal(validatePackageAccessCode("mini-tkp-karakteristik", "MTTKPNIPSQUAD"), true);
  assert.equal(validatePackageAccessCode("mini-tkp-karakteristik", "mttkpnipsquad"), true);
  assert.equal(validatePackageAccessCode("mini-tkp-karakteristik", "  mttkpnipsquad  "), true);
  assert.equal(validatePackageAccessCode("mini-tkp-karakteristik", "WRONGCODE99"), false);
});

test("tidak ada kode akses duplikat di antara seluruh paket", () => {
  const codes = Object.values(PACKAGE_ACCESS_CODES);
  const uniqueCodes = new Set(codes);
  assert.equal(codes.length, uniqueCodes.size, "Ditemukan kode akses duplikat!");
});

test("kode master berlaku untuk seluruh paket", () => {
  for (const master of MASTER_ACCESS_CODES) {
    assert.equal(isMasterAccessCode(master), true);
    assert.equal(isMasterAccessCode(master.toLowerCase()), true);
    assert.equal(validatePackageAccessCode("paket-a", master), true);
    assert.equal(validatePackageAccessCode("paket-a", master.toLowerCase()), true);
    assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", master), true);
    assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", `  ${master}  `), true);
    assert.equal(validatePackageAccessCode("twk-pancasila-1", master), true);
  }
});

test("normalisasi kode akses menangani huruf kecil dan spasi", () => {
  assert.equal(normalizeAccessCode("  mttwknipsquad  "), "MTTWKNIPSQUAD");
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", " mttwknipsquad "), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "SALAHKODE"), false);
});
