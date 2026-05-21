import { Check, Zap } from 'lucide-react';
import clsx from 'clsx';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for solo developers and side projects.',
    features: [
      '3 projects',
      '1 team member',
      '5GB storage',
      'Community support',
      'Basic analytics',
    ],
    highlighted: false,
    cta: 'Start for free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Unlimited projects',
      'Up to 20 members',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'AI planning assistant',
      'Custom domains',
    ],
    highlighted: true,
    cta: 'Get started',
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large teams with advanced security and compliance needs.',
    features: [
      'Unlimited everything',
      'Unlimited members',
      '1TB storage',
      'Dedicated support',
      'SOC2 compliance',
      'SSO & SAML',
      'Audit logs',
      'SLA guarantee',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-[#818cf8] font-semibold uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Simple,
            <span className="gradient-text"> transparent pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Scale as you grow.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-8 flex flex-col gap-6 relative',
                plan.highlighted
                  ? 'border-2 border-[#6366f1] shadow-2xl'
                  : 'glass border border-white/5 card-hover'
              )}
              style={plan.highlighted ? {
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%)',
              } : {}}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-bg text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Zap size={12} fill="white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name & description */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className={clsx(
                  'text-5xl font-black',
                  plan.highlighted ? 'gradient-text' : 'text-white'
                )}>
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm mb-2">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={clsx(
                      'w-5 h-5 rounded-full flex items-center justify-center shrink-0',
                      plan.highlighted ? 'bg-[#6366f1]/20' : 'bg-white/5'
                    )}>
                      <Check size={12} className={plan.highlighted ? 'text-[#818cf8]' : 'text-gray-400'} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={clsx(
                  'w-full py-3.5 rounded-xl text-center font-bold text-sm transition-all duration-200',
                  plan.highlighted
                    ? 'gradient-bg text-white hover:opacity-90 shadow-lg'
                    : 'glass text-white hover:bg-white/10 border border-white/10'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
