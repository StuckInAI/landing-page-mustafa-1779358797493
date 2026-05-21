import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/ats/Sidebar';

export default function AtsLayout() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-gray-100 flex">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  );
}
