import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationsGrid from "@/components/IntegrationsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Loading from "./Loading";

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/profile", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 min-h-screen min-w-screen text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          <FeaturesGrid />
        </section>
        <section id="integrations">
          <IntegrationsGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}