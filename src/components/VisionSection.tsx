export function VisionSection() {
  const progression = ['HOME', 'BUSINESS', 'COMMUNITY', 'CITY', 'GRID'];

  return (
    <section className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-6 leading-tight">
            Make every building energy-aware.
          </h2>

          <div className="space-y-1 text-base sm:text-lg text-zinc-300 mb-6">
            <p>TerraFIQ begins with a single household.</p>
            <p>Then a business.</p>
            <p>Then a school.</p>
            <p>Then a neighbourhood.</p>
            <p className="text-emerald-400 font-medium">Then an entire energy system.</p>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            The long-term vision is an energy infrastructure where consumption is measurable, understandable and increasingly responsive — without requiring every customer’s data to live in a central cloud.
          </p>
        </div>

        {/* Visual: HOME → BUSINESS → COMMUNITY → CITY → GRID */}
        <div className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07]">
          <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-300 flex-wrap gap-4">
            {progression.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-white font-medium">{item}</span>
                {idx < progression.length - 1 && (
                  <span className="text-zinc-600">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
