import { useState } from 'react';
import { MapPin, Users, Calendar, MoreVertical, Search } from 'lucide-react';
import TopBar from '@/components/ats/TopBar';
import { mockJobs } from '@/data/atsMockData';
import type { JobStatus } from '@/types/ats';
import clsx from 'clsx';

const STATUS_STYLES: Record<JobStatus, string> = {
  open: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  draft: 'bg-gray-500/15 text-gray-300 border-gray-500/30',
  closed: 'bg-red-500/15 text-red-300 border-red-500/30',
};

export default function Jobs() {
  const [query, setQuery] = useState<string>('');
  const [filter, setFilter] = useState<JobStatus | 'all'>('all');

  const filtered = mockJobs.filter((job) => {
    const matchesQ = job.title.toLowerCase().includes(query.toLowerCase()) ||
                     job.department.toLowerCase().includes(query.toLowerCase());
    const matchesF = filter === 'all' || job.status === filter;
    return matchesQ && matchesF;
  });

  return (
    <>
      <TopBar
        title="Jobs"
        subtitle={`${mockJobs.filter((j) => j.status === 'open').length} open positions`}
        action={{ label: 'Post a Job', onClick: () => {} }}
      />
      <div className="px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search jobs by title or department..."
              className="w-full bg-[#16162a] border border-white/5 text-sm text-gray-200 placeholder:text-gray-500 rounded-lg pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#6366f1]/50"
            />
          </div>
          <div className="flex gap-1 bg-[#16162a] border border-white/5 rounded-lg p-1">
            {(['all', 'open', 'draft', 'closed'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={clsx(
                  'text-xs font-medium px-3 py-1.5 rounded-md capitalize transition-colors',
                  filter === s ? 'bg-[#6366f1] text-white' : 'text-gray-400 hover:text-white'
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="bg-[#16162a] border border-white/5 rounded-xl p-5 card-hover cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full border ${STATUS_STYLES[job.status]}`}>
                  {job.status}
                </span>
                <button className="text-gray-500 hover:text-white" aria-label="More">
                  <MoreVertical size={16} />
                </button>
              </div>
              <h3 className="text-base font-semibold text-white mb-1">{job.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{job.department} · {job.type}</p>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">{job.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  {job.applicants}
                </div>
                <div className="flex items-center gap-1 ml-auto">
                  <Calendar size={12} />
                  {new Date(job.postedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No jobs match your filters.
          </div>
        )}
      </div>
    </>
  );
}
