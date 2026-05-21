import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #c084fc 100%)',
          }}
        >
          {/* Background decorations */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-white" />
              <span className="text-sm text-white font-medium">Join 10,000+ teams shipping faster</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Ready to move
              <br />
              at light speed?
            </h2>

            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Start for free today. No credit card required.
              Set up in under 5 minutes and start shipping better software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="bg-white text-[#6366f1] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-colors duration-200 shadow-xl flex items-center gap-2 justify-center"
              >
                Start for free
                <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-colors duration-200 border border-white/30 flex items-center gap-2 justify-center"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
