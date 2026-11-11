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
 * BACKGROUND MUSIC SYNTHESIZER (BGM) - KAHOOT VIBES
 * Menghasilkan instrumen funky, bouncing bassline, countdown clock-ticks,
 * dan staccato synth leads khas kuis Kahoot secara offline via Web Audio API.
 * Bervariasi untuk masing-masing game:
 * - "hitung": Kahoot Frenzy (128 BPM, cepat, beradrenalin tinggi)
 * - "aritmatika": Kahoot Lobby Lounge (120 BPM, funky lounge, santai tapi grooving)
 * - "perbandingan": Kahoot Trivia Marimba (124 BPM, ritmik marimba kuis ceria)
 * ============================================================================
 */

export type BGMTrack = "hitung" | "aritmatika" | "perbandingan";

let activeBgmTrack: BGMTrack | null = null;
let bgmTimer: ReturnType<typeof setInterval> | null = null;
let bgmMasterGain: GainNode | null = null;
let bgmFilter: BiquadFilterNode | null = null;
let currentBgmStep = 0;
let nextBgmTime = 0;

/**
 * Detik jam kuis (Tick-Tock Metronom khas Kahoot)
 */
function playKahootTick(
  ctx: AudioContext,
  dest: AudioNode,
  time: number,
  isHigh: boolean
): void {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    // Nada tinggi / rendah untuk aksen detik jam
    osc.frequency.setValueAtTime(isHigh ? 1320 : 880, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.045, time + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.022);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(time);
    osc.stop(time + 0.025);
  } catch {
    // Safe ignore
  }
}

/**
 * Funk Bouncy Bass khas Kahoot
 */
function playKahootBass(
  ctx: AudioContext,
  dest: AudioNode,
  freq: number,
  time: number,
  duration: number
): void {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.24, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  } catch {
    // Safe ignore
  }
}

/**
 * Melodi / Akord Staccato Lead khas Kahoot
 */
function playKahootLead(
  ctx: AudioContext,
  dest: AudioNode,
  freq: number,
  time: number,
  duration: number,
  type: OscillatorType = "sine",
  vol: number = 0.12
): void {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(vol, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(dest);

    osc.start(time);
    osc.stop(time + duration + 0.02);
  } catch {
    // Safe ignore
  }
}

// -----------------------------------------------------------------------------
// TRACK 1: Arena Hitung Cepat (Kahoot Frenzy - 32 Steps Multi-Part)
// Part A (0..15): Bouncing slap bass di C minor + staccato lead hook
// Part B (16..31): Funk lift (F -> G -> Bb -> C) + rapid countdown arpeggio
// -----------------------------------------------------------------------------
const HITUNG_BASS = [
  // Part A (0..15)
  65.41, 130.81, 0, 65.41, 77.78, 87.31, 98.0, 0,
  65.41, 130.81, 116.54, 0, 98.0, 87.31, 77.78, 73.42,
  // Part B (16..31) - The Lift
  87.31, 174.61, 0, 87.31, 98.0, 196.0, 0, 98.0,
  116.54, 233.08, 0, 116.54, 130.81, 116.54, 98.0, 87.31,
];
const HITUNG_LEAD = [
  // Part A (0..15)
  523.25, 0, 622.25, 0, 783.99, 698.46, 622.25, 523.25,
  466.16, 523.25, 622.25, 0, 783.99, 932.33, 783.99, 0,
  // Part B (16..31) - Rapid Arp Run
  698.46, 783.99, 932.33, 1046.5, 932.33, 783.99, 698.46, 622.25,
  783.99, 932.33, 1046.5, 1174.66, 1046.5, 932.33, 783.99, 622.25,
];

// -----------------------------------------------------------------------------
// TRACK 2: Arena Aritmatika Sosial (Kahoot Lobby Lounge - 32 Steps Multi-Part)
// Part A (0..15): Funk groove D minor + akord stabs melompat
// Part B (16..31): Walking funk bass + counterpoint melody staccato
// -----------------------------------------------------------------------------
const ARITM_BASS = [
  // Part A (0..15)
  73.42, 0, 146.83, 73.42, 87.31, 0, 98.0, 110.0,
  73.42, 0, 130.81, 0, 98.0, 0, 110.0, 130.81,
  // Part B (16..31) - Walking Bass
  110.0, 0, 98.0, 0, 87.31, 0, 73.42, 0,
  65.41, 130.81, 0, 73.42, 87.31, 98.0, 110.0, 130.81,
];
const ARITM_CHORD: (number[] | null)[] = [
  // Part A (0..15)
  [349.23, 440.0], null, [349.23, 523.25], null,
  [392.0, 587.33], null, [440.0, 659.25], null,
  [349.23, 523.25], null, [329.63, 493.88], null,
  [293.66, 440.0], null, [349.23, 587.33], null,
  // Part B (16..31) - Melodic Staccato Lounge
  [440.0], [523.25], null, [587.33],
  null, [659.25], [587.33], [523.25],
  [440.0], null, [392.0], [440.0],
  [523.25], null, [440.0], null,
];

