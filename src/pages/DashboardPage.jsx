import { useEffect, useMemo, useState } from 'react';
import BannerCard from '../components/BannerCard';
import Controls from '../components/Controls';
import KPICard from '../components/KPICard';
import Modal from '../components/Modal';
import PerformanceChart from '../components/PerformanceChart';
import PerformanceWidget from '../components/PerformanceWidget';
import ProductTable from '../components/ProductTable';
import { bannerItems, createProductRows, createTimeSeries, dateRanges } from '../data/mockData';

function useAnimatedNumber(target, duration = 1000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function DashboardPage() {
  const [range, setRange] = useState('30');
  const [series, setSeries] = useState(() => createTimeSeries(30));
  const [products, setProducts] = useState(() => createProductRows(50));
  const [activeBanner, setActiveBanner] = useState(null);

  const filteredSeries = useMemo(() => series.slice(-Number(range)), [series, range]);

  const totalViews = filteredSeries.reduce((sum, item) => sum + item.views, 0);
  const totalCartAdditions = filteredSeries.reduce((sum, item) => sum + item.cartAdditions, 0);
  const conversionRate = totalViews ? ((totalCartAdditions / totalViews) * 100).toFixed(2) : '0.00';
  const dailyViews = Math.round(totalViews / filteredSeries.length || 0);
  const dailyCart = Math.round(totalCartAdditions / filteredSeries.length || 0);

  const animatedConversion = useAnimatedNumber(Number(conversionRate));

  const topProduct = useMemo(
    () => [...products].sort((a, b) => b.productViews - a.productViews)[0],
    [products],
  );

  const handleRefresh = () => {
    setSeries(createTimeSeries(30));
    setProducts(createProductRows(50));
  };

  return (
    <main className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold text-white md:text-5xl">Product Performance Dashboard</h1>
        <Controls value={range} options={dateRanges} onFilterChange={setRange} onRefresh={handleRefresh} />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KPICard label="Overall Conversion Rate" value={`${animatedConversion.toFixed(2)}%`} accent />
        <KPICard label="Total Views" value={totalViews.toLocaleString()} />
        <KPICard label="Total Cart Additions" value={totalCartAdditions.toLocaleString()} />
        <KPICard label="Daily Averages" value={`${dailyViews}/${dailyCart}`} subtext="Views / Cart Additions" />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr,2fr]">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <h2 className="text-lg text-white">Banner Insights</h2>
          <p className="text-sm text-slate-400">
            Between Aug 1–31, banner campaigns generated an increase in overall engagement compared to the previous month.
          </p>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {bannerItems.map((banner) => (
              <BannerCard key={banner.id} banner={banner} onClick={setActiveBanner} />
            ))}
          </div>
        </div>
        <PerformanceChart data={filteredSeries} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[2fr,1fr]">
        <ProductTable data={products} />
        <PerformanceWidget topProduct={topProduct} conversionRate={conversionRate} />
      </section>

      <Modal open={Boolean(activeBanner)} onClose={() => setActiveBanner(null)}>
        {activeBanner && (
          <figure className="space-y-3">
            <img src={activeBanner.image} alt={activeBanner.source} className="max-h-[70vh] w-full rounded-xl object-cover" />
            <figcaption className="text-sm text-slate-200">{activeBanner.source}</figcaption>
          </figure>
        )}
      </Modal>
    </main>
  );
}

export default DashboardPage;
