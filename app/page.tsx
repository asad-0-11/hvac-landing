export default function Home() {
  const painPoints = [
    {
      num: "01",
      icon: "📋",
      en: "AMC renewals slip through the cracks.",
      enSub: "You can't see at a glance which contracts expire next month. Customers leave because no one called them in time.",
      ar: "عقود الصيانة تضيع بين الأوراق.",
      arSub: "لا تستطيع معرفة العقود التي تنتهي الشهر القادم بنظرة واحدة. عملاؤك يغادرون لأن أحداً لم يتصل بهم.",
    },
    {
      num: "02",
      icon: "💬",
      en: "Service history is lost in WhatsApp.",
      enSub: "When a technician visits for the 3rd time, he has no record of what was done before. It looks unprofessional.",
      ar: "سجل الصيانة ضائع في الواتساب.",
      arSub: "عندما يزور الفني العميل للمرة الثالثة، لا يجد سجلاً لما تم في الزيارات السابقة. يبدو الأمر غير احترافي.",
    },
    {
      num: "03",
      icon: "🧾",
      en: "KWD Invoicing is a manual mess.",
      enSub: "Word documents, manual math, and screenshots of KNET transfers — every invoice costs 30 minutes of your life.",
      ar: "إصدار الفواتير بالدينار متعب.",
      arSub: "ملفات وورد، حسابات يدوية، وصور تحويلات كي-نت — كل فاتورة تستهلك 30 دقيقة من وقتك.",
    },
    {
      num: "04",
      icon: "📊",
      en: "Reporting takes a whole weekend.",
      enSub: "Combining spreadsheets to show a client what you did last month should take 5 minutes, not 5 hours.",
      ar: "التقارير تأخذ نهاية أسبوع كاملة.",
      arSub: "جمع الجداول لترسل تقريراً للعميل عما أنجزته يجب أن يستغرق 5 دقائق لا 5 ساعات.",
    },
  ];

  const features = [
    {
      icon: "📜",
      titleEn: "Smart AMC Tracker",
      titleAr: "متابعة العقود الذكية",
      en: "Auto-reminders 60, 30, and 7 days before expiry. Never miss a renewal again.",
      ar: "تنبيهات تلقائية قبل 60 و30 و7 أيام من انتهاء العقد. لا تفوت تجديداً أبداً.",
      badge: "Essential",
      color: "blue"
    },
    {
      icon: "🔍",
      titleEn: "QR Asset Tags",
      titleAr: "سجل المكيفات بـ QR",
      en: "Scan a sticker on the AC to see its entire service history and warranty instantly.",
      ar: "امسح الملصق على المكيف لترى كامل سجل الصيانة والضمان فوراً.",
      badge: "Smart",
      color: "emerald"
    },
    {
      icon: "👷",
      titleEn: "Technician App",
      titleAr: "تطبيق الفنيين",
      en: "Digital job cards, photos, and signatures. Works offline in basement plant rooms.",
      ar: "بطاقات عمل رقمية، صور، وتواقيع. يعمل بدون إنترنت في غرف المعدات.",
      badge: "Offline",
      color: "violet"
    },
    {
      icon: "🇰🇼",
      titleEn: "KWD Invoicing",
      titleAr: "فواتير بالدينار",
      en: "Professional bilingual invoices with KNET / MyFatoorah payment links integrated.",
      ar: "فواتير احترافية ثنائية اللغة مع روابط دفع كي-نت وماي فاتورة.",
      badge: "Payments",
      color: "amber"
    },
    {
      icon: "📲",
      titleEn: "WhatsApp Automation",
      titleAr: "أتمتة الواتساب",
      en: "Send reports and reminders directly to your customer's WhatsApp automatically.",
      ar: "أرسل التقارير والتذكيرات مباشرة إلى واتساب العميل تلقائياً.",
      badge: "Fast",
      color: "green"
    },
    {
      icon: "🏢",
      titleEn: "Client Portal",
      titleAr: "بوابة العميل",
      en: "Give your big clients a dashboard to download reports and track their own buildings.",
      ar: "امنح كبار عملائك لوحة تحكم لتحميل التقارير ومتابعة مبانيهم.",
      badge: "Enterprise",
      color: "slate"
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-[var(--font-geist-sans)] text-slate-900 overflow-x-hidden">
      {/* ─── NAVIGATION ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">HVACPro</span>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Kuwait Edition</span>
            </div>
          </div>
          <a href="#demo" className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-xl active:scale-95">
            Book Demo
          </a>
        </div>
      </nav>

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0a0f1c] text-white overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Now in Private Beta — Kuwait
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
              Manage your AMC business <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">without the Excel stress.</span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
                The first software built specifically for Kuwait HVAC contractors. Track contracts, dispatch teams, and send Arabic invoices in seconds.
              </p>
              <p dir="rtl" className="text-xl lg:text-2xl font-bold text-blue-100 leading-relaxed">
                أول برنامج مصمم خصيصاً لمقاولي التكييف في الكويت. تابع عقودك، أدر فريقك، وأصدر فواتيرك بالعربية في ثوانٍ.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-600/30 hover:-translate-y-1">
                Book a 20-min Demo →
              </a>
              <div className="text-slate-500 text-sm font-medium">
                Built in Kuwait. For Kuwait. 🇰🇼
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <div className="text-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="text-4xl font-black mb-1">80%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Admin Time Saved</div>
            </div>
            <div className="text-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="text-4xl font-black mb-1">KWD</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Native Currency Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-1">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider font-bold">Arabic Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">The Problem</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-4">Old ways are costing you money.</h3>
              <p className="text-slate-500 text-lg">Manual work leads to forgotten renewals and lost customers.</p>
            </div>
            <div dir="rtl" className="text-right">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2">الطرق التقليدية تضيع أرباحك.</h3>
              <p className="text-slate-500">العمل اليدوي يؤدي لنسيان العقود وفقدان العملاء.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.num} className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{p.en}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.enSub}</p>
                    <div dir="rtl" className="bg-slate-50 rounded-2xl p-5 border-r-4 border-blue-500">
                      <p className="text-slate-900 font-bold mb-1">{p.ar}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{p.arSub}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">The Solution</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Built for the Kuwaiti HVAC Market</h3>
            <p dir="rtl" className="text-2xl font-bold text-slate-700">كل ما تحتاجه لإدارة شركتك باحترافية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${f.color}-500/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150`} />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{f.icon}</div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{f.titleEn}</h4>
                    <span className="text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">{f.badge}</span>
                  </div>
                  <h5 className="text-blue-600 font-bold mb-4">{f.titleAr}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{f.en}</p>
                  <div dir="rtl" className="border-t border-slate-100 pt-6">
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{f.ar}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST/LOCAL SECTION ─────────────────────────────────── */}
      <section className="py-24 bg-[#0a0f1c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-6">Why HVACPro?</h2>
              <h3 className="text-4xl font-black mb-8">Localization isn't an afterthought. It's the core.</h3>
              <div className="space-y-4">
                {[
                  "KWD Pricing & Arabic Invoicing",
                  "KNET & MyFatoorah Integration",
                  "PACI & Civil ID Address Fields",
                  "Kuwait Climate-specific Scheduling"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">✓</div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div dir="rtl" className="space-y-6">
              <h3 className="text-4xl font-black mb-8">أكثر من مجرد برنامج... إنه شريكك في الكويت.</h3>
              <div className="space-y-4 text-right">
                {[
                  "الأسعار بالدينار والفواتير بالعربية",
                  "متكامل مع كي-نت وماي فاتورة",
                  "حقول مخصصة للرقم المدني وعنوان البلدية",
                  "جدولة صيانة مخصصة لمناخ الكويت"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="font-bold">{item}</span>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm">✓</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section id="demo" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 p-12 lg:p-20 text-white overflow-hidden text-center shadow-3xl shadow-blue-900/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Turn 5 hours of admin <br /> into 5 minutes.
              </h2>
              <p dir="rtl" className="text-2xl font-bold text-blue-100 mb-10">
                حوّل 5 ساعات من العمل الإداري إلى 5 دقائق فقط.
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <a href="https://wa.me/96550324743" target="_blank" className="inline-flex items-center gap-4 px-10 py-6 bg-white text-blue-700 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                  <span>📱</span>
                  Book via WhatsApp
                </a>
                <p className="text-blue-100/70 text-sm font-medium">
                  No credit card required. No pushy sales. Just a 20-min demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">H</div>
              <span className="font-bold text-xl uppercase tracking-tighter">HVACPro</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Building the operating system for Kuwait's mechanical contractors.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-blue-600">
              <span>KUWAIT CITY</span>
              <span>•</span>
              <span>LAHORE</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-black text-xs uppercase tracking-widest text-slate-400">Support</h4>
            <a href="https://wa.me/96550324743" className="block text-slate-700 font-bold hover:text-blue-600 transition-colors">+965 50324743</a>
            <a href="mailto:info@shipmyproject.com" className="block text-slate-700 font-bold hover:text-blue-600 transition-colors">info@shipmyproject.com</a>
          </div>

          <div dir="rtl" className="text-right space-y-4">
            <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 text-right">عن المشروع</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              برنامج مصمم بخبرة عالمية وبأيادٍ تعرف السوق الكويتي جيداً. انضم إلينا في النسخة التجريبية.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between gap-4 text-slate-400 text-xs font-medium">
          <span>© 2025 HVACPro Kuwait. Part of shipmyproject.com</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}