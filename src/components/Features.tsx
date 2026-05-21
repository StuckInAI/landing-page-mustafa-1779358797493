import { Zap, Shield, Globe, Layers, BarChart2, Users } from 'lucide-react';
import clsx from 'clsx';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Deploys',
    description: 'Push to production in seconds. Our edge network ensures your app is live globally before you finish your coffee.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2 Type II certified. End-to-end encryption, role-based access control, and audit logs built in from day one.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: 'Deploy to 50+ regions worldwide. Sub-100ms latency for your users no matter where they are on the planet.',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.1)',
  },
  {
    icon: Layers,
    title: 'AI-Powered Planning',
    description: 'Let our AI break down complex projects into sprints, assign tasks intelligently, and predict blockers before they happen.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
  },
  {
    icon: BarChart2,
    title: 'Real-Time Analytics',
    description: 'Track performance, user behavior, and system health in one unified dashboard. No more switching between tools.',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Real-time cursors, comments, and live editing. Your whole team on the same page, always.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-[#818cf8] font-semibold uppercase tracking-widest">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Everything you need to
            <br />
            <span className="gradient-text">ship with confidence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Luminary brings together all the tools modern teams need into one
            seamless, beautiful platform.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={clsx(
                  'glass rounded-2xl p-6 card-hover cursor-default',
                  'border border-white/5'
                )}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: feature.bg }}
                >
                  <Icon size={22} style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
