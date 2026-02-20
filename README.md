# Product Performance Dashboard (React + Vite + Tailwind)

Dark themed product performance dashboard inspired by the provided reference design.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── index.jsx
    ├── components
    │   ├── BannerCard.jsx
    │   ├── Controls.jsx
    │   ├── KPICard.jsx
    │   ├── Modal.jsx
    │   ├── Navbar.jsx
    │   ├── PerformanceChart.jsx
    │   ├── PerformanceWidget.jsx
    │   ├── ProductTable.jsx
    │   └── Sidebar.jsx
    ├── data
    │   └── mockData.js
    ├── pages
    │   └── DashboardPage.jsx
    └── styles
        └── index.css
```

## Features

- Top navbar with five tabs and profile controls.
- Sidebar with logo and quick actions.
- KPI cards including animated conversion rate.
- Recharts line chart with tooltip and highlighted max point.
- Horizontal banner carousel + modal preview.
- Sortable/paginated product table (10 rows per page).
- Date range filtering and refresh/regenerate mock data.
- Extra performance widget panel.
- Tailwind-only styling with dark, glassy, orange-accent visual system.
