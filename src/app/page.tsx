"use client";

const lemonSqueezyUrl = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_URL || "https://your-store.lemonsqueezy.com";

const mockupImages = {
  stack: 'https://assets.kiloapps.io/user_1492d4ff-6de1-44a4-bc5f2-47185bd467f8/323f8be6-e14d-4aae-8f8b-a6e19555f1da/8c61fd71-d58a-4830-ae3f-10d5104bb9a3.jpg',
  locker: 'https://assets.kiloapps.io/user_1492d4ff-6de1-44a4-bc5f2-47185bd467f8/323f8be6-e14d-4aae-8f8b-a6e19555f1da/6bb3b3eb-9b61-42f7-97dd-288a61d0b1cb.jpg',
  phone: 'https://assets.kiloapps.io/user_1492d4ff-6de1-44a4-bc5f2-47185bd467f8/323f8be6-e14d-4aae-8f8b-a6e19555f1da/ba393b4d-724b-4a01-8713-a25155b36692.jpg',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1729] text-white font-sans">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-[#0A1729]/80 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌙</span>
            <h1 className="text-2xl font-bold tracking-tight">Night Shift Survival</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#whats-inside" className="hover:text-[#00E5D8] transition">What&apos;s Inside</a>
            <a href="#preview" className="hover:text-[#00E5D8] transition">Preview</a>
            <a href="#for-you" className="hover:text-[#00E5D8] transition">Built For You</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-2xl flex items-center gap-1">
              <span className="text-emerald-400">✓</span> Instant Download
            </div>
            <button 
              onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00E5D8] hover:bg-[#00E5D8]/90 text-black font-semibold px-6 py-2.5 rounded-2xl text-sm transition"
            >
              Buy Now – $12.99
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-24 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 text-sm font-medium px-4 py-2 rounded-3xl mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            2026 NIGHT SHIFT EDITION
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-none tracking-tighter mb-4">
            2026 Night Shift<br />
            <span className="text-[#00E5D8]">Nurse Survival Bundle</span>
          </h1>
          
          <p className="text-xl text-white/70 mt-6 max-w-lg">
            8 printable pages built exclusively for 12-hour night shift RNs.<br />
            Shift Scheduler • SBAR Handoff • Med Timeline • Fatigue Tracker • Sleep Recovery
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-semibold">$12.99</div>
            <div className="text-xs bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-xl flex items-center">
              8 PAGES • UNLIMITED PRINTS
            </div>
          </div>

          <button 
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-[#00E5D8] hover:bg-white text-black font-semibold text-lg px-10 py-5 rounded-3xl flex items-center gap-3 transition shadow-xl shadow-[#00E5D8]/30"
          >
            Get Instant Access Now
            <span className="text-2xl">→</span>
          </button>

          <div className="mt-6 flex items-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Instant PDF Download
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Works on tablet + stylus
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> 100% Money-back guarantee
            </div>
          </div>
        </div>

        {/* HERO IMAGE - STACK MOCKUP */}
        <div className="relative">
          <img
            src={mockupImages.stack}
            alt="2026 Night Shift Nurse Survival Bundle printed stack"
            className="w-full max-w-[600px] rounded-3xl shadow-2xl shadow-black/50 rotate-[-3deg] hover:rotate-0 transition"
          />
          <div className="absolute -bottom-4 -right-4 bg-white text-black text-xs font-bold px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
            <span>8 PAGES</span>
            <span className="text-emerald-400">•</span>
            <span>PRINT UNLIMITED</span>
          </div>
        </div>
      </header>

      {/* WHAT'S INCLUDED QUICK LIST */}
      <section className="bg-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-8">Everything you need in one bundle</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '📅', title: 'Shift Scheduler' },
              { icon: '📋', title: 'SBAR Handoff' },
              { icon: '💊', title: 'Med Timeline' },
              { icon: '🧬', title: 'Fatigue Tracker' },
              { icon: '😴', title: 'Sleep Recovery' },
              { icon: '💡', title: 'Nurse Brain Tips' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-3xl p-6 hover:bg-white/20 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIEW THE BUNDLE */}
      <section id="preview" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Preview the Bundle</h2>
        <p className="text-white/70 text-center max-w-md mx-auto mb-12">
          Real pages. Real samples. Designed from actual night shifts.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group">
            <img
            src={mockupImages.stack}
            alt="2026 Night Shift Nurse Survival Bundle printed stack"
            className="w-full max-w-[600px] rounded-3xl shadow-2xl shadow-black/50 rotate-[-3deg] hover:rotate-0 transition"
          />
            <p className="text-center mt-4 text-white/70 text-sm">8-Page Printable Stack</p>
          </div>
          
          <div className="group">
            <svg width="420" height="380" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition bg-white/5 border border-white/20">
  <rect x="20" y="20" width="380" height="340" rx="15" fill="#0A1729" stroke="#00E5D8" strokeWidth="1"/>
  <rect x="40" y="40" width="340" height="300" rx="10" fill="#061021"/>
  <text x="210" y="100" textAnchor="middle" fill="#00E5D8" fontSize="20">🔒</text>
  <text x="210" y="150" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">NURSE LOCKER</text>
  <text x="210" y="200" textAnchor="middle" fill="white" fontSize="12">📄 📄 📄</text>
  <text x="210" y="230" textAnchor="middle" fill="white" fontSize="12">BUNDLE READY</text>
  <text x="210" y="260" textAnchor="middle" fill="#00E5D8" fontSize="10">FOR SHIFT</text>
</svg>
            <p className="text-center mt-4 text-white/70 text-sm">Real locker setup</p>
          </div>
          
          <div className="group">
            <svg width="420" height="380" viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition bg-white/5 border border-white/20">
  <rect x="120" y="20" width="180" height="340" rx="25" fill="#0A1729" stroke="#00E5D8" strokeWidth="2"/>
  <rect x="140" y="40" width="140" height="280" fill="#061021"/>
  <circle cx="210" cy="320" r="8" fill="#00E5D8"/>
  <text x="210" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">📱</text>
  <text x="210" y="120" textAnchor="middle" fill="white" fontSize="14">DIGITAL</text>
  <text x="210" y="140" textAnchor="middle" fill="white" fontSize="14">VERSION</text>
  <rect x="160" y="170" width="100" height="80" rx="5" fill="white/10"/>
  <text x="210" y="200" textAnchor="middle" fill="#00E5D8" fontSize="12">📄</text>
  <text x="210" y="220" textAnchor="middle" fill="white" fontSize="10">PDF</text>
  <text x="210" y="235" textAnchor="middle" fill="white" fontSize="10">READY</text>
</svg>
            <p className="text-center mt-4 text-white/70 text-sm">Tablet + stylus ready</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE DETAILED */}
      <section id="whats-inside" className="bg-[#061021] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What&apos;s Inside: 8 Printable Pages</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="text-emerald-400 text-sm tracking-widest">PAGE 01</div>
                <h3 className="text-3xl font-bold">Cover Page</h3>
                <p className="text-white/70 mt-3">Dark navy design with teal accents. Laminate for durability.</p>
              </div>
              <div className="md:col-span-7 bg-white/10 rounded-3xl p-8 text-center">
                <p className="text-2xl">🌙 2026 Night Shift Nurse Survival Bundle</p>
              </div>
            </div>
            <div className="text-center text-white/60 text-sm">
              Full details match the exact PDF (J. Rodriguez sample, Angela Torres patient, etc.)
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR YOU */}
      <section id="for-you" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Built For Night Shift RNs Like You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-6">👩‍⚕️</div>
              <h3 className="font-semibold text-xl">New Grad RNs</h3>
              <p className="text-white/70 mt-2">Build safe habits with structured SBAR + timelines.</p>
            </div>
            <div className="bg-white/10 rounded-3xl p-8">
              <div className="text-5xl mb-6">🔥</div>
              <h3 className="font-semibold text-xl">Burned-Out Night Shifters</h3>
              <p className="text-white/70 mt-2">Fatigue tracking + sleep recovery tools included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUY SECTION — Lemon Squeezy ready */}
      <section id="buy" className="py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-4">Ready to make your next night shift easier?</h2>
          <p className="text-xl text-white/70 mb-10">One-time purchase. Unlimited prints. Lifetime updates.</p>
          
          <div className="inline-flex flex-col items-center bg-white/10 rounded-3xl p-10">
            <div className="text-7xl font-bold">$12.99</div>
            
            <button 
              className="mt-10 w-full max-w-xs bg-[#00E5D8] text-black font-bold text-xl py-6 rounded-3xl hover:scale-105 transition flex items-center justify-center gap-3"
              onClick={() => {
                window.open(lemonSqueezyUrl, '_blank');
              }}
            >
              Buy Now – Instant Download
            </button>
            
            <div className="mt-8 text-xs text-white/60 flex items-center gap-6">
              <div>🔒 Secure checkout via Lemon Squeezy</div>
              <div>��� All major cards + PayPal</div>
              <div>30-day money-back guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/30 py-12 text-white/60 text-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© 2026 Leon • Built for night shift heroes</p>
          <p className="mt-2 text-xs">nightshift-blond.vercel.app • All rights reserved</p>
          <p className="mt-8 text-[10px] max-w-md mx-auto">
            night shift nurse planner • SBAR handoff sheet • medication timeline • fatigue tracker • sleep recovery for nurses • rotating shift scheduler
          </p>
        </div>
      </footer>
    </div>
  );
}
