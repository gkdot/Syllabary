import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import type { User } from "../types/user";
import Button from "./ui/button";

export default function SignInButton() {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    // This is the full Firebase User
    const firebaseUser = result.user;

    // Map it to your profile shape
    const userProfile: User = {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
      providerData: firebaseUser.providerData.map((p) => ({
        providerId: p.providerId,
        uid: p.uid,
        displayName: p.displayName,
        email: p.email,
        photoURL: p.photoURL,
      })),
    };

    // Save profile to Firestore
    await setDoc(doc(db, "users", firebaseUser.uid), userProfile, {
      merge: true,
    });
  };

  return (
    <Button
      onClick={handleSignIn}
      className="py-2 px-4 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
    >
      Sign in with Google
    </Button>
  );
}
