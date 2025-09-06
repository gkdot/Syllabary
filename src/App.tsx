import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntegrationsGrid from "./components/IntegrationsGrid";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";

export default function App() {
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
