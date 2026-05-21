export default function LogoBar() {
  const logos = [
    'Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'GitHub', 'AWS', 'Slack'
  ];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-8 font-medium">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-gray-600 hover:text-gray-400 transition-colors duration-200 text-lg font-bold tracking-tight cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
