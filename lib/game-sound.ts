/**
 * Web Audio API Sound Synthesizer untuk Game LesinAja
 * Berjalan offline tanpa memerlukan aset suara eksternal.
 */

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const saved = window.localStorage.getItem("lesinaja.game.sound");
    if (saved !== null) return saved === "true";
  } catch {
    // fallback
  }
  return soundEnabled;
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (!enabled) {
    stopBackgroundMusic();
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem("lesinaja.game.sound", String(enabled));
    } catch {
      // fallback
    }
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
 * Nada ceria "Ting!" saat jawaban benar
 */
export function playCorrectSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Dua nada naik cepat: E5 -> B5
    osc.frequency.setValueAtTime(659.25, now);
    osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.1);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  } catch {
    // Audio context policy safe ignore
  }
}

/**
 * Nada "Buzzer" lembut saat jawaban salah atau waktu habis
 */
export function playWrongSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    // Nada turun: C#3 -> A2
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(95, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  } catch {
    // Audio context policy safe ignore
  }
}

/**
 * Nada Combo / Streak khusus saat mencapai rentetan benar (3x, 5x, 10x)
 */
export function playStreakSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    // Arpeggio 3 nada: C5 -> E5 -> G5 -> C6
    const freqs = [523.25, 659.25, 783.99, 1046.5];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.06;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });
  } catch {
    // Safe ignore
  }
}

/**
 * Nada Game Over saat nyawa habis
 */
export function playGameOverSound(): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const freqs = [330, 293.66, 261.63, 196]; // E4, D4, C4, G3
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.12;

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.26);
    });
  } catch {
    // Safe ignore
  }
}

/**
 * ============================================================================
 * BACKGROUND MUSIC SYNTHESIZER (BGM)
 * Menghasilkan arpeggio & harmoni prosedural Web Audio API murni secara offline
 * Bervariasi untuk masing-masing game:
 * - "hitung": Upbeat & energik arcade (126 BPM)
 * - "aritmatika": Warm Lo-Fi jazz & fokus kalkulasi (90 BPM)
 * - "perbandingan": Playful puzzle & marimba rhythmic (108 BPM)
 * ============================================================================
 */

export type BGMTrack = "hitung" | "aritmatika" | "perbandingan";

let activeBgmTrack: BGMTrack | null = null;
let bgmTimer: ReturnType<typeof setInterval> | null = null;
let bgmMasterGain: GainNode | null = null;
let bgmFilter: BiquadFilterNode | null = null;
let currentBgmStep = 0;
let nextBgmTime = 0;

function playTone(
  ctx: AudioContext,
  dest: AudioNode,
  freq: number,
  time: number,
  duration: number,
  type: OscillatorType,
  vol: number
): void {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(vol, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(time);
    osc.stop(time + duration + 0.03);
  } catch {
    // Safe ignore
  }
}

// Track 1: Arena Hitung Cepat (Upbeat & Energik, 126 BPM)
const HITUNG_BASS = [130.81, 0, 98.0, 0, 87.31, 0, 98.0, 0, 110.0, 0, 82.41, 0, 87.31, 0, 98.0, 0];
const HITUNG_LEAD = [
  523.25, 659.25, 783.99, 659.25, 880.0, 783.99, 659.25, 587.33,
  523.25, 587.33, 659.25, 783.99, 698.46, 659.25, 587.33, 493.88,
];

// Track 2: Arena Aritmatika Sosial (Chill Lo-Fi Jazz, 90 BPM)
const ARITM_BASS = [65.41, 0, 130.81, 0, 110.0, 0, 164.81, 0, 73.42, 0, 146.83, 0, 98.0, 0, 146.83, 0];
const ARITM_CHORD: (number[] | null)[] = [
  [329.63, 493.88], [392.0], [329.63, 659.25], [587.33],
  [261.63, 392.0], [329.63], [261.63, 523.25], [493.88],
  [349.23, 523.25], [440.0], [349.23, 698.46], [659.25],
  [349.23, 493.88], [587.33], [293.66, 392.0], [493.88],
];

