const services = [
  {
    title: "AI Quantity Estimation",
    description: "Automatic computation of concrete, steel, cement, sand, gravel, and other materials from uploaded construction plans. Powered by advanced AI algorithms for accurate material takeoffs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: "from-sky-500 to-blue-500",
    shadowColor: "shadow-sky-500/20",
  },
  {
    title: "Supplier Verification System",
    description: "Comprehensive verification of DTI registrations, product certifications, customer ratings, delivery performance, and warranty information for trusted sourcing.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    title: "Real-Time Price Comparison",
    description: "Compare material prices and delivery charges from nearby suppliers in real-time. Find the best deals and negotiate with confidence across the Philippine market.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    shadowColor: "shadow-amber-500/20",
  },
  {
    title: "Material Quality Verification",
    description: "QR-code and certification-based validation of product authenticity and compliance with Philippine construction standards. Ensure every material meets safety requirements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
    shadowColor: "shadow-violet-500/20",
  },
  {
    title: "AI Recommendation Engine",
    description: "Smart suggestions for alternative products, lower-cost options, nearby suppliers, and bulk-purchase discounts. Let AI optimize your procurement decisions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
    color: "from-rose-500 to-pink-500",
    shadowColor: "shadow-rose-500/20",
  },
  {
    title: "Procurement Dashboard",
    description: "Comprehensive monitoring of orders, deliveries, material consumption, remaining quantities, and budget utilization. Full visibility across your supply chain.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    color: "from-cyan-500 to-sky-500",
    shadowColor: "shadow-cyan-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need for
            <br />
            <span className="gradient-text">Smart Procurement</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From AI-powered estimation to real-time tracking, BuildSure combines every tool construction professionals need into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${service.shadowColor} hover:shadow-xl`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-lg ${service.shadowColor} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
