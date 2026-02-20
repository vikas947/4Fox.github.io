function Controls({ value, options, onFilterChange, onRefresh }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={value}
        onChange={(event) => onFilterChange(event.target.value)}
        className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-slate-900">
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={onRefresh}
        className="rounded-xl bg-white/10 px-4 py-2 text-sm text-slate-100 transition hover:bg-accent hover:text-slate-950"
      >
        Refresh
      </button>
    </div>
  );
}

export default Controls;
