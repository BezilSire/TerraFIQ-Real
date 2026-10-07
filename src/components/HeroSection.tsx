import { ArrowRight, ArrowDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroSectionProps {
  onOpenPilot: () => void;
}

export function HeroSection({ onOpenPilot }: HeroSectionProps) {
  const scrollToWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple subtitle / category */}
        <div className="text-xs font-mono text-zinc-400 mb-6 tracking-wide">
          Physical AI for Energy Efficiency
        </div>

        {/* Large confident headline */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display leading-[1.08] mb-6">
            Every joule, accounted for.
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-300 font-normal leading-relaxed mb-4">
            Physical AI for energy efficiency — offline-first, privacy-first, household by household.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            TerraFIQ combines physical energy sensing with on-device AI to show households and organisations where their electricity goes, what is being wasted, and what they can do about it.
          </p>
        </div>

        {/* Primary and secondary CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <button
            onClick={onOpenPilot}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
          >
            <span>Join the pilot</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToWorks}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/[0.1] bg-transparent text-zinc-300 hover:text-white hover:border-white/[0.2] text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <span>See how it works</span>
            <ArrowDown className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>

        {/* Clean conceptual hero visual */}
        <div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
