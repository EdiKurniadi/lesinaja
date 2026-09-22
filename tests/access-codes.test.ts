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
  assert.equal(ALL_TRYOUT_PACKAGES.length, 7);
  assert.equal(DRILL_PACKAGES.length, 54);

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

  assert.equal(Object.keys(PACKAGE_ACCESS_CODES).length, 61);
});

test("kode akses Mini TO TIU SKD CASN dan Mini TO TWK sesuai spesifikasi", () => {
  const tiuCode = getPackageAccessCode("mini-tiu-skd-casn");
  assert.equal(tiuCode, "MINITIUSKD4K82");
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn", "MINITIUSKD4K82"), true);
  assert.equal(validatePackageAccessCode("mini-tiu-skd-casn", "minitiuskd4k82"), true);

  const twkCode = getPackageAccessCode("mini-twk-kebangsaan");
  assert.equal(twkCode, "MTTWKNIPSQUAD");
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "MTTWKNIPSQUAD"), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "mttwknipsquad"), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "  mttwknipsquad  "), true);
  assert.equal(validatePackageAccessCode("mini-twk-kebangsaan", "WRONGCODE12"), false);
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
