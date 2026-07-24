export default function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-200 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Ready to Transform Your Procurement?
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Start Building Smarter
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
            with BuildSure Today
          </span>
        </h2>

        <p className="text-lg text-sky-100/80 mb-10 max-w-2xl mx-auto">
          Join thousands of construction professionals who trust BuildSure for AI-powered material estimation, verified suppliers, and streamlined procurement across the Philippines.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@buildsure.ph"
            className="px-8 py-4 rounded-xl text-base font-semibold bg-gradient-to-r from-cyan-400 to-sky-400 text-sky-950 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:from-cyan-300 hover:to-sky-300 transition-all inline-flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Us
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl text-base font-semibold glass text-white hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
          >
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
