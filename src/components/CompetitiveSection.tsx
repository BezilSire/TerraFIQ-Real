export function CompetitiveSection() {
  const rows = [
    {
      feature: 'Appliance / circuit-level visibility',
      terrafiq: 'Yes (sub-metering & disaggregation)',
      meter: 'No (whole-building aggregate only)',
      cloud: 'Partial (estimated via statistical models)',
    },
    {
      feature: 'Offline operation',
      terrafiq: 'Yes (fully autonomous)',
      meter: 'Yes (passive pulse counter)',
      cloud: 'No (requires continuous connection)',
    },
    {
      feature: 'Local data processing',
      terrafiq: 'Yes (on-device AI)',
      meter: 'Basic register only',
      cloud: 'No (processed in central cloud)',
    },
    {
      feature: 'Customer-controlled data',
      terrafiq: 'Yes (strict consent gate)',
      meter: 'No (utility property)',
      cloud: 'No (commercialized/shared)',
    },
    {
      feature: 'Long-term learning',
      terrafiq: 'Yes (persistent memory)',
      meter: 'No',
      cloud: 'Limited',
    },
    {
      feature: 'AI agents',
      terrafiq: 'Yes (Doppel agents on-device)',
      meter: 'No',
      cloud: 'Limited (chatbots/remote analytics)',
    },
    {
      feature: 'Customer + utility use cases',
      terrafiq: 'Both supported',
      meter: 'Utility only',
      cloud: 'Customer only',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Competitive Difference
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            Energy intelligence that lives where the energy is used.
          </h2>
        </div>

        {/* Clean Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0c0d12] mb-12">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/[0.08] text-xs font-mono">
                <th className="py-4 px-6 text-zinc-400 w-1/3">Feature</th>
                <th className="py-4 px-6 text-emerald-400 font-semibold w-1/4 bg-emerald-950/20">
                  TerraFIQ
                </th>
                <th className="py-4 px-6 text-zinc-400 w-1/5">Smart Meter</th>
                <th className="py-4 px-6 text-zinc-400 w-1/5">Cloud App</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-xs sm:text-sm">
              {rows.map((r) => (
                <tr key={r.feature}>
                  <td className="py-3.5 px-6 font-medium text-zinc-200">
                    {r.feature}
                  </td>
                  <td className="py-3.5 px-6 text-emerald-300 font-medium bg-emerald-950/10">
                    {r.terrafiq}
                  </td>
                  <td className="py-3.5 px-6 text-zinc-400">{r.meter}</td>
                  <td className="py-3.5 px-6 text-zinc-400">{r.cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Under the table: The deeper advantage */}
        <div className="p-8 rounded-xl bg-[#0c0d12] border border-white/[0.07]">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            The deeper advantage
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">
            TerraFIQ does not just measure a building. It builds a persistent intelligence layer around it.
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
            TerraFIQ agents can maintain a persistent life history of the energy environment they observe — learning patterns, changes, anomalies and interventions over time.
          </p>
        </div>
      </div>
    </section>
  );
}
