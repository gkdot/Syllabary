import { doc, runTransaction, serverTimestamp, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import type { User } from "firebase/auth";

export async function createOrUpdateUserDoc(firebaseUser: User) {
  const ref = doc(db, "users", firebaseUser.uid);

  const providerIds = (firebaseUser.providerData || []).map(p => p.providerId);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) {
      tx.set(ref, {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName ?? null,
        email: firebaseUser.email ?? null,
        photoURL: firebaseUser.photoURL ?? null,
        providers: providerIds,
        createdAt: serverTimestamp(),
        lastSeen: serverTimestamp(),
      });
    } else {
      tx.update(ref, {
        name: firebaseUser.displayName ?? null,
        email: firebaseUser.email ?? null,
        photoURL: firebaseUser.photoURL ?? null,
        lastSeen: serverTimestamp(),
        providers: arrayUnion(...providerIds),
      });
    }
  });
}