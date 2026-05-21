import { X, Mail, Phone, MapPin, Briefcase, Calendar, Star, FileText, Tag } from 'lucide-react';
import type { Candidate, CandidateStage } from '@/types/ats';
import { STAGE_LABELS, STAGE_COLORS } from '@/types/ats';

type CandidateDrawerProps = {
  candidate: Candidate | null;
  onClose: () => void;
  onStageChange: (id: string, stage: CandidateStage) => void;
};

const STAGES: CandidateStage[] = ['applied', 'screening', 'interview', 'offer', 'hired', 'rejected'];

export default function CandidateDrawer({ candidate, onClose, onStageChange }: CandidateDrawerProps) {
  if (!candidate) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40 animate-fade-in" onClick={onClose} />
      <div className="fixed right-0 top-0 h-screen w-full max-w-xl bg-[#16162a] border-l border-white/10 z-50 overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-[#16162a]/95 backdrop-blur border-b border-white/5 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Candidate Profile</h2>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#c084fc] flex items-center justify-center text-white text-xl font-bold shrink-0">
              {candidate.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
              <p className="text-sm text-gray-400">{candidate.jobTitle}</p>
              <div className="flex items-center gap-1 mt-2 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i <= candidate.rating ? 'currentColor' : 'none'}
                    className={i > candidate.rating ? 'text-gray-600' : ''}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2 block">
              Pipeline Stage
            </label>
            <div className="flex flex-wrap gap-2">
              {STAGES.map((stage) => (
                <button
                  key={stage}
                  onClick={() => onStageChange(candidate.id, stage)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                    candidate.stage === stage
                      ? STAGE_COLORS[stage] + ' ring-2 ring-offset-2 ring-offset-[#16162a] ring-current'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {STAGE_LABELS[stage]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-medium uppercase tracking-wide text-gray-500">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={14} className="text-gray-500" />
                <a href={`mailto:${candidate.email}`} className="hover:text-[#818cf8]">{candidate.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={14} className="text-gray-500" />
                {candidate.phone}
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={14} className="text-gray-500" />
                {candidate.location}
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-medium uppercase tracking-wide text-gray-500">Details</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Briefcase size={12} />
                  Experience
                </div>
                <div className="text-sm font-medium text-white">{candidate.experience}</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Calendar size={12} />
                  Applied
                </div>
                <div className="text-sm font-medium text-white">
                  {new Date(candidate.appliedAt).toLocaleDateString()}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 col-span-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Tag size={12} />
                  Source
                </div>
                <div className="text-sm font-medium text-white">{candidate.source}</div>
              </div>
            </div>
          </div>

          {candidate.tags.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">Skills & Tags</h4>
              <div className="flex flex-wrap gap-2">
                {candidate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#6366f1]/10 text-[#a5b4fc] border border-[#6366f1]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h4 className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">Notes</h4>
            <div className="bg-white/5 border border-white/5 rounded-lg p-3 text-sm text-gray-300 min-h-[80px]">
              {candidate.notes || <span className="text-gray-500 italic">No notes yet.</span>}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 gradient-bg text-white text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2">
              <Calendar size={14} />
              Schedule Interview
            </button>
            <button className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg flex items-center gap-2 border border-white/10">
              <FileText size={14} />
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
