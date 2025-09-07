import FloatingCard from "./FloatingCard";
import BlackboardIcon from '../assets/integrations/blackboard.svg';
import CalendarIcon from '../assets/integrations/calendar.svg';
import OutlookIcon from '../assets/integrations/outlook.svg';
import { Check } from "lucide-react";
import { Badge } from "../components/ui/badge";
import Button from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="hero-frame p-12 rounded-[28px]">
          <div className="relative overflow-visible">

            <FloatingCard
              className="left-12 top-12 w-36 h-28 p-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-md"
              style={{ transform: "rotate(-8deg)" }}
            >
              <div className="flex items-start gap-3">
                <div className="text-xs text-gray-600">
                  Sync notes with your classes and revision schedule.
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="right-6 top-8 w-48 h-36 p-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-md"
              style={{ transform: "rotate(6deg)" }}
            >
              <div className="text-gray-700">
                <div className="text-md font-semibold">Reminder</div>
                <div className="gap-2">
                  <Badge variant="outline">10:00-12:45</Badge>
                  <div className="ml-1 mt-2 text-xs">Always remember the important things.</div>
                </div>
              </div>
            </FloatingCard>

            <div className="text-center py-16">
              <h1 className="font-heading font-semibold text-5xl md:text-7xl leading-tight text-gray-900">
                Think, plan, and track
                <span className="block text-gray-400 text-4xl md:text-6xl">
                  all in one place
                </span>
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-gray-500">
                Boost your productivity and streamline your workflow.
              </p>
              <div  className="mt-10">
                <Link to="/sign-in">
                  <Button variant="primary">Get started</Button>
                </Link>
              </div>
            </div>

            <FloatingCard
              className="left-6 bottom-6 w-56 h-36 p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-md"
              style={{ transform: "rotate(-4deg)" }}
            >
              <div className="text-sm font-medium text-gray-800">
                Today's tasks
              </div>
              <div className="mt-3 text-xs text-gray-500 flex gap-2">
                <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-gray-600">
                  Keep track of your assignments, along with the rest of your to-do list.
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500 flex gap-2">
                <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-gray-600">
                  Never miss a deadline.
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="right-8 bottom-6 w-48 h-28 p-4 rounded-xl bg-white/70 backdrop-blur border border-gray-200 shadow-md"
              style={{ transform: "rotate(3deg)" }}
            >
              <div className="text-xs font-medium text-gray-800">
                Integrate with
              </div>
              <div className="flex gap-2 mt-3">
                <div className="icon-cube">
                  <img src={BlackboardIcon} alt="Gmail" />
                </div>
                <div className="icon-cube">
                  <img src={CalendarIcon} alt="Calendar" />
                </div>
                <div className="icon-cube">
                  <img src={OutlookIcon} alt="Slack" />
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
}
