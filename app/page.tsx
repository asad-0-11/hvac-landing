export default function Home() {
  const painPoints = [
    {
      num: "01",
      icon: "📋",
      en: "AMC renewals slip through the cracks.",
      enSub:
        "You can't see at a glance which contracts expire next month. Customers leave because no one called them in time.",
      ar: "عقود الصيانة تضيع بين الأوراق.",
      arSub:
        "لا تستطيع معرفة العقود التي تنتهي الشهر القادم بنظرة واحدة. عملاؤك يغادرون لأن أحداً لم يتصل بهم في الوقت المناسب.",
    },
    {
      num: "02",
      icon: "💬",
      en: "Service history is lost in WhatsApp groups.",
      enSub:
        "When a technician visits the same customer for the 3rd time, he has no record of what was done before.",
      ar: "سجل الصيانة ضائع في مجموعات الواتساب.",
      arSub:
        "عندما يزور الفني العميل للمرة الثالثة، لا يجد سجلاً لما تم في الزيارات السابقة.",
    },
    {
      num: "03",
      icon: "🧾",
      en: "Invoicing in KWD with Arabic is painful.",
      enSub:
        "Word documents, manual calculations, screenshots of KNET transfers — every invoice costs 30 minutes.",
      ar: "إصدار الفواتير بالدينار والعربية متعب.",
      arSub:
        "ملفات وورد، حسابات يدوية، صور تحويلات كي-نت — كل فاتورة تستهلك 30 دقيقة.",
    },
    {
      num: "04",
      icon: "📊",
      en: "Monthly reports take a whole weekend.",
      enSub:
        "Combining 4 spreadsheets to show a big client what your team did last month should take 5 minutes, not 5 hours.",
      ar: "التقارير الشهرية تأخذ نهاية أسبوع كاملة.",
      arSub:
        "جمع 4 ملفات إكسل لتُري عميلك الكبير ما أنجزه فريقك يجب أن يستغرق 5 دقائق لا 5 ساعات.",
    },
  ];

  const features = [
    {
      icon: "📄",
      titleEn: "AMC Contract Tracker",
      titleAr: "متابعة عقود الصيانة",
      badge: "Core",
      badgeClass: "bg-blue-100 text-blue-700",
      en: "Every contract — client, AC units covered, contract value in KWD, start and end dates, renewal status. Auto-reminders at 60, 30, and 7 days before expiry.",
      ar: "كل عقد — العميل، الوحدات المشمولة، قيمة العقد بالدينار، تاريخ البداية والنهاية، حالة التجديد. تنبيهات تلقائية قبل 60 و30 و7 أيام من انتهاء العقد.",
    },
    {
      icon: "🏷️",
      titleEn: "AC Asset Register with QR Tags",
      titleAr: "سجل المكيفات برمز الاستجابة السريعة",
      badge: "Smart",
      badgeClass: "bg-emerald-100 text-emerald-700",
      en: 'Every AC unit tagged with a QR sticker. Scan on-site to see full service history, manufacturer, install date, warranty status. No more "which unit is this?"',
      ar: 'كل وحدة تكييف بملصق QR. امسحه في الموقع لترى السجل الكامل والشركة المصنعة وتاريخ التركيب وحالة الضمان. لا مزيد من "أي وحدة هذه؟"',
    },
    {
      icon: "📱",
      titleEn: "Mobile App for Technicians",
      titleAr: "تطبيق الجوال للفنيين (يعمل بدون إنترنت)",
      badge: "Offline",
      badgeClass: "bg-violet-100 text-violet-700",
      en: "Technicians get job cards on their phone. Capture photos, customer signature, parts used, deficiencies. Works even in basement plant rooms. Syncs when back online.",
      ar: "الفنيون يستلمون بطاقات العمل على هاتفهم. يلتقطون الصور وتوقيع العميل وقطع الغيار المستخدمة والملاحظات. يعمل حتى في غرف المعدات تحت الأرض. يتزامن عند عودة الاتصال.",
    },
    {
      icon: "🧾",
      titleEn: "KWD Invoicing in Arabic & English",
      titleAr: "الفواتير بالدينار، بالعربية والإنجليزية",
      badge: "KWD",
      badgeClass: "bg-amber-100 text-amber-700",
      en: "One-click invoices in KWD with proper Arabic formatting. KNET and MyFatoorah payment links. Automatic VAT-ready when Kuwait introduces it.",
      ar: "فواتير بنقرة واحدة بالدينار وبتنسيق عربي صحيح. روابط دفع كي-نت وماي فاتورة. جاهز للضريبة عند تطبيقها في الكويت.",
    },
    {
      icon: "💬",
      titleEn: "WhatsApp Reminders & Reports",
      titleAr: "تذكيرات وتقارير عبر الواتساب",
      badge: "Automated",
      badgeClass: "bg-emerald-100 text-emerald-700",
      en: 'Send service confirmations, renewal reminders, and inspection reports directly to your customers\' WhatsApp. No more "did they get the email?"',
      ar: 'أرسل تأكيدات الزيارات وتذكيرات التجديد وتقارير الفحص مباشرة إلى واتساب عملائك. لا مزيد من "هل وصلهم الإيميل؟"',
    },
    {
      icon: "🌐",
      titleEn: "Customer Portal",
      titleAr: "بوابة العميل",
      badge: "Premium",
      badgeClass: "bg-blue-100 text-blue-700",
      en: "Your clients log in to see their building's compliance status, request emergency service, and download every report you've ever sent. Makes you look 10x bigger than you are.",
      ar: "عملاؤك يدخلون ليروا حالة الصيانة في مبانيهم، يطلبون خدمة طارئة، ويحمّلون جميع التقارير. تبدو شركتك أكبر بعشر مرات.",
    },
  ];

  const trustItems = [
    {
      en: "Pricing in KWD, invoicing in Arabic",
      ar: "الأسعار بالدينار الكويتي، الفواتير بالعربية",
    },
    {
      en: "KNET, MyFatoorah, and bank transfer ready",
      ar: "متوافق مع كي-نت وماي فاتورة والتحويل البنكي",
    },
    {
      en: "Civil ID, Commercial License, and PACI address fields",
      ar: "حقول الرقم المدني والرخصة التجارية وعنوان البلدية",
    },
    {
      en: "Designed for Kuwait's climate — year-round AMC scheduling",
      ar: "مصمم لمناخ الكويت — جدولة عقود الصيانة على مدار السنة",
    },
    {
      en: "Local support — our Kuwait operations team is one WhatsApp away",
      ar: "دعم محلي — فريق عملياتنا في الكويت على بُعد رسالة واتساب",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-[var(--font-geist-sans)]">
      {/* ─── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-base font-bold">H</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base leading-none block">
                HVACPro
              </span>
              <span className="text-blue-600 text-xs font-semibold tracking-wide">
                KUWAIT
              </span>
            </div>
          </div>
          <a
            href="#demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-px"
          >
            Book Demo →
          </a>
        </div>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px]" />
        </div>

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/25 rounded-full px-5 py-2 text-blue-300 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Beta launching in Kuwait — Join the waitlist
            </div>
          </div>

          {/* Two-column bilingual hero */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* English */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6">
                Stop running your AC maintenance business on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Excel.
                </span>
              </h1>
              <p className="text-lg text-blue-100/80 leading-relaxed mb-8">
                The first software built for Kuwait HVAC contractors. Track AMC
                contracts, dispatch technicians, send Arabic invoices, and renew
                contracts on autopilot — all from one place.
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                Book a 20-minute demo →
              </a>
              <p className="text-blue-400/60 text-sm mt-3">
                Built in Kuwait. For Kuwait.
              </p>
            </div>

            {/* Arabic */}
            <div dir="rtl" className="text-right">
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-[1.2] tracking-tight mb-6">
                توقّف عن إدارة عقود صيانة المكيفات على{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-cyan-400">
                  إكسل.
                </span>
              </h2>
              <p className="text-lg text-blue-100/80 leading-relaxed mb-8">
                أول برنامج مصمم خصيصاً لمقاولي تكييف الهواء في الكويت. تابع
                عقود الصيانة السنوية، وزّع المهام على الفنيين، أصدر الفواتير
                بالعربية، وجدّد العقود تلقائياً — كل ذلك من مكان واحد.
              </p>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                ← احجز عرضاً تجريبياً مجانياً — 20 دقيقة
              </a>
              <p className="text-blue-400/60 text-sm mt-3">
                صُمّم في الكويت. للكويت.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-12">
            {[
              { value: "80%", label: "Admin time saved", sub: "توفير في وقت الإدارة" },
              { value: "6", label: "HVAC-specific modules", sub: "وحدات مخصصة للتكييف" },
              { value: "KWD", label: "Native Kuwait currency", sub: "الدينار الكويتي أساسي" },
            ].map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-blue-300 text-sm">{s.label}</div>
                <div className="text-blue-500/60 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PAIN POINTS ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Sound familiar?
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              The problems every Kuwait HVAC contractor faces
            </h2>
            <p dir="rtl" className="text-slate-500 text-lg">
              المشاكل التي يعاني منها كل مقاول تكييف في الكويت
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.num}
                className="group bg-white rounded-2xl border border-slate-200 p-7 hover:border-blue-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl shrink-0">{p.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-black text-slate-400 tracking-[0.2em] uppercase">
                      {p.num}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                      {p.en}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">
                      {p.enSub}
                    </p>
                    <div
                      dir="rtl"
                      className="bg-slate-50 rounded-xl px-4 py-3.5 border-r-4 border-blue-400"
                    >
                      <p className="text-slate-800 font-semibold text-sm mb-1">
                        {p.ar}
                      </p>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {p.arSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Everything your HVAC business needs
            </h2>
            <p dir="rtl" className="text-slate-500 text-lg">
              كل ما تحتاجه شركتك في مكان واحد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-all duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{f.icon}</span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badgeClass}`}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                    {f.titleEn}
                  </h3>
                  <p className="text-blue-600 text-sm font-semibold mb-3">
                    {f.titleAr}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {f.en}
                  </p>
                  <div
                    dir="rtl"
                    className="border-t border-slate-100 pt-4"
                  >
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {f.ar}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR KUWAIT ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Built for Kuwait
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2">
              Built for Kuwait. Not retrofitted.
            </h2>
            <p dir="rtl" className="text-blue-300 text-xl font-bold">
              مصمم للكويت. ليس معدّلاً لها.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* English column */}
            <div className="space-y-3">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-colors"
                >
                  <span className="w-6 h-6 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 text-sm font-bold">✓</span>
                  </span>
                  <span className="text-white font-medium text-sm">{item.en}</span>
                </div>
              ))}
            </div>

            {/* Arabic column */}
            <div dir="rtl" className="space-y-3">
              {trustItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-5 py-4 transition-colors"
                >
                  <span className="w-6 h-6 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-emerald-400 text-sm font-bold">✓</span>
                  </span>
                  <span className="text-white font-medium text-sm">{item.ar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section id="demo" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-12 lg:p-16 text-white text-center overflow-hidden shadow-2xl shadow-blue-900/40">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 leading-tight">
                See what 5 hours of Excel looks like in 5 minutes.
              </h2>
              <p dir="rtl" className="text-blue-200 text-xl font-semibold mb-8">
                شاهد كيف تتحول 5 ساعات من إكسل إلى 5 دقائق.
              </p>

              <p className="text-blue-100 text-base mb-2 max-w-xl mx-auto leading-relaxed">
                Book a 20-minute demo. We'll show you how Kuwait HVAC contractors
                are cutting their AMC admin time by 80%.
              </p>
              <p
                dir="rtl"
                className="text-blue-200/80 text-sm mb-10 max-w-xl mx-auto leading-relaxed"
              >
                احجز عرضاً تجريبياً مدته 20 دقيقة. سنريك كيف يوفر مقاولو تكييف
                الهواء في الكويت 80% من وقت إدارة العقود.
              </p>

              <a
                href="https://wa.me/96550324743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-extrabold px-10 py-5 rounded-2xl text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>📱</span>
                <span>Book a Demo → &nbsp;|&nbsp; ← احجز عرضاً</span>
              </a>

              <p className="text-blue-300/80 text-sm mt-5">
                No credit card. No sales pressure.
                &nbsp;·&nbsp;
                بدون بطاقة ائتمان. بدون ضغط مبيعات.
              </p>
              <p className="text-blue-400/60 text-xs mt-2">
                Built with Kuwait HVAC contractors — beta launching soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
                  H
                </div>
                <div>
                  <span className="font-bold text-base leading-none block">HVACPro</span>
                  <span className="text-blue-500 text-xs font-bold tracking-wide">KUWAIT</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The first software built specifically for Kuwait HVAC AMC
                contractors.
              </p>
              <p dir="rtl" className="text-slate-600 text-sm leading-relaxed mt-2">
                أول برنامج مصمم لمقاولي صيانة المكيفات في الكويت.
              </p>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-5">
                The Team
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Asad Mehar</div>
                    <div className="text-blue-400 text-xs font-medium">Founder & CTO</div>
                    <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                      5+ years building software for clients in the US,
                      Netherlands, and GCC. Based in Lahore.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sibghatullah</div>
                    <div className="text-blue-400 text-xs font-medium">Kuwait Country Lead</div>
                    <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                      On the ground in Kuwait, available for in-person demos and
                      onboarding.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-5">
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <a
                  href="https://wa.me/96550324743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 bg-emerald-500/15 border border-emerald-500/30 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
                    📱
                  </span>
                  +965 50324743
                </a>
                <a
                  href="mailto:info@shipmyproject.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="w-8 h-8 bg-blue-500/15 border border-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/25 transition-colors">
                    ✉️
                  </span>
                  info@shipmyproject.com
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <span className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                    📍
                  </span>
                  <div className="text-xs leading-relaxed">
                    <div>Operations: Kuwait City, Kuwait</div>
                    <div>Engineering: Lahore, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs">
            <span>© 2025 HVACPro Kuwait · shipmyproject.com</span>
            <span>Beta launching soon — بقريب</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
