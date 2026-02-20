import { useMemo, useState } from 'react';

const headers = [
  { key: 'productName', label: 'Product Name' },
  { key: 'productViews', label: 'Product Views' },
  { key: 'cartAdditions', label: 'Cart Additions' },
];

function ProductTable({ data }) {
  const [sortConfig, setSortConfig] = useState({ key: 'productViews', direction: 'desc' });
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const sortedRows = useMemo(() => {
    const rows = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      }
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    });
    return rows;
  }, [data, sortConfig]);

  const maxPage = Math.max(1, Math.ceil(sortedRows.length / rowsPerPage));
  const paginatedRows = sortedRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const onSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'desc' };
    });
  };

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <h3 className="mb-4 text-lg text-white">Product Table</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[550px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-slate-400">
              {headers.map((header) => (
                <th key={header.key} className="px-3 py-3">
                  <button className="flex items-center gap-2" onClick={() => onSort(header.key)}>
                    {header.label}
                    <span className="text-xs text-accent">↕</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((row) => (
              <tr key={row.id} className="border-b border-white/5 text-slate-200">
                <td className="px-3 py-3">{row.productName}</td>
                <td className="px-3 py-3">{row.productViews.toLocaleString()}</td>
                <td className="px-3 py-3">{row.cartAdditions.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>
          Page {page} / {maxPage} · Rows: {data.length}
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg border border-white/10 px-3 py-1 disabled:opacity-40"
          >
            Prev
          </button>
          <button
            disabled={page >= maxPage}
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            className="rounded-lg border border-white/10 px-3 py-1 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductTable;
