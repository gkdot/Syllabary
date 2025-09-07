import BlackboardIcon from '../assets/integrations/blackboard.svg';
import DriveIcon from '../assets/integrations/drive.svg';
import CalendarIcon from '../assets/integrations/calendar.svg';
import GmailIcon from '../assets/integrations/gmail.svg';
import OutlookIcon from '../assets/integrations/outlook.svg';
import TeamsIcon from '../assets/integrations/teams.svg';
import SlackIcon from '../assets/integrations/slack.svg';
import ZoomIcon from '../assets/integrations/zoom.svg';
import ShadowBadge from "../components/ui/shadow-badge";

const apps = [
  { name: 'Blackboard', icon: BlackboardIcon },
  { name: 'Drive', icon: DriveIcon },
  { name: 'Calendar', icon: CalendarIcon },
  { name: 'Gmail', icon: GmailIcon },
  { name: 'Outlook', icon: OutlookIcon },
  { name: 'Teams', icon: TeamsIcon },
  { name: 'Slack', icon: SlackIcon },
  { name: 'Zoom', icon: ZoomIcon },
];

export default function IntegrationsGrid() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6">
      <div className="text-center">
        <ShadowBadge>Integrations</ShadowBadge>

        <div className="hero-frame p-8 mt-6">
          <h2 className="font-heading text-3xl md:text-4xl">
            Integrate with your favorite apps.
          </h2>

          <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-6 place-items-center">
            {apps.map((app, i) => (
              <div
                key={i}
                className="w-36 h-36 card-neumo flex flex-col items-center justify-center group"
              >
                <img
                  src={app.icon}
                  alt={app.name + " icon"}
                  className="w-12 h-12 mb-2 transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-xs">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