// -----------------------------------------------------------------------------
// TRACK 3: Arena Perbandingan (Kahoot Trivia Marimba - 32 Steps Multi-Part)
// Part A (0..15): Marimba pentatonik G ceria + bouncing bass
// Part B (16..31): Dialog plink melenting C & D scale transition
// -----------------------------------------------------------------------------
const PERBAND_BASS = [
  // Part A (0..15)
  98.0, 196.0, 0, 98.0, 123.47, 0, 130.81, 146.83,
  82.41, 164.81, 0, 82.41, 146.83, 0, 130.81, 123.47,
  // Part B (16..31) - Lift to C & D
  130.81, 0, 196.0, 130.81, 146.83, 0, 220.0, 146.83,
  98.0, 146.83, 196.0, 0, 146.83, 130.81, 123.47, 98.0,
];
const PERBAND_PLINK = [
  // Part A (0..15)
  392.0, 493.88, 587.33, 0, 783.99, 587.33, 493.88, 0,
  659.25, 783.99, 987.77, 880.0, 783.99, 659.25, 587.33, 0,
  // Part B (16..31) - Fast Plink Dialogue
  587.33, 659.25, 783.99, 880.0, 987.77, 0, 880.0, 783.99,
  659.25, 0, 587.33, 493.88, 392.0, 493.88, 587.33, 0,
];

function scheduleStep(
  ctx: AudioContext,
  track: BGMTrack,
  step: number,
  time: number,
  stepDur: number,
  filter: BiquadFilterNode
): void {
  // 1. Tick metronom countdown kuis Kahoot
  // Pada akhir frase (step 28..31), detak berbunyi setiap step untuk sensasi countdown
  const isCountdownRush = step >= 28;
  if (isCountdownRush || step % 2 === 0) {
    playKahootTick(ctx, filter, time, step % 4 === 0 || isCountdownRush);
  }

  // 2. Instrumen nada sesuai track (32 steps loop)
  if (track === "hitung") {
    const bFreq = HITUNG_BASS[step];
    if (bFreq && bFreq > 0) {
      playKahootBass(ctx, filter, bFreq, time, stepDur * 0.65);
    }
    const lFreq = HITUNG_LEAD[step];
    if (lFreq && lFreq > 0) {
      playKahootLead(ctx, filter, lFreq, time, stepDur * 0.5, "triangle", 0.13);
    }
  } else if (track === "aritmatika") {
    const bFreq = ARITM_BASS[step];
    if (bFreq && bFreq > 0) {
      playKahootBass(ctx, filter, bFreq, time, stepDur * 0.7);
    }
    const notes = ARITM_CHORD[step];
    if (notes) {
      notes.forEach((freq) => {
        playKahootLead(ctx, filter, freq, time, stepDur * 0.5, "sine", 0.1);
      });
    }
  } else if (track === "perbandingan") {
    const bFreq = PERBAND_BASS[step];
    if (bFreq && bFreq > 0) {
      playKahootBass(ctx, filter, bFreq, time, stepDur * 0.6);
    }
    const pFreq = PERBAND_PLINK[step];
    if (pFreq && pFreq > 0) {
      playKahootLead(ctx, filter, pFreq, time, stepDur * 0.45, "triangle", 0.14);
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
    masterGain.gain.linearRampToValueAtTime(0.24, ctx.currentTime + 0.25);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(
      track === "aritmatika" ? 1100 : track === "perbandingan" ? 1250 : 1400,
      ctx.currentTime
    );
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    bgmMasterGain = masterGain;
    bgmFilter = filter;

    // Tempo energik khas Kahoot (120 - 128 BPM)
    let stepDuration = 0.234; // 128 BPM (Hitung)
    if (track === "aritmatika") {
      stepDuration = 0.25; // 120 BPM (Aritmatika)
    } else if (track === "perbandingan") {
      stepDuration = 0.242; // 124 BPM (Perbandingan)
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
        currentBgmStep = (currentBgmStep + 1) % 32;
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


