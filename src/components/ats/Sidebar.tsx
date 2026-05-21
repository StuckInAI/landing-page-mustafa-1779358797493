import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Users, Calendar, BarChart3, Settings, Zap, ArrowLeft } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { to: '/ats', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/ats/jobs', label: 'Jobs', icon: Briefcase },
  { to: '/ats/candidates', label: 'Candidates', icon: Users },
  { to: '/ats/pipeline', label: 'Pipeline', icon: BarChart3 },
  { to: '/ats/interviews', label: 'Interviews', icon: Calendar },
  { to: '/ats/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0f0f1a] border-r border-white/5 flex flex-col h-screen sticky top-0">
      <div className="px-6 py-5 border-b border-white/5">
        <NavLink to="/ats" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center shadow-lg">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="text-lg font-bold gradient-text">Luminary ATS</span>
        </NavLink>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150',
                isActive
                  ? 'bg-[#6366f1]/15 text-white border border-[#6366f1]/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              )
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-white/5">
        <NavLink
          to="/"
          className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to website
        </NavLink>
      </div>
    </aside>
  );
}
