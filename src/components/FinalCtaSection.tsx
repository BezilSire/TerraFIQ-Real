import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenPilot: () => void;
  onOpenContact: () => void;
}

export function FinalCtaSection({ onOpenPilot, onOpenContact }: FinalCtaSectionProps) {
  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Large closing statement */}
        <h2 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight mb-6">
          Know where the energy goes.
        </h2>

        {/* Supporting copy */}
        <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          TerraFIQ turns electricity consumption into intelligence — locally, privately and continuously.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenPilot}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
          >
            <span>Join the TerraFIQ pilot</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/[0.1] bg-transparent text-zinc-300 hover:text-white hover:border-white/[0.2] text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <span>Contact us</span>
          </button>
        </div>
      </div>
    </section>
  );
}
