import { updateDoc, serverTimestamp } from "firebase/firestore";
import { userRef } from "./firestoreRefs";

const LAST_SEEN_KEY = "app:lastSeenAt";
const MIN_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

export async function touchLastSeen(uid: string) {
  try {
    const last = Number(localStorage.getItem(LAST_SEEN_KEY) || "0");
    const now = Date.now();
    if (now - last < MIN_INTERVAL_MS) return;
    localStorage.setItem(LAST_SEEN_KEY, String(now));
    const ref = userRef(uid);
    await updateDoc(ref, { lastSeen: serverTimestamp() });
  } catch (e) {
    // non-fatal: ignore failures to update lastSeen
    console.warn("lastSeen update failed", e);
  }
}