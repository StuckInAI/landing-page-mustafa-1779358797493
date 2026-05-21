import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'Can I try Luminary for free?',
    answer: 'Yes! Our Starter plan is completely free, forever. No credit card required. You can upgrade anytime as your team grows.',
  },
  {
    question: 'How does the AI planning assistant work?',
    answer: 'Our AI analyzes your project description, team capacity, and historical velocity to automatically generate sprints, assign tasks, and flag potential bottlenecks — saving you hours every week.',
  },
  {
    question: 'What happens if I go over my storage limit?',
    answer: 'We\'ll notify you before you hit your limit and give you the option to upgrade or clear unused assets. We never delete your data without explicit confirmation.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We are SOC2 Type II certified, all data is encrypted at rest and in transit, and we conduct regular third-party security audits. Enterprise plans include dedicated infrastructure.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel at any time with no questions asked. Your plan continues until the end of the billing period, and you can export all your data at any time.',
  },
  {
    question: 'Do you offer discounts for startups or non-profits?',
    answer: 'Yes! We offer a 50% discount for early-stage startups and qualifying non-profits. Reach out to our team and we\'ll set you up.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs text-[#818cf8] font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Got
            <span className="gradient-text"> questions?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about Luminary.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={clsx(
                'glass rounded-xl border transition-all duration-300 overflow-hidden',
                openIndex === index ? 'border-[#6366f1]/40' : 'border-white/5'
              )}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    'text-[#818cf8] shrink-0 transition-transform duration-300',
                    openIndex === index ? 'rotate-180' : ''
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
