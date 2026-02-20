function PerformanceWidget({ topProduct, conversionRate }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="flex items-start justify-between">
        <h3 className="text-lg text-white">Product views by name</h3>
        <span className="text-xs text-emerald-300">Performance: Good</span>
      </div>
      <p className="mt-4 text-xs text-slate-400">Overall Banner Conversion Rate</p>
      <p className="text-4xl text-accent">{conversionRate}%</p>
      <div className="mt-4 space-y-2 text-sm text-slate-300">
        <p>
          Top Product: <span className="text-white">{topProduct?.productName ?? '-'}</span>
        </p>
        <p>
          Views: <span className="text-white">{topProduct?.productViews?.toLocaleString() ?? '-'}</span>
        </p>
        <p>
          Avg. Active Time: <span className="text-white">7h 10m</span>
        </p>
      </div>
    </section>
  );
}

export default PerformanceWidget;
