import { Rocket, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white grid place-content-center shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900">FeedHub</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-3 rounded-md border border-slate-200 hover:border-slate-300 text-slate-700 text-sm">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">
            <User size={16} className="mr-2" /> Start free
          </button>
        </div>
      </div>
    </header>
  );
}
