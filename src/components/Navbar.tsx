import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPilot: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenPilot, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Technology', href: '#technology' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Doppel layer', href: '#doppel' },
    { label: 'Who we serve', href: '#scale' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0d]/90 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-display font-semibold text-lg tracking-tight text-white">
            TerraFIQ
          </span>
          <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>
          <span className="text-xs text-zinc-400 font-normal hidden sm:inline">
            Physical AI for energy
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-normal text-zinc-400">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="text-xs text-zinc-400 hover:text-zinc-200 px-3 py-1.5 transition-colors cursor-pointer"
          >
            Contact
          </button>
          <button
            onClick={onOpenPilot}
            className="text-xs font-medium px-4 py-2 rounded-md bg-zinc-100 text-zinc-950 hover:bg-white transition-colors cursor-pointer"
          >
            Join the pilot
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0d12] px-6 py-5 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm text-zinc-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilot();
              }}
              className="flex-1 py-2 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs text-center"
            >
              Join the pilot
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="py-2 px-4 rounded-md border border-zinc-800 text-zinc-300 text-xs"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
