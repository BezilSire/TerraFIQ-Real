export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Privacy
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            Private by design.
          </h2>
          <p className="text-xl sm:text-2xl text-emerald-400 font-normal mb-4">
            Your energy data belongs to you.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
            Raw energy data is processed and stored locally whenever possible. TerraFIQ is designed so that customers do not need to surrender detailed information about their daily routines simply to understand their electricity consumption. Only consented information can be shared externally.
          </p>
        </div>

        {/* The Simple Architecture Diagram */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#0c0d12] border border-white/[0.08] mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Box 1 */}
            <div className="p-6 rounded-lg bg-[#08090c] border border-white/[0.06] space-y-2">
              <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                01 Origin
              </span>
              <h3 className="text-base font-semibold text-white">
                HOME / FACILITY
              </h3>
              <p className="text-xs text-zinc-400">
                Raw energy data measured at the panel
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-lg bg-[#08090c] border border-white/[0.06] space-y-2">
              <span className="text-[11px] font-mono uppercase text-emerald-400 block">
                02 Local Edge
              </span>
              <h3 className="text-base font-semibold text-white">
                LOCAL TERRAFIQ AGENT
              </h3>
              <p className="text-xs text-zinc-400">
                Analysis + memory + recommendations
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-lg bg-[#08090c] border border-white/[0.06] space-y-2">
              <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                03 Consent Gate
              </span>
              <h3 className="text-base font-semibold text-white">
                USER CONTROL
              </h3>
              <p className="text-xs text-zinc-400">
                Share / Don't Share
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 flex-wrap gap-2">
            <span>Customer-sovereign telemetry boundary</span>
            <span className="text-emerald-400 font-medium">Local first. Consent first.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
