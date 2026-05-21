import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

type StatCardProps = {
  label: string;
  value: string | number;
  delta?: number;
  icon: LucideIcon;
  iconColor?: string;
};

export default function StatCard({ label, value, delta, icon: Icon, iconColor = 'text-[#818cf8]' }: StatCardProps) {
  const isPositive = (delta ?? 0) >= 0;
  return (
    <div className="bg-[#16162a] border border-white/5 rounded-xl p-5 card-hover">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${iconColor}`}>
          <Icon size={20} />
        </div>
        {typeof delta === 'number' && (
          <div
            className={`flex items-center gap-1 text-xs font-medium ${
              isPositive ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(delta)}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400 mt-0.5">{label}</div>
    </div>
  );
}
