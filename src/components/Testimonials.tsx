import { Star, Quote } from 'lucide-react';
import clsx from 'clsx';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Wavepath',
    initials: 'SC',
    color: '#6366f1',
    quote: 'Luminary cut our deployment time by 80%. The AI planning feature alone saved us weeks of sprint planning. I honestly can\'t imagine going back.',
    rating: 5,
  },
  {
    name: 'Marcus Rivera',
    role: 'Lead Engineer',
    company: 'Stackify',
    initials: 'MR',
    color: '#8b5cf6',
    quote: 'The collaboration tools are best-in-class. Real-time editing with zero conflicts, and the analytics dashboard gives us insights we never had before.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'VP of Product',
    company: 'NovaSaaS',
    initials: 'PP',
    color: '#c084fc',
    quote: 'We moved from 3 different tools to just Luminary. Our team\'s productivity is through the roof and onboarding new engineers takes days, not weeks.',
    rating: 5,
  },
  {
    name: 'James O\'Brien',
    role: 'Founder',
    company: 'Launchpad.io',
    initials: 'JO',
    color: '#06b6d4',
    quote: 'From prototype to production in one weekend. Luminary made it possible for a solo founder to move at the speed of a team of ten.',
    rating: 5,
  },
  {
    name: 'Anika Weber',
    role: 'Engineering Manager',
    company: 'Cortex',
    initials: 'AW',
    color: '#10b981',
    quote: 'Security was our biggest concern. Luminary\'s enterprise features gave our legal team confidence and our engineers flexibility. A rare combination.',
    rating: 5,
  },
  {
    name: 'Tom Nakamura',
    role: 'DevOps Lead',
    company: 'Orbiter',
    initials: 'TN',
    color: '#f59e0b',
    quote: 'The global edge network is phenomenal. Our international users saw a 3x improvement in load times literally overnight after we switched.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-[#818cf8] font-semibold uppercase tracking-widest">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Loved by
            <span className="gradient-text"> 10,000+ teams</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Don\'t just take our word for it — hear from the teams already shipping faster with Luminary.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={clsx(
                'glass rounded-2xl p-6 border border-white/5 card-hover flex flex-col gap-4'
              )}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-[#6366f1] opacity-60" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
