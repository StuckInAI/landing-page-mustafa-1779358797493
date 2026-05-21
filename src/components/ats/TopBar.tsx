import { Search, Bell, Plus } from 'lucide-react';

type TopBarProps = {
  title: string;
  subtitle?: string;
  action?: { label: string; onClick: () => void };
};

export default function TopBar({ title, subtitle, action }: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 bg-[#0f0f1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="px-8 py-4 flex items-center justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-white truncate">{title}</h1>
          {subtitle && <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search candidates, jobs..."
              className="w-72 bg-[#16162a] border border-white/5 text-sm text-gray-200 placeholder:text-gray-500 rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:border-[#6366f1]/50"
            />
          </div>

          <button
            className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f59e0b] rounded-full" />
          </button>

          {action && (
            <button
              onClick={action.onClick}
              className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg hover:opacity-90 transition-opacity"
            >
              <Plus size={16} />
              {action.label}
            </button>
          )}

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6366f1] to-[#c084fc] flex items-center justify-center text-white text-sm font-semibold">
            JD
          </div>
        </div>
      </div>
    </div>
  );
}
