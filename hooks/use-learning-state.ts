"use client";

import { useEffect, useState } from "react";
import { createDefaultState, readLearningState, STATE_EVENT } from "@/lib/storage";

export function useLearningState() {
  const [state, setState] = useState(createDefaultState);
  useEffect(() => {
    setState(readLearningState());
    const sync = () => setState(readLearningState());
    const custom = (event: Event) => setState((event as CustomEvent).detail ?? readLearningState());
    window.addEventListener("storage", sync);
    window.addEventListener(STATE_EVENT, custom);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(STATE_EVENT, custom);
    };
  }, []);
  return state;
}
