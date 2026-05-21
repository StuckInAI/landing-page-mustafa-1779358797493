import { Users, Briefcase, Calendar, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TopBar from '@/components/ats/TopBar';
import StatCard from '@/components/ats/StatCard';
import { mockCandidates, mockJobs, mockInterviews } from '@/data/atsMockData';
import { STAGE_COLORS, STAGE_LABELS } from '@/types/ats';

export default function Dashboard() {
  const openJobs = mockJobs.filter((j) => j.status === 'open').length;
  const totalCandidates = mockCandidates.length;
  const interviewsThisWeek = mockInterviews.filter((i) => i.status === 'scheduled').length;
  const offersOut = mockCandidates.filter((c) => c.stage === 'offer').length;

  const recentCandidates = [...mockCandidates]
    .sort((a, b) => new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime())
    .slice(0, 5);

  const stageBreakdown = (['applied', 'screening', 'interview', 'offer', 'hired'] as const).map((stage) => ({
    stage,
    count: mockCandidates.filter((c) => c.stage === stage).length,
  }));

  const maxCount = Math.max(...stageBreakdown.map((s) => s.count), 1);

  return (
    <>
      <TopBar
        title="Dashboard"
        subtitle="Overview of your hiring pipeline"
        action={{ label: 'Post a Job', onClick: () => {} }}
      />
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Open Jobs" value={openJobs} delta={12} icon={Briefcase} iconColor="text-[#818cf8]" />
          <StatCard label="Total Candidates" value={totalCandidates} delta={8} icon={Users} iconColor="text-emerald-400" />
          <StatCard label="Interviews This Week" value={interviewsThisWeek} delta={-3} icon={Calendar} iconColor="text-amber-400" />
          <StatCard label="Offers Out" value={offersOut} delta={25} icon={TrendingUp} iconColor="text-pink-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#16162a] border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-semibold text-white">Pipeline Overview</h2>
                <p className="text-sm text-gray-400">Candidates across each stage</p>
              </div>
              <Link to="/ats/pipeline" className="text-xs text-[#818cf8] hover:text-white flex items-center gap-1">
                View pipeline <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-4">
              {stageBreakdown.map(({ stage, count }) => (
                <div key={stage}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STAGE_COLORS[stage]}`}>
                      {STAGE_LABELS[stage]}
                    </span>
                    <span className="text-sm font-semibold text-white">{count}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-bg rounded-full transition-all duration-500"
                      style={{ width: `${(count / maxCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#16162a] border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-white">Upcoming Interviews</h2>
              <Link to="/ats/interviews" className="text-xs text-[#818cf8] hover:text-white flex items-center gap-1">
                All <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-3">
              {mockInterviews.slice(0, 4).map((iv) => (
                <div key={iv.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/15 flex flex-col items-center justify-center text-[#a5b4fc] shrink-0">
                    <span className="text-[9px] uppercase font-semibold">
                      {new Date(iv.date).toLocaleString('en', { month: 'short' })}
                    </span>
                    <span className="text-sm font-bold leading-none">{new Date(iv.date).getDate()}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white truncate">{iv.candidateName}</div>
                    <div className="text-xs text-gray-400 truncate">{iv.type} · {iv.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#16162a] border border-white/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold text-white">Recent Applicants</h2>
              <p className="text-sm text-gray-400">Latest candidates in your funnel</p>
            </div>
            <Link to="/ats/candidates" className="text-xs text-[#818cf8] hover:text-white flex items-center gap-1">
              View all <ArrowRight size={12} />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-white/5">
                  <th className="pb-3 font-medium">Candidate</th>
                  <th className="pb-3 font-medium">Job</th>
                  <th className="pb-3 font-medium">Stage</th>
                  <th className="pb-3 font-medium">Applied</th>
                  <th className="pb-3 font-medium">Source</th>
                </tr>
              </thead>
              <tbody>
                {recentCandidates.map((c) => (
                  <tr key={c.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#c084fc] flex items-center justify-center text-white text-xs font-semibold">
                          {c.avatar}
                        </div>
                        <div className="font-medium text-white">{c.name}</div>
                      </div>
                    </td>
                    <td className="py-3 text-gray-300">{c.jobTitle}</td>
                    <td className="py-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STAGE_COLORS[c.stage]}`}>
                        {STAGE_LABELS[c.stage]}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">{new Date(c.appliedAt).toLocaleDateString()}</td>
                    <td className="py-3 text-gray-400">{c.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
