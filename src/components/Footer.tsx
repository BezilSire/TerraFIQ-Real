interface FooterProps {
  onOpenPilot: () => void;
  onOpenContact: () => void;
}

export function Footer({ onOpenPilot, onOpenContact }: FooterProps) {
  return (
    <footer className="py-14 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand & tagline */}
          <div>
            <div className="font-display font-semibold text-base text-white mb-1">
              TerraFIQ
            </div>
            <p className="text-zinc-500 font-normal">
              Every joule, accounted for.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#technology" className="hover:text-zinc-200 transition-colors">Technology</a>
            <a href="#how-it-works" className="hover:text-zinc-200 transition-colors">How it works</a>
            <a href="#privacy" className="hover:text-zinc-200 transition-colors">Privacy</a>
            <a href="#scale" className="hover:text-zinc-200 transition-colors">Customers</a>
            <a href="#doppel" className="hover:text-zinc-200 transition-colors">Company</a>
            <button onClick={onOpenContact} className="hover:text-zinc-200 transition-colors cursor-pointer">
              Contact
            </button>
          </nav>
        </div>

        {/* Footer note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-[11px]">
          <span>© 2026 TerraFIQ. All rights reserved.</span>
          <span>Physical AI for energy efficiency</span>
        </div>
      </div>
    </footer>
  );
}
