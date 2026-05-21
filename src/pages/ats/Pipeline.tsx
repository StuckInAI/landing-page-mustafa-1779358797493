import { useState } from 'react';
import TopBar from '@/components/ats/TopBar';
import CandidateCard from '@/components/ats/CandidateCard';
import CandidateDrawer from '@/components/ats/CandidateDrawer';
import { mockCandidates } from '@/data/atsMockData';
import type { Candidate, CandidateStage } from '@/types/ats';
import { STAGE_LABELS } from '@/types/ats';

const STAGES: CandidateStage[] = ['applied', 'screening', 'interview', 'offer', 'hired', 'rejected'];

const STAGE_HEADER_COLORS: Record<CandidateStage, string> = {
  applied: 'border-t-blue-500',
  screening: 'border-t-purple-500',
  interview: 'border-t-amber-500',
  offer: 'border-t-pink-500',
  hired: 'border-t-emerald-500',
  rejected: 'border-t-red-500',
};

export default function Pipeline() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const [selected, setSelected] = useState<Candidate | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [hoveredStage, setHoveredStage] = useState<CandidateStage | null>(null);

  const handleDragStart = (id: string) => (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (stage: CandidateStage) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHoveredStage(stage);
  };

  const handleDrop = (stage: CandidateStage) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedId) {
      setCandidates((prev) => prev.map((c) => (c.id === draggedId ? { ...c, stage } : c)));
    }
    setDraggedId(null);
    setHoveredStage(null);
  };

  const handleStageChange = (id: string, stage: CandidateStage) => {
    setCandidates((prev) => prev.map((c) => (c.id === id ? { ...c, stage } : c)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, stage } : prev));
  };

  return (
    <>
      <TopBar
        title="Pipeline"
        subtitle="Drag and drop candidates between stages"
      />
      <div className="px-8 py-6">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STAGES.map((stage) => {
            const stageCandidates = candidates.filter((c) => c.stage === stage);
            const isHovered = hoveredStage === stage;
            return (
              <div
                key={stage}
                onDragOver={handleDragOver(stage)}
                onDragLeave={() => setHoveredStage(null)}
                onDrop={handleDrop(stage)}
                className={`shrink-0 w-80 bg-[#16162a] border-t-2 border-x border-b border-white/5 rounded-xl flex flex-col transition-colors ${STAGE_HEADER_COLORS[stage]} ${
                  isHovered ? 'bg-[#1e1e35] ring-2 ring-[#6366f1]/40' : ''
                }`}
              >
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">{STAGE_LABELS[stage]}</h3>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                    {stageCandidates.length}
                  </span>
                </div>
                <div className="flex-1 p-3 space-y-3 min-h-[200px] max-h-[calc(100vh-220px)] overflow-y-auto">
                  {stageCandidates.map((c) => (
                    <CandidateCard
                      key={c.id}
                      candidate={c}
                      onClick={() => setSelected(c)}
                      draggable
                      onDragStart={handleDragStart(c.id)}
                    />
                  ))}
                  {stageCandidates.length === 0 && (
                    <div className="text-center text-xs text-gray-600 py-8 border border-dashed border-white/5 rounded-lg">
                      Drop candidates here
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CandidateDrawer
        candidate={selected}
        onClose={() => setSelected(null)}
        onStageChange={handleStageChange}
      />
    </>
  );
}
