import { ArrowRight, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/60 px-3 py-1 text-xs font-medium text-indigo-700">
            <Megaphone size={14} /> Announce, collect, and ship smarter
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Your all‑in‑one hub for updates, feedback, and roadmaps
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600 text-base sm:text-lg">
            FeedHub helps founders and product teams centralize changelogs, feature requests, and community discussions in one branded portal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-medium shadow-sm hover:opacity-95"
            >
              Start free trial
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
            >
              View live demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-14 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-slate-50 to-white p-6">
            <div className="grid h-full grid-cols-12 gap-6">
              <div className="col-span-4 hidden md:flex flex-col gap-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Roadmap</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> Public voting</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Dark mode</li>
                    <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Slack integration</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">Inbox</p>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <p className="truncate">+1 on the new API docs</p>
                    <p className="truncate">Importer for Intercom tickets</p>
                    <p className="truncate">Custom domain support</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="h-full rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-emerald-600">Changelog</p>
                      <h3 className="text-lg font-semibold text-slate-900">Launch: FeedHub 1.0</h3>
                    </div>
                    <span className="text-xs text-slate-500">2h ago</span>
                  </div>
                  <div className="mt-3 space-y-3 text-sm text-slate-700">
                    <p>We’ve unified announcements, roadmaps, and feedback into a single, beautiful hub. Ask for features, track progress, and celebrate your releases with your community.</p>
                    <ul className="list-disc ml-5">
                      <li>Collect and prioritize feature requests</li>
                      <li>Public roadmap with status columns</li>
                      <li>Auto‑generated release notes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
