/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PrivacySection } from './components/PrivacySection';
import { WhyNowSection } from './components/WhyNowSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { CompetitiveSection } from './components/CompetitiveSection';
import { DoppelLayerSection } from './components/DoppelLayerSection';
import { VisionSection } from './components/VisionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Primary Fixed Navigation */}
      <Navbar
        onOpenPilot={() => setPilotModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection onOpenPilot={() => setPilotModalOpen(true)} />

        {/* 2. THE PROBLEM */}
        <ProblemSection />

        {/* 3. THE SOLUTION */}
        <SolutionSection onOpenPilot={() => setPilotModalOpen(true)} />

        {/* 4. HOW IT WORKS */}
        <HowItWorksSection />

        {/* 5. PRIVACY */}
        <PrivacySection />

        {/* 6. WHY NOW */}
        <WhyNowSection />

        {/* 7. WHO WE SERVE */}
        <WhoWeServeSection onOpenPilot={() => setPilotModalOpen(true)} />

        {/* 8. BUSINESS MODEL */}
        <BusinessModelSection />

        {/* 9. COMPETITIVE DIFFERENCE */}
        <CompetitiveSection />

        {/* 10. THE DOPPEL LAYER */}
        <DoppelLayerSection />

        {/* 11. VISION */}
        <VisionSection />

        {/* 12. FINAL CTA */}
        <FinalCtaSection
          onOpenPilot={() => setPilotModalOpen(true)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenPilot={() => setPilotModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Pilot Application & Contact Modals */}
      <PilotModal
        isOpen={pilotModalOpen}
        onClose={() => setPilotModalOpen(false)}
      />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
