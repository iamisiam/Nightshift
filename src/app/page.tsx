const features = [
  {
    icon: "🌙",
    title: "Cover Page",
    description: "Calming night-shift design with moon and stethoscope motifs in blues and greens.",
  },
  {
    icon: "📅",
    title: "Rotating Shift Scheduler",
    description: "Monthly/weekly calendar grid to plan your 12-hour day and night rotations across 4 weeks.",
  },
  {
    icon: "📋",
    title: "SBAR Patient Handoff Sheet",
    description: "Situation, Background, Assessment, Recommendation format with space for room and patient details.",
  },
  {
    icon: "💊",
    title: "Hourly Medication & Task Timeline",
    description: "1900-0700 night shift time slots with checkboxes for meds, vitals, charting, and assessments.",
  },
  {
    icon: "🧬",
    title: "Daily Fatigue & Self-Care Tracker",
    description: "1-10 alertness scale, sleep/caffeine/mood logging, self-care checklist, and quick action prompts.",
  },
  {
    icon: "😴",
    title: "Post-Shift Sleep Recovery Checklist",
    description: "Wind-down steps, caffeine cutoff rule, blackout tips, and a recovery day planner.",
  },
  {
    icon: "💡",
    title: "Night Shift Tips & Self-Care Prompts",
    description: "Snack ideas, micro-break reminders, burnout warning signs, and coping strategies.",
  },
  {
    icon: "📖",
    title: "How to Use Guide",
    description: "Instructions for every page plus pro tips on printing, laminating, and going digital.",
  },
];

const targetAudiences = [
  {
    icon: "🏥",
    title: "Rural Hospital Nurses",
    description: "Limited resources? This bundle replaces multiple scattered sheets with one organized system.",
    bg: "bg-[#E8F4F8]",
  },
  {
    icon: "👩‍⚕️",
    title: "New Grad RNs",
    description: "Structured SBAR sheets and med timelines help you build confidence and safe habits.",
    bg: "bg-[#FFF3E0]",
  },
  {
    icon: "🔥",
    title: "Burned-Out Night Shifters",
    description: "Fatigue tracking, sleep recovery tools, and burnout prevention built right in.",
    bg: "bg-[#F0EAF5]",
  },
];

const relatedSearches = [
  "night shift nurse planner",
  "shift worker checklist",
  "nurse handoff sheet",
  "medication tracker nurses",
  "fatigue tracker printable",
  "sleep recovery nurse",
  "sbar report sheet",
  "2026 nurse planner",
  "rotating shift scheduler",
  "night shift survival kit",
  "rn brain sheet",
  "self care for nurses",
  "digital download nurse",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0F1B2D] via-[#162A45] to-[#0F1B2D]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-[rgba(43,168,154,0.08)]"></div>
          <div className="absolute top-40 right-[25%] w-20 h-20 rounded-full bg-[rgba(43,168,154,0.05)]"></div>
          <div className="absolute top-16 right-[40%] w-2 h-2 rounded-full bg-[rgba(255,255,255,0.15)]"></div>
          <div className="absolute top-32 right-[30%] w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.1)]"></div>
          <div className="absolute top-24 right-[50%] w-1 h-1 rounded-full bg-[rgba(255,255,255,0.12)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-20 relative">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-white bg-[#1A7A6D] px-4 py-1.5 rounded">
              Printable PDF Bundle
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            2026 Night Shift
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2BA89A] leading-tight mb-6">
            Nurse Survival Bundle
          </h1>
          <p className="text-lg text-[#4A9CC7] max-w-xl mb-2">
            Shift Scheduler - SBAR Handoff - Med Timeline
          </p>
          <p className="text-lg text-[#4A9CC7] max-w-xl mb-8">
            Fatigue Tracker - Sleep Recovery - Self-Care
          </p>
          <p className="text-base text-[rgba(255,255,255,0.5)] mb-3 max-w-lg">
            8 Printable Pages | Designed for 12-Hour Night Shift RNs
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.35)] max-w-lg">
            Print unlimited copies or use on your tablet
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="mb-12">
            <p className="text-lg text-[#1A1A2E] font-semibold leading-relaxed mb-4">
              Tired of scattered notes and burnout during 12-hour night shifts in 2026? This
              hyper-specific printable bundle is designed exclusively for shift-working RNs to stay
              organized, ensure safe handoffs, track meds, monitor fatigue, and protect your
              recovery sleep.
            </p>
            <p className="text-base text-[#4A4A6A] font-semibold mb-3">
              What&apos;s Included in the PDF Bundle:
            </p>
            <ul className="space-y-2 text-[#4A4A6A] mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Rotating Shift Scheduler for your 2-4 week rotations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>SBAR Patient Handoff / Report Sheet with plenty of writing space</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Hourly Night Shift Medication & Task Timeline (1900-0700 slots with checkboxes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Daily Fatigue & Alertness Self-Care Tracker (1-10 scale + action prompts)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Post-Shift Sleep Recovery Checklist & Wind-Down Planner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Quick Night Shift Tips & Self-Care Prompts page</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1A7A6D] mt-1">✓</span>
                <span>Bonus: How to Use guide</span>
              </li>
            </ul>
            <p className="text-base text-[#4A4A6A] leading-relaxed mb-4">
              Print as many copies as you need or use digitally on your tablet. Perfect for rural
              hospital nurses, new grads, or experienced night shifters fighting fatigue.
            </p>
            <p className="text-sm text-[#8A8AA0] italic">Created with real shift life in mind.</p>
          </div>

          <div className="bg-[#F8FAFB] rounded-xl p-8 mb-12 border border-[#E8ECF0]">
            <div className="text-center">
              <p className="text-sm text-[#4A4A6A] mb-6">Full 8-page bundle. Free download.</p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A7A6D] hover:bg-[#15685D] text-white rounded-lg text-lg font-semibold transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Generate &amp; Download Full Bundle
              </button>
              <p className="text-xs text-[#8A8AA0] mt-4">Free download. Print unlimited copies.</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F1B2D] mb-8 text-center">
              What&apos;s Inside: 8 Printable Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-lg border border-[#E8ECF0] hover:border-[#2BA89A] transition-colors"
                >
                  <div className="text-2xl flex-shrink-0 w-10 h-10 rounded-lg bg-[#E8F4F8] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#162A45] text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-[#4A4A6A] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0F1B2D] mb-6 text-center">Built For Night Shift RNs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {targetAudiences.map((audience) => (
                <div key={audience.title} className={`p-6 rounded-lg ${audience.bg}`}>
                  <div className="text-2xl mb-3">{audience.icon}</div>
                  <h3 className="font-semibold text-[#162A45] text-sm mb-2">{audience.title}</h3>
                  <p className="text-xs text-[#4A4A6A]">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFB] border-t border-[#E8ECF0]">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-xs text-[#8A8AA0] font-semibold uppercase tracking-wider mb-4">
            Related Searches
          </p>
          <div className="flex flex-wrap gap-2">
            {relatedSearches.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#E8ECF0] text-[#4A4A6A]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0F1B2D] border-t border-[rgba(43,168,154,0.15)]">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-[rgba(255,255,255,0.3)]">2026 Night Shift Nurse Survival Bundle</p>
          <p className="text-xs text-[rgba(255,255,255,0.2)] mt-1">
            Free printable PDF. For personal use only.
          </p>
        </div>
      </footer>
    </main>
  );
}