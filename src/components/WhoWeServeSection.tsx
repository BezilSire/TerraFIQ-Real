interface WhoWeServeSectionProps {
  onOpenPilot?: () => void;
}

export function WhoWeServeSection({ onOpenPilot }: WhoWeServeSectionProps) {
  const stages = [
    {
      num: '01',
      title: 'BEACHHEAD',
      targets: 'Households, SMEs, schools, clinics and factories',
      description:
        'They buy the hardware and software because TerraFIQ helps them identify waste, reduce bills and understand which rooms, departments or machines are consuming energy.',
    },
    {
      num: '02',
      title: 'UTILITIES',
      targets: 'Energy providers and municipalities',
      description:
        'TerraFIQ can provide aggregated demand intelligence that can support more sophisticated tariffs, demand management and peak-time programmes.',
    },
    {
      num: '03',
      title: 'ENERGY MARKETS',
      targets: 'Virtual power plants, EV operators, microgrids and governments',
      description:
        'Aggregated intelligence can eventually enable demand-response capacity and a more detailed picture of energy consumption.',
    },
  ];

  const scaleSteps = ['House', 'Site', 'City', 'Grid'];

  return (
    <section id="scale" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Who We Serve
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            Start with homes and sites. Scale to the grid.
          </h2>
        </div>

        {/* Visual Concept: House → Site → City → Grid */}
        <div className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07] mb-12">
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-300 flex-wrap gap-4">
            {scaleSteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-white font-medium">{step}</span>
                {idx < scaleSteps.length - 1 && (
                  <span className="text-zinc-600">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 mt-3 pt-3 border-t border-white/[0.06]">
            The same underlying sensing and AI architecture becomes more valuable as deployment scales.
          </p>
        </div>

        {/* Three Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((stg) => (
            <div
              key={stg.num}
              className="p-7 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold block mb-2">
                  {stg.num} — {stg.title}
                </span>
                <h3 className="text-base font-semibold text-white mb-3">
                  {stg.targets}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {stg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
