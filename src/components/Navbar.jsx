const tabs = ['Dashboard', 'Analytics', 'Companies', 'Documents', 'Calculator'];

function Navbar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
      <nav className="flex flex-wrap items-center gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 text-sm transition ${
              index === 0
                ? 'bg-accent text-slate-900 font-semibold shadow-[0_0_30px_rgba(242,141,53,0.35)]'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-xs text-slate-300">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">🔔</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">⚙️</span>
        <div className="h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-indigo-400 to-orange-200" />
      </div>
    </header>
  );
}

export default Navbar;
