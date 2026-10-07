export function DoppelLayerSection() {
  const understandings = [
    'Normal consumption patterns',
    'Seasonal changes',
    'Appliance behaviour',
    'Previous recommendations',
    'Which interventions worked',
    'Recurring waste',
    'Anomalies',
    'Changes to the household or facility',
  ];

  const loop = ['Measure', 'Remember', 'Understand', 'Recommend', 'Learn'];

  return (
    <section id="doppel" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            The Doppel Layer
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            Energy intelligence with a memory.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
            A conventional energy application may analyse today’s data and forget yesterday. TerraFIQ can use persistent AI entities — Doppel agents — that maintain a structured history of the environment they monitor.
          </p>
          <p className="text-xs text-zinc-400">
            A long-term physical intelligence layer rather than another chatbot.
          </p>
        </div>

        {/* Core Concept: Measure → Remember → Understand → Recommend → Learn */}
        <div className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07] mb-12">
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-300 flex-wrap gap-4">
            {loop.map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-white font-medium">{step}</span>
                {idx < loop.length - 1 && (
                  <span className="text-emerald-400">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What the agent understands over time */}
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-4">
            Over time, the agent can understand:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {understandings.map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg bg-[#0c0d12] border border-white/[0.06] text-xs text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
