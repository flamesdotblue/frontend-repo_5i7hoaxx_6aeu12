import { ArrowRight, CheckCircle, Shield } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Launch your FeedHub in minutes</h2>
            <p className="mt-3 text-slate-600">
              Create a beautiful, centralized hub for announcements, feedback, and your public roadmap. Start free and upgrade as you grow.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-emerald-600" size={18} /> Custom domain & branding</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-emerald-600" size={18} /> Feedback voting & prioritization</li>
              <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 text-emerald-600" size={18} /> Changelog & release notes builder</li>
            </ul>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center h-11 px-6 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800">
                Start free
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-slate-200 text-slate-700 font-medium hover:bg-slate-50">
                See pricing
              </a>
            </div>
            <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Shield size={14} /> No credit card required. Cancel anytime.
            </p>
          </div>
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-3xl font-bold text-slate-900">5x</p>
                  <p className="text-xs text-slate-500 mt-1">More engagement</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-3xl font-bold text-slate-900">60%</p>
                  <p className="text-xs text-slate-500 mt-1">Faster feedback loops</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-500 mt-1">Community portal</p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-4 text-left">
                <p className="text-sm text-slate-600">“FeedHub helped us replace three separate tools. Our users love the transparency and we ship what actually matters.”</p>
                <p className="mt-2 text-xs font-medium text-slate-500">— Happy founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
