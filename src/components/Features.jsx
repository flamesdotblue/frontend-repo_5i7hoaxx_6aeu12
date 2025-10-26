import { MessageSquare, Megaphone, Users, Settings, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Changelog & Announcements",
    desc: "Publish beautiful release notes and product updates that keep users engaged and informed.",
  },
  {
    icon: MessageSquare,
    title: "Feedback & Feature Requests",
    desc: "Collect ideas from your customers, upvote requests, and turn insights into your roadmap.",
  },
  {
    icon: Users,
    title: "Community Discussions",
    desc: "Bring conversations into one place with threaded comments and reactions.",
  },
  {
    icon: Settings,
    title: "Customizable & Brandable",
    desc: "Match your hub to your brand with custom domains, themes, and components.",
  },
  {
    icon: Shield,
    title: "Permissions & Moderation",
    desc: "Manage visibility, roles, and spam protection confidently at any scale.",
  },
  {
    icon: Rocket,
    title: "Fast to Set Up",
    desc: "Launch in minutes, not weeks. Import existing updates from your current tools.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need in one hub</h2>
          <p className="mt-3 text-slate-600">Replace scattered tools with a single, delightful space for roadmaps, updates, and feedback.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-content-center group-hover:bg-indigo-100">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
