import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence, type UserCredential } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { createOrUpdateUserDoc } from "../lib/user";
import Button from "./ui/button";

export default function SignInButton({ redirectTo }: { redirectTo?: string }) {
  const navigate = useNavigate();
  const { setProfile } = useAuth();

  const handleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);

      const provider = new GoogleAuthProvider();
      const result: UserCredential = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Build profile object immediately
      const optimisticProfile = {
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

      // Update context immediately (optimistic)
      setProfile?.(optimisticProfile);

      // Firestore write (non-blocking)
      await createOrUpdateUserDoc(firebaseUser);

      // Redirect
      navigate(redirectTo ?? "/profile", { replace: true });
    } catch (err) {
      console.error("Sign in error:", err);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      className="w-full py-2 px-4 rounded-md shadow hover:bg-blue-700"
    >
      Sign in with Google
    </Button>
  );
}
