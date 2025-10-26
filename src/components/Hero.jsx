import { ArrowRight, Megaphone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[720px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 right-1/3 h-[520px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
              <Megaphone size={14} /> Announce • Collect • Ship
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              The ultra‑premium hub for updates, feedback, and roadmaps
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 text-base sm:text-lg">
              FeedHub unifies your changelog, public roadmap, and community into a single, stunning portal. Build transparency, boost engagement, and ship what users love.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-medium shadow-[0_8px_30px_rgba(79,70,229,0.35)] hover:brightness-110"
              >
                Start free trial
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-slate-200/70 bg-white/70 backdrop-blur text-slate-700 font-medium hover:bg-white"
              >
                View live demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center text-amber-500">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </div>
              <p>Trusted by modern product teams</p>
            </div>
          </motion.div>

          {/* 3D Spline Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full rounded-2xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-[0_8px_40px_rgba(2,6,23,0.06)] overflow-hidden">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
              {/* Soft light gloss */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
