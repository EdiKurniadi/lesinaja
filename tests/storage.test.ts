import test from "node:test";
import assert from "node:assert/strict";
import { createDefaultState, readLearningState, STORAGE_KEY, writeLearningState } from "../lib/storage";

function installWindow(initial?: string) {
  const values = new Map<string, string>();
  if (initial !== undefined) values.set(STORAGE_KEY, initial);
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      localStorage: {
        getItem: (key: string) => values.get(key) ?? null,
        setItem: (key: string, value: string) => values.set(key, value),
      },
      dispatchEvent: () => true,
    },
  });
  return values;
}

test("data rusak dipulihkan menjadi state awal", () => {
  installWindow("{rusak");
  assert.deepEqual(readLearningState().attempts, []);
  assert.equal(readLearningState().version, 2);
});

test("state lama yang parsial dimigrasikan dengan nilai default", () => {
  installWindow(JSON.stringify({ version: 1, attempts: [], drillStats: { q1: { attempts: 1, earned: 5, possible: 5, lastAnsweredAt: 1 } } }));
  const state = readLearningState();
  assert.equal(state.version, 2);
  assert.equal(state.activeTryout, null);
  assert.equal(state.drillStats.q1.earned, 5);
});

test("sesi dan riwayat tidak valid dibuang tanpa merusak data lain", () => {
  installWindow(JSON.stringify({ version: 2, activeTryout: { id: "rusak" }, attempts: [{ id: "rusak" }], drillStats: { aman: { attempts: 1, earned: 4, possible: 5, lastAnsweredAt: 1 }, rusak: { attempts: "x" } } }));
  const state = readLearningState();
  assert.equal(state.activeTryout, null);
  assert.deepEqual(state.attempts, []);
  assert.equal(state.drillStats.aman.earned, 4);
  assert.equal(state.drillStats.rusak, undefined);
});

test("penulisan state menggunakan versi terbaru", () => {
  const values = installWindow();
  writeLearningState(createDefaultState());
  assert.equal(JSON.parse(values.get(STORAGE_KEY)!).version, 2);
});
