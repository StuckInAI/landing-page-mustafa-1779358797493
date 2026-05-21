import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          <span className="text-sm text-gray-300 font-medium">Now in public beta — Join 10,000+ teams</span>
          <ArrowRight size={14} className="text-[#818cf8]" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight animate-slide-up">
          Ship products
          <br />
          <span className="gradient-text">10x faster</span>
          <br />
          than before
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Luminary is the all-in-one platform for modern teams — AI-powered planning,
          real-time collaboration, and instant deployment in one beautiful workflow.
        </p>

        {/* Social proof stars */}
        <div className="flex items-center justify-center gap-2 mb-10 animate-slide-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={16} className="text-[#f59e0b] fill-[#f59e0b]" />
            ))}
          </div>
          <span className="text-sm text-gray-400">4.9/5 from over 2,000 reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <a
            href="#pricing"
            className="gradient-bg text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity duration-200 shadow-xl animate-pulse-glow flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Start for free
            <ArrowRight size={20} />
          </a>
          <button
            className="glass text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors duration-200 flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={14} className="text-white ml-0.5" fill="white" />
            </div>
            Watch demo
          </button>
        </div>

        {/* Hero Dashboard Mockup */}
        <div className="relative animate-float">
          <div className="glass rounded-2xl border border-white/10 p-4 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            {/* Mockup Top Bar */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="ml-4 flex-1 h-6 rounded bg-white/5 flex items-center px-3">
                <span className="text-xs text-gray-500">app.luminary.io/dashboard</span>
              </div>
            </div>
            {/* Mockup Content */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="col-span-2 bg-white/5 rounded-xl p-3 flex flex-col gap-2">
                {['Dashboard','Projects','Team','Analytics','Settings'].map(item => (
                  <div key={item} className={`h-6 rounded flex items-center px-2 ${
                    item === 'Dashboard' ? 'bg-[#6366f1]/30 text-[#818cf8]' : 'text-gray-600'
                  }`}>
                    <span className="text-[10px] font-medium truncate">{item}</span>
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-10 flex flex-col gap-3">
                {/* Top cards */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Active Projects', value: '24', color: '#6366f1' },
                    { label: 'Deployments', value: '1,204', color: '#8b5cf6' },
                    { label: 'Team Members', value: '48', color: '#c084fc' },
                    { label: 'Uptime', value: '99.9%', color: '#f59e0b' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                      <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Chart area */}
                <div className="bg-white/5 rounded-xl p-4 h-28 flex items-end gap-1.5 overflow-hidden">
                  {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #6366f1, #818cf8)`,
                        opacity: 0.3 + (i / 20),
                      }}
                    />
                  ))}
                </div>
                {/* List */}
                <div className="bg-white/5 rounded-xl p-3 flex flex-col gap-2">
                  {['Luminary v2.4 Released','Team sprint completed','New integrations live'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#6366f1] shrink-0" />
                      <span className="text-[11px] text-gray-400">{item}</span>
                      <div className="ml-auto h-4 w-12 rounded bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow under dashboard */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 rounded-full opacity-30"
            style={{
              background: 'radial-gradient(ellipse, #6366f1, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
