import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Building } from "lucide-react";
import ShadowBadge from "./ui/shadow-badge";

const solutions = [
  {
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    title: "For Students",
    description:
      "Stay ahead of deadlines by automatically syncing assignments and exams to your calendar. Never miss a due date again.",
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "For Educators",
    description:
      "Provide students with structured, organized timelines. Save time with automated syllabus-to-calendar conversion.",
  },
  {
    icon: <Building className="w-10 h-10 text-purple-500" />,
    title: "For Institutions",
    description:
      "Standardize and streamline academic scheduling across departments, making it easier to track and coordinate coursework.",
  },
];

export default function Solutions() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gray-50 text-gray-800">
      <div className="text-center border-b border-gray-100 py-12">
        <ShadowBadge>Solutions</ShadowBadge>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you’re a student, educator, or institution, our platform
          adapts to your needs with AI-powered syllabus management.
        </p>
      </div>

      <div className="py-8 max-w-6xl mx-auto px-6 flex-1">
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((s, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-8 text-center flex flex-col items-center">
                {s.icon}
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
