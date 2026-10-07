export function HeroVisual() {
  const steps = [
    {
      num: '01',
      title: 'Power',
      detail: 'Main electrical feed & circuits',
    },
    {
      num: '02',
      title: 'Sensors',
      detail: 'Clip-on current & voltage sensors',
    },
    {
      num: '03',
      title: 'Agent Hub',
      detail: 'On-device neural inference',
    },
    {
      num: '04',
      title: 'Energy Profile',
      detail: 'Evolving load understanding',
    },
    {
      num: '05',
      title: 'Savings',
      detail: 'Plain-language interventions',
    },
  ];

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0c0d12] p-6 sm:p-8">
      {/* Top flow line */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pb-8 border-b border-white/[0.06]">
        {steps.map((s, idx) => (
          <div key={s.num} className="space-y-1">
            <span className="text-[11px] font-mono text-zinc-500">
              {s.num}
            </span>
            <div className="text-sm font-medium text-zinc-200">
              {s.title}
            </div>
            <div className="text-xs text-zinc-400">
              {s.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Schematic diagram of the building & physical box */}
      <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Building & Clip-on hardware */}
        <div className="md:col-span-7 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Physical Installation
          </div>
          <div className="p-5 rounded-lg border border-white/[0.06] bg-[#08090c] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono pb-2.5 border-b border-white/[0.06]">
              <span className="text-zinc-300">Electrical Distribution Board</span>
              <span className="text-emerald-400">Non-invasive clip-on install</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded bg-[#0f1016] border border-white/[0.04]">
                <div className="text-zinc-400 text-[11px] mb-0.5">Primary Monitor</div>
                <div className="text-zinc-200 font-medium">Main Incoming Feed</div>
                <div className="text-zinc-400 text-[11px] mt-1">Whole-property baseline</div>
              </div>
              <div className="p-3 rounded bg-[#0f1016] border border-white/[0.04]">
                <div className="text-zinc-400 text-[11px] mb-0.5">Sub-Circuit CTs</div>
                <div className="text-zinc-200 font-medium">Dedicated Branch Loads</div>
                <div className="text-zinc-400 text-[11px] mt-1">Geyser, cooker, plugs, HVAC</div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 pt-1">
              Zero wire cuts · Clips directly over insulated cable runs · No disruption to mains power.
            </div>
          </div>
        </div>

        {/* Right: Local Intelligence Output */}
        <div className="md:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            On-Device Daily Output
          </div>
          <div className="p-5 rounded-lg border border-white/[0.06] bg-[#08090c] space-y-3">
            <div className="text-xs text-zinc-400">
              Instead of raw, unreadable graphs, TerraFIQ answers:
            </div>
            <div className="text-sm font-medium text-zinc-100 italic">
              "Where did our energy go — and what should we do about it?"
            </div>
            <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs">
              <div className="flex items-start gap-2 text-zinc-300">
                <span className="text-emerald-400 font-mono">→</span>
                <span>Water heater cycles detected with zero water use</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <span className="text-emerald-400 font-mono">→</span>
                <span>Perimeter lighting active during bright daylight</span>
              </div>
              <div className="flex items-start gap-2 text-zinc-300">
                <span className="text-emerald-400 font-mono">→</span>
                <span>Standby loads identified across idle appliances</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
