import { Star, MapPin, Briefcase } from 'lucide-react';
import type { Candidate } from '@/types/ats';
import { STAGE_COLORS, STAGE_LABELS } from '@/types/ats';

type CandidateCardProps = {
  candidate: Candidate;
  onClick: () => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
};

export default function CandidateCard({ candidate, onClick, draggable, onDragStart }: CandidateCardProps) {
  return (
    <div
      onClick={onClick}
      draggable={draggable}
      onDragStart={onDragStart}
      className="bg-[#16162a] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-[#6366f1]/40 hover:bg-[#1e1e35] transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#c084fc] flex items-center justify-center text-white text-sm font-semibold shrink-0">
          {candidate.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-white truncate">{candidate.name}</h3>
            <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-medium">{candidate.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
            <Briefcase size={11} />
            <span className="truncate">{candidate.jobTitle}</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
            <MapPin size={11} />
            <span className="truncate">{candidate.location}</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${STAGE_COLORS[candidate.stage]}`}>
              {STAGE_LABELS[candidate.stage]}
            </span>
            <span className="text-[10px] text-gray-500">via {candidate.source}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
