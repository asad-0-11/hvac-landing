import React from 'react';

export default function Home() {
  const painPoints = [
    { title: "AMC Renewals", ar: "تجديد العقود", desc: "Contracts slip through the cracks. Customers leave because no one called.", icon: "🔔" },
    { title: "Service History", ar: "سجل الصيانة", desc: "Lost in WhatsApp groups. Technicians arrive blind with no history.", icon: "📱" },
    { title: "KWD Invoicing", ar: "الفواتير بالدينار", desc: "Manual calculations and KNET screenshots cost you 30 mins per invoice.", icon: "🇰🇼" },
    { title: "Monthly Reports", ar: "التقارير الشهرية", desc: "Combining spreadsheets for clients takes a whole weekend, not 5 minutes.", icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-[var(--font-geist-sans)] selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* ─── NAVIGATION ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-sm font-bold tracking-tight uppercase">HVACPro <span className="text-slate-400 font-medium">Kuwait</span></span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#demo" className="text-xs font-bold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors">
              Book Demo
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
            Built for Kuwaiti HVAC Contractors
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Stop managing AMC contracts on Excel.
            <span className="block text-slate-400">Automate your service business.</span>
          </h1>
          <p dir="rtl" className="text-lg font-medium text-slate-600 mb-10 leading-relaxed">
            أول نظام متكامل لإدارة عقود الصيانة، الفنيين، والفواتير بالدينار — مصمم خصيصاً لسوق الكويت.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95">
              Book a 20-minute Demo
            </a>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">No Credit Card Required</span>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS (MINIMALIST) ─────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {painPoints.map((item, i) => (
              <div key={i} className="group">
                <div className="text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-tighter mb-2">{item.ar}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES (BENTO GRID STYLE) ─────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2">Platform Features</h2>
            <h3 className="text-2xl font-bold">Everything your business needs.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Card */}
            <div className="md:col-span-2 bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-200 transition-colors">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <span className="text-[10px] font-black bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md uppercase mb-4 inline-block">Core Module</span>
                  <h4 className="text-xl font-bold">AMC Contract Lifecycle</h4>
                  <p dir="rtl" className="text-slate-500 font-medium text-sm mt-1">متابعة كاملة لعقود الصيانة السنوية</p>
                </div>
                <span className="text-3xl">📜</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Automatic reminders at 60, 30, and 7 days before expiry. Track units covered, value in KWD, and renewal status in one dashboard.
              </p>
            </div>

            {/* Small Card */}
            <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl shadow-indigo-200">
              <span className="text-3xl block mb-12">📱</span>
              <h4 className="text-xl font-bold">Offline Tech App</h4>
              <p dir="rtl" className="text-indigo-100 font-medium text-sm mt-1 mb-4">تطبيق الفنيين (يعمل بدون إنترنت)</p>
              <p className="text-sm text-indigo-100/80">Digital job cards, photos, and signatures — even in basement plant rooms.</p>
            </div>

            {/* Invoicing Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-200 transition-colors">
              <span className="text-3xl block mb-12">🇰🇼</span>
              <h4 className="text-lg font-bold">KWD Bilingual Invoicing</h4>
              <p dir="rtl" className="text-slate-500 font-medium text-sm mt-1 mb-4">فواتير بالدينار وباللغتين</p>
              <p className="text-sm text-slate-500">One-click invoices with KNET / MyFatoorah links. Ready for Kuwait VAT.</p>
            </div>

            {/* QR Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-200 transition-colors">
              <span className="text-3xl block mb-12">🏷️</span>
              <h4 className="text-lg font-bold">QR Asset Tagging</h4>
              <p dir="rtl" className="text-slate-500 font-medium text-sm mt-1 mb-4">سجل المكيفات عبر الـ QR</p>
              <p className="text-sm text-slate-500">Scan a sticker on-site to see the entire service history and warranty of any AC unit.</p>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-200 transition-colors">
              <span className="text-3xl block mb-12">📲</span>
              <h4 className="text-lg font-bold">WhatsApp Reports</h4>
              <p dir="rtl" className="text-slate-500 font-medium text-sm mt-1 mb-4">تقارير تلقائية عبر الواتساب</p>
              <p className="text-sm text-slate-500">Automatically send service confirmations and inspection reports to your clients' phones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOCAL TRUST ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">Kuwait First</h2>
            <h3 className="text-3xl font-bold mb-6">Software that speaks your market's language.</h3>
            <ul className="space-y-4">
              {[
                { en: "PACI and Civil ID field integration", ar: "دعم الرقم المدني وعنوان الهيئة العامة للمعلومات المدنية" },
                { en: "KNET / MyFatoorah Ready", ar: "دعم كامل لروابط الدفع المحلي" },
                { en: "Bilingual English/Arabic Interface", ar: "واجهة باللغتين العربية والإنجليزية" },
                { en: "Local Support Team in Kuwait City", ar: "فريق دعم محلي متواجد داخل الكويت" }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start border-b border-white/10 pb-4">
                  <span className="text-indigo-400 text-sm font-bold">0{i+1}</span>
                  <div>
                    <p className="text-sm font-bold">{item.en}</p>
                    <p dir="rtl" className="text-slate-400 text-xs mt-1 font-medium">{item.ar}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="aspect-square bg-indigo-500/10 border border-indigo-500/20 rounded-full absolute -inset-10 animate-pulse"></div>
             <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[40px] text-center">
                <span className="text-5xl block mb-6">🇰🇼</span>
                <p className="text-xl font-medium leading-relaxed">
                  "Designed for Kuwait’s climate and business laws. No generic features, just what you need to grow."
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section id="demo" className="py-24 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">See your business in a new light.</h2>
          <p dir="rtl" className="text-slate-500 mb-10 font-medium">احصل على عرض تجريبي لمدة 20 دقيقة وشاهد كيف يعمل النظام.</p>
          <a href="https://wa.me/96550324743" target="_blank" className="inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-indigo-100">
            Book Demo via WhatsApp →
          </a>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">Private Beta Launching Soon</p>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-12 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-[10px] font-bold text-white">H</div>
            <span className="text-[10px] font-black uppercase tracking-widest">HVACPro Kuwait</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Kuwait City</span>
            <span>•</span>
            <span>Lahore</span>
          </div>
          <p className="text-[10px] font-medium text-slate-400">© 2025 shipmyproject.com</p>
        </div>
      </footer>
    </div>
  );
}