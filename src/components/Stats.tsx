const stats = [
  { value: '10,000+', label: 'Teams worldwide' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '2.1B+', label: 'Requests served' },
  { value: '< 50ms', label: 'Avg. deploy time' },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 via-[#8b5cf6]/10 to-[#c084fc]/10" />
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
