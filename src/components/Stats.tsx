const stats = [
  {
    value: "500+",
    label: "Verified Suppliers",
    description: "DTI-registered and certified suppliers across the Philippines",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "10,000+",
    label: "Projects Managed",
    description: "Residential, commercial, and infrastructure projects completed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    value: "30%",
    label: "Average Cost Savings",
    description: "Through AI-optimized supplier matching and bulk purchasing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    value: "99.2%",
    label: "Estimation Accuracy",
    description: "AI-powered quantity takeoff precision for material planning",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const beneficiaries = [
  { name: "Homeowners", icon: "🏠" },
  { name: "Contractors", icon: "👷" },
  { name: "Engineers", icon: "⚙️" },
  { name: "Architects", icon: "📐" },
  { name: "Suppliers", icon: "🏭" },
  { name: "Developers", icon: "🏢" },
];

export default function Stats() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-sky-50/50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Who benefits */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-sky-600 tracking-wider uppercase mb-3">Who Benefits</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Built for Every
            <span className="gradient-text"> Construction Stakeholder</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Whether you are building your dream home or managing large-scale infrastructure, BuildSure serves everyone in the construction ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {beneficiaries.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md hover:shadow-sky-50 transition-all cursor-default"
            >
              <span className="text-2xl">{b.icon}</span>
              <span className="font-semibold text-slate-700">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
