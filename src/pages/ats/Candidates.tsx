import { useState, useMemo } from 'react';
import { Search, Star, LayoutGrid, List } from 'lucide-react';
import TopBar from '@/components/ats/TopBar';
import CandidateCard from '@/components/ats/CandidateCard';
import CandidateDrawer from '@/components/ats/CandidateDrawer';
import { mockCandidates } from '@/data/atsMockData';
import type { Candidate, CandidateStage } from '@/types/ats';
import { STAGE_LABELS, STAGE_COLORS } from '@/types/ats';
import clsx from 'clsx';

type ViewMode = 'grid' | 'list';

export default function Candidates() {
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
  const [query, setQuery] = useState<string>('');
  const [stageFilter, setStageFilter] = useState<CandidateStage | 'all'>('all');
  const [view, setView] = useState<ViewMode>('grid');
  const [selected, setSelected] = useState<Candidate | null>(null);

  const filtered = useMemo(() => {
    return candidates.filter((c) => {
      const q = query.toLowerCase();
      const matchesQ =
        c.name.toLowerCase().includes(q) ||
        c.jobTitle.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q));
      const matchesS = stageFilter === 'all' || c.stage === stageFilter;
      return matchesQ && matchesS;
    });
  }, [candidates, query, stageFilter]);

  const handleStageChange = (id: string, stage: CandidateStage) => {
    setCandidates((prev) => prev.map((c) => (c.id === id ? { ...c, stage } : c)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, stage } : prev));
  };

  const stages: (CandidateStage | 'all')[] = ['all', 'applied', 'screening', 'interview', 'offer', 'hired', 'rejected'];

  return (
    <>
      <TopBar
        title="Candidates"
        subtitle={`${filtered.length} of ${candidates.length} candidates`}
        action={{ label: 'Add Candidate', onClick: () => {} }}
      />
      <div className="px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search by name, job, email, or skill..."
              className="w-full bg-[#16162a] border border-white/5 text-sm text-gray-200 placeholder:text-gray-500 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#6366f1]/50"
            />
          </div>
          <div className="flex gap-1 bg-[#16162a] border border-white/5 rounded-lg p-1">
            <button
              onClick={() => setView('grid')}
              className={clsx('p-2 rounded-md', view === 'grid' ? 'bg-[#6366f1] text-white' : 'text-gray-400')}
              aria-label="Grid view"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={clsx('p-2 rounded-md', view === 'list' ? 'bg-[#6366f1] text-white' : 'text-gray-400')}
              aria-label="List view"
            >
              <List size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {stages.map((s) => (
            <button
              key={s}
              onClick={() => setStageFilter(s)}
              className={clsx(
                'text-xs font-medium px-3 py-1.5 rounded-full border transition-all capitalize',
                stageFilter === s
                  ? s === 'all'
                    ? 'bg-[#6366f1] text-white border-[#6366f1]'
                    : STAGE_COLORS[s as CandidateStage]
                  : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
              )}
            >
              {s === 'all' ? 'All' : STAGE_LABELS[s as CandidateStage]}
            </button>
          ))}
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filtered.map((c) => (
              <CandidateCard key={c.id} candidate={c} onClick={() => setSelected(c)} />
            ))}
          </div>
        ) : (
          <div className="bg-[#16162a] border border-white/5 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-white/5 bg-white/[0.02]">
                  <th className="py-3 px-4 font-medium">Candidate</th>
                  <th className="py-3 px-4 font-medium">Job</th>
                  <th className="py-3 px-4 font-medium">Stage</th>
                  <th className="py-3 px-4 font-medium">Rating</th>
                  <th className="py-3 px-4 font-medium">Source</th>
                  <th className="py-3 px-4 font-medium">Applied</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => setSelected(c)}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] cursor-pointer"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#c084fc] flex items-center justify-center text-white text-xs font-semibold">
                          {c.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-white">{c.name}</div>
                          <div className="text-xs text-gray-500">{c.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{c.jobTitle}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STAGE_COLORS[c.stage]}`}>
                        {STAGE_LABELS[c.stage]}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-medium">{c.rating}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{c.source}</td>
                    <td className="py-3 px-4 text-gray-400">{new Date(c.appliedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No candidates match your filters.
          </div>
        )}
      </div>

      <CandidateDrawer
        candidate={selected}
        onClose={() => setSelected(null)}
        onStageChange={handleStageChange}
      />
    </>
  );
}
