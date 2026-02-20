function Sidebar() {
  return (
    <aside className="hidden w-20 flex-col items-center rounded-3xl border border-white/10 bg-white/5 py-6 backdrop-blur-xl lg:flex">
      <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-black text-slate-950">
        FX
      </div>
      <div className="space-y-3 text-slate-300">
        {['🏠', '📈', '🧾', '📦', '⚡'].map((icon) => (
          <button key={icon} className="block rounded-xl p-2 hover:bg-white/10">
            {icon}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
