import type { ActiveSession } from "./types";

const SESSION_VIEW_KEY = "lesinaja:open-session";

export function markSessionOpen(kind: ActiveSession["kind"]) {
  if (typeof window !== "undefined") window.sessionStorage.setItem(SESSION_VIEW_KEY, kind);
}

export function clearSessionOpen() {
  if (typeof window !== "undefined") window.sessionStorage.removeItem(SESSION_VIEW_KEY);
}

export function shouldOpenSession(kind: ActiveSession["kind"]) {
  return typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_VIEW_KEY) === kind;
}
