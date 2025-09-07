import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignInButton from "../components/SignInButton";
import Button from "@/components/ui/button";

export default function SignInPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // If already signed in, go straight to profile
  useEffect(() => {
    if (!loading && user) {
      navigate("/profile", { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign in to Syllabary
        </h2>

        <div className="flex flex-col space-y-4">
          <SignInButton />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
