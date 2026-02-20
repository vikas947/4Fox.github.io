import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function PerformanceChart({ data }) {
  const maxPoint = data.reduce((acc, item) => (item.cartAdditions > acc.cartAdditions ? item : acc), data[0]);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl">
      <h3 className="mb-4 text-lg text-white">Product views and cart additions</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
            <XAxis dataKey="date" tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={(value) => value.slice(5)} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <Tooltip
              contentStyle={{ background: '#0B132F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px' }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend />
            <Line type="monotone" dataKey="views" stroke="#F28D35" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="cartAdditions" stroke="#D9E1F2" strokeWidth={2} dot={false} />
            {maxPoint && (
              <ReferenceDot
                x={maxPoint.date}
                y={maxPoint.cartAdditions}
                r={7}
                fill="#F28D35"
                stroke="#fff"
                label={{ value: 'Max', position: 'top', fill: '#F8FAFC' }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default PerformanceChart;
