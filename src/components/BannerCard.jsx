function BannerCard({ banner, onClick }) {
  return (
    <button
      onClick={() => onClick(banner)}
      className="min-w-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition hover:-translate-y-1"
    >
      <img src={banner.image} alt={banner.source} className="h-28 w-full object-cover" />
      <div className="p-3">
        <p className="text-sm text-slate-200">{banner.source}</p>
      </div>
    </button>
  );
}

export default BannerCard;
