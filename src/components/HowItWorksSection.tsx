export function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'SENSE',
      description: 'Current and voltage sensors measure electrical behaviour.',
    },
    {
      num: '02',
      title: 'RECORD',
      description: 'A local microcontroller records the measurements.',
    },
    {
      num: '03',
      title: 'ANALYSE',
      description: 'TerraFIQ’s local AI agents analyse the data and build an energy profile.',
    },
    {
      num: '04',
      title: 'ACT',
      description: 'The system produces a plain-language daily audit and ranked savings recommendations.',
    },
    {
      num: '05',
      title: 'SHARE',
      description: 'Only information explicitly authorised by the customer can leave the premises.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight mb-4 leading-tight">
            From socket to savings in five steps.
          </h2>
        </div>

        {/* 5-Step Pipeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 rounded-xl bg-[#0c0d12] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    {step.num}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block pt-4 text-zinc-600 text-xs font-mono">
                  ↓ next
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
