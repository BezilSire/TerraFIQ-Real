export function BusinessModelSection() {
  const models = [
    {
      title: 'HARDWARE',
      description: 'Power Profile Box sold to homes and sites.',
    },
    {
      title: 'SUBSCRIPTION',
      description:
        'TerraFIQ Agent Hub provides audits, recommendations, historical intelligence and facility dashboards.',
    },
    {
      title: 'UTILITY PLATFORM',
      description:
        'Annual software licensing for demand profiles, analytics and dynamic tariff infrastructure.',
    },
    {
      title: 'DEMAND RESPONSE',
      description:
        'TerraFIQ can participate in the value created when aggregated customers voluntarily shift or reduce consumption.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Business Model
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            One installed base. Multiple revenue streams.
          </h2>
        </div>

        {/* Four Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((m) => (
            <div
              key={m.title}
              className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-3">
                  {m.title}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative Calculation */}
        <div className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07]">
          <div className="text-sm sm:text-base font-mono text-zinc-200 mb-2">
            10,000 homes × US$2/month = US$240,000 annual recurring revenue
          </div>
          <p className="text-xs text-zinc-400">
            Illustrative model — to be validated through pilots.
          </p>
        </div>
      </div>
    </section>
  );
}
