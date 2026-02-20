import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div className="min-h-screen bg-radial-dashboard p-4 text-slate-100 md:p-6">
      <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-[80px,1fr]">
        <Sidebar />
        <div className="space-y-4">
          <Navbar />
          <DashboardPage />
        </div>
      </div>
    </div>
  );
}

export default App;
