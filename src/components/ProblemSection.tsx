export function ProblemSection() {
  const problems = [
    {
      keyword: 'BLIND',
      description:
        'Households and businesses usually see one monthly total. They cannot easily tell which appliance, room or machine is consuming the energy.',
      subtext: 'Waste hides in the gaps between the meter and the individual load.',
    },
    {
      keyword: 'BLANKET',
      description:
        'Utilities can see aggregate demand, but customers rarely get detailed visibility into their own consumption.',
      subtext:
        'Most electricity pricing also treats every kWh similarly regardless of when or how it is consumed.',
    },
    {
      keyword: 'BACKWARDS',
      description:
        'Responsible users have little direct incentive to reduce waste.',
      subtext:
        'Meanwhile, peak demand puts additional pressure on already constrained electricity systems.',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            Nobody can see where the energy goes.
          </h2>
        </div>

        {/* Three Strong Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {problems.map((p) => (
            <div
              key={p.keyword}
              className="p-7 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-display font-bold tracking-wider text-emerald-400 block mb-4">
                  {p.keyword}
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-400 leading-relaxed">
                {p.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Below the cards */}
        <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0c0d12]/50 max-w-3xl">
          <p className="text-base sm:text-lg text-zinc-200 font-medium">
            TerraFIQ starts with the customer — then connects the intelligence back to the energy system.
          </p>
        </div>
      </div>
    </section>
  );
}
