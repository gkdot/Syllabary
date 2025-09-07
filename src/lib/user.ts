import {
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  runTransaction,
} from "firebase/firestore";
import { userRef } from "./firestoreRefs";
import type { User } from "firebase/auth";

export async function createOrUpdateUserDoc(firebaseUser: User) {
  if (!firebaseUser.uid) throw new Error("User must have uid");

  const ref = userRef(firebaseUser.uid);
  const providerIds = (firebaseUser.providerData || [])
    .map(p => p.providerId)
    .filter(Boolean) as string[];

  // Use a transaction to atomically create or update and avoid race conditions
  await runTransaction(ref.firestore, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) {
      // first time: create the doc
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
      // exists: merge fields and append providers using arrayUnion to avoid duplicates
      const updates: any = {
        name: firebaseUser.displayName ?? null,
        email: firebaseUser.email ?? null,
        photoURL: firebaseUser.photoURL ?? null,
        lastSeen: serverTimestamp(),
      };

      tx.update(ref, updates);

      // if we got new provider IDs, ensure they are included
      if (providerIds.length) {
        // updateDoc with arrayUnion is easier outside transaction, but here:
        tx.update(ref, { providers: arrayUnion(...providerIds) });
      }
    }
  });
}
