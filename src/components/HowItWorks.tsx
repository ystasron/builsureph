const steps = [
  {
    step: "01",
    title: "Upload Your Plans",
    description: "Upload your construction plans, blueprints, or project specifications to the BuildSure platform. Our system supports PDF, CAD, and image formats.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "AI Analyzes Materials",
    description: "Our AI engine automatically identifies and computes all required materials — concrete, steel, cement, sand, gravel, and more — with precise quantities.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Compare & Verify Suppliers",
    description: "Browse verified suppliers, compare real-time prices, check certifications, and read customer ratings. Our AI recommends the best options for your project.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Procure & Track",
    description: "Place orders, track deliveries in real-time, monitor material consumption, and manage your entire procurement pipeline from a single dashboard.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, #0284c7 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            From Plans to
            <br />
            <span className="gradient-text">Procurement in 4 Steps</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            BuildSure simplifies the entire construction material procurement process with AI-powered automation and intelligent supplier matching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-sky-200 to-transparent" />
              )}

              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg shadow-sky-100 flex items-center justify-center text-sky-600 mb-6 border border-sky-100 group-hover:border-sky-300 transition-colors">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
