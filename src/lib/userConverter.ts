import type { FirestoreDataConverter } from "firebase/firestore";
import type { UserDoc } from "../types/firestore";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { userRef } from "../lib/firestoreRefs";
import { useState, useEffect } from "react";

export const userConverter: FirestoreDataConverter<UserDoc> = {
  toFirestore(user: UserDoc) {
    // Only include the fields you intend to write.
    return {
      uid: user.uid,
      name: user.name ?? null,
      email: user.email ?? null,
      photoURL: user.photoURL ?? null,
      providers: user.providers ?? [],
      // createdAt/lastSeen are usually set with serverTimestamp() in write ops below
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)!;
    return {
      uid: data.uid,
      name: data.name ?? null,
      email: data.email ?? null,
      photoURL: data.photoURL ?? null,
      providers: data.providers ?? [],
      createdAt: data.createdAt,
      lastSeen: data.lastSeen,
    };
  },
};

export function useUserProfile(uid?: string | null) {
  const [profile, setProfile] = useState<UserDoc | null>(null);
  useEffect(() => {
    if (!uid) {
      setProfile(null);
      return;
    }
    const ref = userRef(uid);
    const unsub = onSnapshot(ref, (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
    });
    return () => unsub();
  }, [uid]);
  return profile;
}

export async function updateProfile(uid: string, patch: Partial<Pick<UserDoc,'name'|'photoURL'>>) {
  const ref = userRef(uid);
  await updateDoc(ref, {
    ...patch,
    // do not touch providers/createdAt here
  });
}