import { Card, CardContent } from "../components/ui/card";
import ShadowBadge from "../components/ui/shadow-badge";
import { Brain, Calendar, Upload, Clock } from "lucide-react";

const features = [
  {
    icon: <Upload className="w-8 h-8 text-blue-500" />,
    title: "Upload Syllabus",
    description: "Easily upload course syllabi in PDF, DOCX, or TXT format.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-green-500" />,
    title: "Calendar Integration",
    description: "Automatically sync assignments and exams with your calendar.",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: "Smart Parsing",
    description: "AI extracts deadlines and events without manual editing.",
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-500" />,
    title: "Stay on Track",
    description: "Get reminders and stay ahead with smart notifications.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6">
      <div className="text-center mb-8">
        <ShadowBadge>Features</ShadowBadge>

        <div className="hero-frame p-8 mt-6">
          <h2 className="font-heading text-3xl md:text-4xl">
            Keep everything in one place.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            No more playing catch up.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {f.icon}
                  <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
