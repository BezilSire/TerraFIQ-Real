import { ArrowRight, Check } from 'lucide-react';

interface SolutionSectionProps {
  onOpenPilot: () => void;
}

export function SolutionSection({ onOpenPilot }: SolutionSectionProps) {
  const loads = [
    'Lights',
    'Cookers',
    'Geysers',
    'Plugs',
    'Appliances',
    'Machinery',
  ];

  const recommendations = [
    'Lights operating during daylight',
    'Vampire loads from chargers and electronics',
    'A cooker left running',
    'A geyser heating unused water',
    'An inefficient appliance',
    'An unusual consumption spike',
    'A room or department consuming disproportionately',
  ];

  return (
    <section id="technology" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            A power profile box with an AI brain.
          </h2>
        </div>

        {/* Two-Part Product Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Part 1: Power Profile Box */}
          <div className="p-8 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                Physical Hardware
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Power Profile Box
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Physical hardware that uses clip-on current and voltage sensors to monitor electricity consumption. It can begin at the main supply and extend to circuits or selected room and socket-level measurements.
              </p>

              <div className="mb-6">
                <span className="text-xs font-mono text-zinc-400 block mb-2.5">
                  Records energy behaviour from:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {loads.map((load) => (
                    <span
                      key={load}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-white/[0.06] text-zinc-300"
                    >
                      {load}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 border-t border-white/[0.06] pt-4">
              TerraFIQ turns electrical measurements into an understandable power profile.
            </p>
          </div>

          {/* Part 2: TerraFIQ Agent Hub */}
          <div className="p-8 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                Local Intelligence
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                TerraFIQ Agent Hub
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                An on-device AI system receives the energy data, analyses it, and builds an evolving understanding of the household or facility.
              </p>

              <div className="space-y-2.5 text-xs text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Processing and storage remain local wherever possible.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No permanent cloud dependency.</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 border-t border-white/[0.06] pt-4">
              Continuous on-device analysis without round-trip network delays.
            </p>
          </div>
        </div>

        {/* Daily Intelligence */}
        <div className="p-8 rounded-xl bg-[#0c0d12] border border-white/[0.07]">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              Daily Intelligence
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
              Where did our energy go — and what should we do about it?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Instead of giving users another complicated energy graph, TerraFIQ delivers clear, plain-language recommendations:
            </p>
          </div>

          {/* Clean list of recommendations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {recommendations.map((rec) => (
              <div
                key={rec}
                className="p-3.5 rounded-lg bg-[#08090c] border border-white/[0.05] text-xs text-zinc-300 flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] flex-wrap gap-4">
            <span className="text-xs text-zinc-400">
              Plain-language audits generated directly on the device.
            </span>
            <button
              onClick={onOpenPilot}
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-md bg-zinc-100 text-zinc-950 hover:bg-white transition-colors cursor-pointer"
            >
              <span>Turn energy data into decisions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
