export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-200 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              AI-Powered Construction Procurement
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Smart Construction
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
                Material Procurement
              </span>
            </h1>

            <p className="text-lg text-sky-100/80 mb-8 max-w-xl leading-relaxed">
              BuildSure is an AI-powered digital procurement platform designed to transform how construction materials are sourced, verified, and managed across the Philippine construction industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-cyan-400 to-sky-400 text-sky-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:from-cyan-300 hover:to-sky-300 transition-all text-center"
              >
                Explore Services
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-xl text-base font-semibold glass text-white hover:bg-white/20 transition-all text-center"
              >
                How It Works
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-sky-200/60">Verified Suppliers</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-sm text-sky-200/60">Projects Managed</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">30%</p>
                <p className="text-sm text-sky-200/60">Cost Savings</p>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              {/* Main card */}
              <div className="w-80 rounded-2xl glass p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Estimation</p>
                    <p className="text-cyan-200/60 text-xs">Processing plan...</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Portland Cement", qty: "240 bags", icon: "🏗️" },
                    { name: "Steel Bars (10mm)", qty: "1,200 pcs", icon: "🔩" },
                    { name: "Gravel", qty: "45 cu.m", icon: "🪨" },
                    { name: "Sand", qty: "30 cu.m", icon: "⏳" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-white/90 text-sm">{item.name}</span>
                      </div>
                      <span className="text-cyan-300 text-sm font-mono">{item.qty}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Estimated Total</span>
                    <span className="text-cyan-300 font-bold text-lg">₱ 847,500</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-emerald-950 text-xs font-bold shadow-lg animate-pulse-glow">
                AI Verified ✓
              </div>

              {/* Floating supplier card */}
              <div className="absolute -bottom-6 -left-8 px-4 py-3 rounded-xl glass shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-400" />
                  <div>
                    <p className="text-white text-xs font-medium">Metro Manila</p>
                    <p className="text-cyan-200/60 text-[10px]">12 suppliers nearby</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 108C120 96 240 72 360 66C480 60 600 72 720 78C840 84 960 84 1080 78C1200 72 1320 60 1380 54L1440 48V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
