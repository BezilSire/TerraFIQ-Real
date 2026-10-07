export function WhyNowSection() {
  const points = [
    {
      title: 'GRIDS UNDER STRAIN',
      body: 'Electricity is expensive and supply can be uneven. Efficiency can act like a new source of capacity: energy saved is energy that does not need to be generated, transmitted or purchased.',
    },
    {
      title: 'CONNECTIVITY IS PATCHY',
      body: 'Cloud-only intelligence breaks down when connectivity is expensive, unreliable or unavailable. Modern AI models can increasingly run directly on phones, computers and edge devices.',
    },
    {
      title: 'TRUST & FOOTPRINT',
      body: 'Energy consumption can reveal patterns of daily life. TerraFIQ keeps intelligence close to the source while reducing unnecessary dependence on remote data centres.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Why Now
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            The technology, the pain and the timing have finally lined up.
          </h2>
        </div>

        {/* Three Columns / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {points.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-4">
                  {p.title}
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center py-6 border-t border-white/[0.06]">
          <p className="text-lg sm:text-xl text-zinc-200 font-normal">
            The future of energy intelligence does not have to live in the cloud.
          </p>
        </div>
      </div>
    </section>
  );
}