// Track 3: Arena Perbandingan (Playful Marimba Puzzle, 108 BPM)
const PERBAND_BASS = [146.83, 0, 146.83, 0, 123.47, 0, 123.47, 0, 98.0, 0, 98.0, 0, 110.0, 0, 110.0, 0];
const PERBAND_PLINK = [
  440.0, 369.99, 587.33, 440.0,
  392.0, 493.88, 659.25, 587.33,
  493.88, 587.33, 783.99, 739.99,
  329.63, 440.0, 554.37, 659.25,
];

function scheduleStep(
  ctx: AudioContext,
  track: BGMTrack,
  step: number,
  time: number,
  stepDur: number,
  filter: BiquadFilterNode
): void {
  if (track === "hitung") {
    const bFreq = HITUNG_BASS[step];
    if (bFreq && bFreq > 0) {
      playTone(ctx, filter, bFreq, time, stepDur * 0.7, "triangle", 0.16);
    }
    const lFreq = HITUNG_LEAD[step];
    if (lFreq && lFreq > 0) {
      playTone(ctx, filter, lFreq, time, stepDur * 0.85, "sine", 0.12);
    }
  } else if (track === "aritmatika") {
    const bFreq = ARITM_BASS[step];
    if (bFreq && bFreq > 0) {
      playTone(ctx, filter, bFreq, time, stepDur * 0.9, "sine", 0.18);
    }
    const notes = ARITM_CHORD[step];
    if (notes) {
      notes.forEach((freq) => {
        playTone(ctx, filter, freq, time, stepDur * 0.8, "triangle", 0.08);
      });
    }
  } else if (track === "perbandingan") {
    const bFreq = PERBAND_BASS[step];
    if (bFreq && bFreq > 0) {
      playTone(ctx, filter, bFreq, time, stepDur * 0.6, "triangle", 0.15);
    }
    const pFreq = PERBAND_PLINK[step];
    if (pFreq && pFreq > 0) {
      playTone(ctx, filter, pFreq, time, stepDur * 0.55, "triangle", 0.14);
    }
  }
}

/**
 * Memulai Background Music sesuai track arena
 */
export function startBackgroundMusic(track: BGMTrack): void {
  if (!isSoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  if (activeBgmTrack === track && bgmTimer !== null) {
    return;
  }

  stopBackgroundMusic();

  activeBgmTrack = track;
  currentBgmStep = 0;

  try {
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.3);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(
      track === "aritmatika" ? 850 : track === "perbandingan" ? 1150 : 1300,
      ctx.currentTime
    );
    filter.Q.setValueAtTime(1, ctx.currentTime);

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    bgmMasterGain = masterGain;
    bgmFilter = filter;

    let stepDuration = 0.238; // 126 BPM
    if (track === "aritmatika") {
      stepDuration = 0.333; // 90 BPM
    } else if (track === "perbandingan") {
      stepDuration = 0.278; // 108 BPM
    }

    nextBgmTime = ctx.currentTime + 0.05;

    bgmTimer = setInterval(() => {
      if (!isSoundEnabled() || !audioCtx || !bgmFilter) {
        stopBackgroundMusic();
        return;
      }
      const lookahead = 0.15;
      while (nextBgmTime < ctx.currentTime + lookahead) {
        scheduleStep(ctx, track, currentBgmStep, nextBgmTime, stepDuration, bgmFilter);
        nextBgmTime += stepDuration;
        currentBgmStep = (currentBgmStep + 1) % 16;
      }
    }, 40);
  } catch {
    // Safe ignore
  }
}

/**
 * Menghentikan Background Music seketika dengan ramp down lembut
 */
export function stopBackgroundMusic(): void {
  if (bgmTimer !== null) {
    clearInterval(bgmTimer);
    bgmTimer = null;
  }
  if (bgmMasterGain && audioCtx) {
    try {
      const g = bgmMasterGain;
      const now = audioCtx.currentTime;
      g.gain.setValueAtTime(g.gain.value, now);
      g.gain.linearRampToValueAtTime(0.0001, now + 0.08);
      setTimeout(() => {
        try {
          g.disconnect();
        } catch {
          // ignore
        }
      }, 100);
    } catch {
      // ignore
    }
    bgmMasterGain = null;
  }
  bgmFilter = null;
  activeBgmTrack = null;
  currentBgmStep = 0;
}

export function getActiveBGMTrack(): BGMTrack | null {
  return activeBgmTrack;
}


