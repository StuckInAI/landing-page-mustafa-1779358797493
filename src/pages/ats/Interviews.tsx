import { Calendar, Clock, User, Video } from 'lucide-react';
import TopBar from '@/components/ats/TopBar';
import { mockInterviews } from '@/data/atsMockData';

const TYPE_COLORS: Record<string, string> = {
  'Phone Screen': 'bg-blue-500/15 text-blue-300 border-blue-500/30',
  'Technical': 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  'On-site': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'Final': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
};

export default function Interviews() {
  const sorted = [...mockInterviews].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <TopBar
        title="Interviews"
        subtitle={`${sorted.length} scheduled interviews`}
        action={{ label: 'Schedule Interview', onClick: () => {} }}
      />
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {sorted.map((iv) => (
            <div
              key={iv.id}
              className="bg-[#16162a] border border-white/5 rounded-xl p-5 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#6366f1]/15 flex flex-col items-center justify-center text-[#a5b4fc]">
                    <span className="text-[10px] uppercase font-semibold">
                      {new Date(iv.date).toLocaleString('en', { month: 'short' })}
                    </span>
                    <span className="text-base font-bold leading-none">{new Date(iv.date).getDate()}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{iv.candidateName}</h3>
                    <p className="text-sm text-gray-400">{iv.jobTitle}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${TYPE_COLORS[iv.type]}`}>
                  {iv.type}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar size={14} className="text-gray-500" />
                  {new Date(iv.date).toLocaleDateString('en', { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock size={14} className="text-gray-500" />
                  {iv.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300 col-span-2">
                  <User size={14} className="text-gray-500" />
                  Interviewer: <span className="text-white font-medium">{iv.interviewer}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2">
                  <Video size={14} />
                  Join
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/10">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
