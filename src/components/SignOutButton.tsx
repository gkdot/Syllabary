import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { LogOut } from "lucide-react";
import Button from "./ui/button";

export default function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/", { replace: true }); // go to landing page
  };

  return (
    <Button
      onClick={handleSignOut}
      variant="secondary"
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl shadow-sm"
    >
      <LogOut className="w-4 h-4" />
      <span>Sign out</span>
    </Button>
  );
}
