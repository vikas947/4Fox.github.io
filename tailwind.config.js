/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#070B1E',
        panel: '#0C122B',
        accent: '#F28D35',
        accentSoft: '#FFAF65',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 10px 40px rgba(242, 141, 53, 0.18)',
      },
      backgroundImage: {
        'radial-dashboard':
          'radial-gradient(circle at 35% 20%, rgba(242,141,53,.27), transparent 42%), radial-gradient(circle at 70% 20%, rgba(255,120,50,.2), transparent 35%), linear-gradient(180deg, #060a1d 0%, #050816 100%)',
      },
    },
  },
  plugins: [],
};
