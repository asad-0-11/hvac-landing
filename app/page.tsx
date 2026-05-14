/* eslint-disable @next/next/no-img-element */
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
    en: "Every contract — client, AC units covered, value in KWD, start/end dates, renewal status. Auto-reminders at 60, 30, and 7 days before expiry.",
    ar: "كل عقد — العميل، الوحدات المشمولة، قيمة العقد بالدينار، تاريخ البداية والنهاية، حالة التجديد. تنبيهات تلقائية قبل 60 و30 و7 أيام من انتهاء العقد.",
  },
  {
    icon: "🏷️",
    titleEn: "AC Asset Register + QR Tags",
    titleAr: "سجل المكيفات برمز QR",
    badge: "Smart",
    badgeClass: "bg-emerald-100 text-emerald-700",
    en: 'Every AC unit tagged with a QR sticker. Scan on-site to see full service history, manufacturer, install date, warranty. No more "which unit is this?"',
    ar: 'كل وحدة تكييف بملصق QR. امسحه في الموقع لترى السجل الكامل والشركة المصنعة وتاريخ التركيب وحالة الضمان. لا مزيد من "أي وحدة هذه؟"',
  },
  {
    icon: "📱",
    titleEn: "Mobile App for Technicians",
    titleAr: "تطبيق الجوال للفنيين",
    badge: "Offline",
    badgeClass: "bg-violet-100 text-violet-700",
    en: "Job cards on their phone. Photos, signature, parts used. Works in basement plant rooms with no signal. Syncs when back online.",
    ar: "بطاقات العمل على هاتفهم. الصور وتوقيع العميل وقطع الغيار. يعمل حتى في غرف المعدات بدون إنترنت. يتزامن عند عودة الاتصال.",
  },
  {
    icon: "🧾",
    titleEn: "KWD Invoicing — Arabic & English",
    titleAr: "فواتير بالدينار والعربية",
    badge: "KWD",
    badgeClass: "bg-amber-100 text-amber-700",
    en: "One-click invoices in KWD with proper Arabic formatting. KNET and MyFatoorah payment links. VAT-ready when Kuwait introduces it.",
    ar: "فواتير بنقرة واحدة بالدينار وبتنسيق عربي صحيح. روابط دفع كي-نت وماي فاتورة. جاهز للضريبة عند تطبيقها في الكويت.",
  },
  {
    icon: "💬",
    titleEn: "WhatsApp Reminders & Reports",
    titleAr: "تذكيرات وتقارير واتساب",
    badge: "Automated",
    badgeClass: "bg-emerald-100 text-emerald-700",
    en: 'Service confirmations, renewal reminders, and inspection reports direct to your customers\' WhatsApp. No more "did they get the email?"',
    ar: 'تأكيدات الزيارات وتذكيرات التجديد وتقارير الفحص مباشرة إلى واتساب عملائك. لا مزيد من "هل وصلهم الإيميل؟"',
  },
  {
    icon: "🌐",
    titleEn: "Customer Portal",
    titleAr: "بوابة العميل",
    badge: "Premium",
    badgeClass: "bg-indigo-100 text-indigo-700",
    en: "Clients log in to see compliance status, request emergency service, download every report. Makes you look 10× bigger than you are.",
    ar: "عملاؤك يدخلون ليروا حالة الصيانة، يطلبون خدمة طارئة، ويحمّلون التقارير. تبدو شركتك أكبر بعشر مرات.",
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
    en: "Local support — Kuwait operations team on WhatsApp",
    ar: "دعم محلي — فريق عملياتنا في الكويت على بُعد رسالة واتساب",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── AMBIENT BACKGROUND ─────────────────────────────────── */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{
          background: "#f8fafc",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23e2e8f0' fill-opacity='0.45' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}
      >
        <div
          className="absolute -top-40 -left-32 h-[700px] w-[700px] rounded-full blur-[180px]"
          style={{ background: "rgba(37,99,235,0.08)" }}
        />
        <div
          className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full blur-[160px]"
          style={{ background: "rgba(124,58,237,0.06)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(16,185,129,0.05)" }}
        />
      </div>

      {/* ─── NAVBAR ─────────────────────────────────────────────── */}
      <nav
        id="navbar"
        className="fixed inset-x-0 top-0 z-50 bg-white border-b border-slate-200/80 shadow-sm transition-all duration-300"
      >
        <div
          id="navWrap"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 transition-all duration-300"
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/smp-logo.png"
              alt="ShipMyProject logo"
              width={36}
              height={36}
              className="rounded-xl object-cover shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                ShipMyProject
                <span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                HVAC Kuwait
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-500 lg:flex">
            <li>
              <a href="#pain" className="hover:text-slate-900 transition-colors py-1">
                Why Switch
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-slate-900 transition-colors py-1">
                Features
              </a>
            </li>
            <li>
              <a href="#kuwait" className="hover:text-slate-900 transition-colors py-1">
                Built for Kuwait
              </a>
            </li>
            <li>
              <a href="#demo" className="hover:text-slate-900 transition-colors py-1">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://wa.me/96550324743"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span className="text-base">📱</span> WhatsApp
            </a>
            <a
              href="#demo"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:-translate-y-px hover:shadow-lg hover:shadow-blue-200"
            >
              Book Demo →
            </a>
          </div>

          {/* Mobile CTA */}
          <a
            href="#demo"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white lg:hidden"
          >
            Book Demo
          </a>
        </div>
      </nav>

      <main className="pt-24">
        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative py-24 md:py-36 overflow-hidden"
        >
          {/* Dark gradient backdrop behind hero content */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
          <div className="absolute inset-0 -z-10 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/15 blur-[100px] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            {/* Top badge */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-300 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                </span>
                Beta launching in Kuwait — Join the waitlist
              </div>
            </div>

            {/* Bilingual hero columns */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* English */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
                  Stop running your AC maintenance business on{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                    }}
                  >
                    Excel.
                  </span>
                </h1>
                <p className="text-lg text-blue-100/75 leading-relaxed mb-8 max-w-lg">
                  The first software built for Kuwait HVAC contractors. Track
                  AMC contracts, dispatch technicians, send Arabic invoices, and
                  renew contracts on autopilot — all from one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold text-slate-900 shadow-xl shadow-white/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    Book a 20-min demo →
                  </a>
                  <a
                    href="https://wa.me/96550324743"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
                  >
                    📱 WhatsApp Us
                  </a>
                </div>
                {/* Trust pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["✓ Arabic invoicing", "✓ KWD native", "✓ No IT setup needed", "✓ WhatsApp support"].map(t => (
                    <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold text-blue-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arabic */}
              <div dir="rtl" className="text-white text-right">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6">
                  توقّف عن إدارة عقود صيانة المكيفات على{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #34d399 0%, #60a5fa 100%)",
                    }}
                  >
                    إكسل.
                  </span>
                </h2>
                <p className="text-lg text-blue-100/75 leading-relaxed mb-8">
                  أول برنامج مصمم خصيصاً لمقاولي تكييف الهواء في الكويت. تابع
                  عقود الصيانة السنوية، وزّع المهام على الفنيين، أصدر الفواتير
                  بالعربية، وجدّد العقود تلقائياً — كل ذلك من مكان واحد.
                </p>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-extrabold text-slate-900 shadow-xl shadow-white/10 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  ← احجز عرضاً تجريبياً مجانياً — 20 دقيقة
                </a>
                <p className="text-blue-400/60 text-sm font-medium mt-4">
                  صُمّم في الكويت. للكويت.
                </p>
              </div>
            </div>

            {/* Stats strip */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/10 pt-14">
              {[
                {
                  value: "80%",
                  en: "Admin time saved",
                  ar: "توفير في وقت الإدارة",
                },
                {
                  value: "6",
                  en: "HVAC-specific modules",
                  ar: "وحدات مخصصة للتكييف",
                },
                {
                  value: "KWD",
                  en: "Native Kuwait currency",
                  ar: "الدينار الكويتي أساسي",
                },
              ].map((s) => (
                <div key={s.value} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-1.5">
                    {s.value}
                  </div>
                  <div className="text-blue-300 text-sm font-semibold">
                    {s.en}
                  </div>
                  <div className="text-blue-500/55 text-xs mt-0.5">{s.ar}</div>
                </div>
              ))}
            </div>

            {/* Mock dashboard preview */}
            <div className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-3 border-b border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <div className="flex-1 mx-4 h-5 rounded-md bg-white/10 flex items-center px-3">
                  <span className="text-[10px] text-white/40 font-medium">app.hvacpro.kw / dashboard</span>
                </div>
              </div>
              {/* Dashboard UI */}
              <div className="bg-slate-900/60 backdrop-blur-sm p-5">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="h-4 w-36 bg-white/20 rounded mb-1.5" />
                    <div className="h-3 w-24 bg-white/10 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-24 rounded-lg bg-blue-500/40 border border-blue-400/30" />
                    <div className="h-8 w-24 rounded-lg bg-white/10 border border-white/10" />
                  </div>
                </div>
                {/* KPI cards row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Active AMCs", val: "142", color: "from-blue-500/30 to-blue-600/20", badge: "+8 this month" },
                    { label: "Expiring Soon", val: "12", color: "from-amber-500/30 to-amber-600/20", badge: "Next 30 days" },
                    { label: "Open Jobs", val: "38", color: "from-violet-500/30 to-violet-600/20", badge: "4 urgent" },
                    { label: "Revenue MTD", val: "KD 8,240", color: "from-emerald-500/30 to-emerald-600/20", badge: "+22% vs last" },
                  ].map(k => (
                    <div key={k.label} className={`rounded-xl bg-gradient-to-br ${k.color} border border-white/10 p-3`}>
                      <div className="text-[10px] font-semibold text-white/50 mb-1">{k.label}</div>
                      <div className="text-base font-black text-white mb-1">{k.val}</div>
                      <div className="text-[9px] text-white/40">{k.badge}</div>
                    </div>
                  ))}
                </div>
                {/* Table rows */}
                <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                  <div className="grid grid-cols-5 gap-2 px-4 py-2 border-b border-white/10">
                    {["Client", "Contract", "AC Units", "Expiry", "Status"].map(h => (
                      <div key={h} className="text-[10px] font-bold uppercase tracking-wider text-white/30">{h}</div>
                    ))}
                  </div>
                  {[
                    { client: "Al Hamra Tower", contract: "AMC-2024-089", units: "48", expiry: "Jun 15, 2025", status: "Active", statusColor: "bg-emerald-400/20 text-emerald-300" },
                    { client: "Kuwait Mall", contract: "AMC-2024-091", units: "124", expiry: "Jun 30, 2025", status: "⚠ Expiring", statusColor: "bg-amber-400/20 text-amber-300" },
                    { client: "Salmiya Plaza", contract: "AMC-2024-076", units: "32", expiry: "Aug 10, 2025", status: "Active", statusColor: "bg-emerald-400/20 text-emerald-300" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-5 gap-2 px-4 py-2.5 border-b border-white/5 hover:bg-white/5">
                      <div className="text-[11px] font-semibold text-white/70">{row.client}</div>
                      <div className="text-[11px] text-white/40 font-mono">{row.contract}</div>
                      <div className="text-[11px] text-white/50">{row.units} units</div>
                      <div className="text-[11px] text-white/50">{row.expiry}</div>
                      <div><span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.statusColor}`}>{row.status}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PAIN POINTS ───────────────────────────────────────── */}
        <section id="pain" className="py-24 bg-slate-50/80 relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-red-50 border border-red-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-red-600 mb-5">
                Sound familiar?
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                The problems every Kuwait HVAC contractor faces
              </h2>
              <p dir="rtl" className="text-slate-500 text-lg font-medium">
                المشاكل التي يعاني منها كل مقاول تكييف في الكويت
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {painPoints.map((p, i) => (
                <div
                  key={p.num}
                  className="reveal hover-lift bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm overflow-hidden relative"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Subtle number watermark */}
                  <div className="absolute top-4 right-5 text-7xl font-black text-slate-100 select-none pointer-events-none leading-none">
                    {p.num}
                  </div>
                  <div className="flex items-start gap-5 relative">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-3xl shadow-sm">
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-400">
                        {p.num}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900 mt-1 mb-2 leading-snug">
                        {p.en}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">
                        {p.enSub}
                      </p>
                      <div
                        dir="rtl"
                        className="rounded-2xl bg-blue-50/60 border border-blue-100/80 px-4 py-3.5 border-r-[3px] border-r-blue-400"
                      >
                        <p className="text-slate-800 font-bold text-sm mb-1">
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

        {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-6">
            <div className="reveal text-center mb-14">
              <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-5">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Up and running in days, not months.
              </h2>
            </div>
            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Connector line (desktop only) */}
              <div className="absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden md:block pointer-events-none" />
              {[
                { step: "01", icon: "📋", title: "We map your contracts", desc: "Send us your Excel sheet. We import all your AMC contracts, clients, and AC assets. Done in 48 hours.", ar: "نستورد عقودك وبياناتك خلال 48 ساعة." },
                { step: "02", icon: "📱", title: "Your team gets onboarded", desc: "A 30-min WhatsApp call. Your technicians get the app. Your managers get the dashboard.", ar: "مكالمة واتساب 30 دقيقة — فريقك جاهز." },
                { step: "03", icon: "🚀", title: "You're live", desc: "Contracts tracked, reminders firing, invoices going out in Arabic. Full control from day one.", ar: "العقود تحت السيطرة والفواتير تصدر بالعربية." },
              ].map((s, i) => (
                <div key={i} className="reveal flex flex-col items-center text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative mb-5">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 flex items-center justify-center text-3xl shadow-sm z-10 relative">
                      {s.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-black text-white z-20">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2">{s.desc}</p>
                  <p dir="rtl" className="text-blue-500/70 text-xs font-semibold">{s.ar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ──────────────────────────────────────────── */}
        <section
          id="features"
          className="py-24 bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-indigo-700/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="reveal max-w-3xl mb-16">
              <p className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-3">
                Everything You Need
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                The features Kuwait HVAC businesses actually need.
              </h2>
              <p dir="rtl" className="text-slate-400 text-lg font-medium mt-3">
                كل ما يحتاجه مقاول التكييف الكويتي، مصمم بعناية.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="reveal group relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                      {f.icon}
                    </div>
                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${f.badgeClass}`}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-0.5">
                    {f.titleEn}
                  </h3>
                  <p className="text-blue-400 text-sm font-bold mb-3">
                    {f.titleAr}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {f.en}
                  </p>
                  <div dir="rtl" className="border-t border-white/10 pt-4">
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {f.ar}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BUILT FOR KUWAIT ──────────────────────────────────── */}
        <section id="kuwait" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-4">
                Built for Kuwait
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
                Built for Kuwait.{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                  }}
                >
                  Not retrofitted.
                </span>
              </h2>
              <p dir="rtl" className="text-slate-500 text-xl font-bold">
                مصمم للكويت. ليس معدّلاً لها.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {/* English */}
              <div className="space-y-3">
                {trustItems.map((item, i) => (
                  <div
                    key={i}
                    className="reveal hover-lift flex items-center gap-4 bg-white rounded-2xl border border-slate-200/70 px-5 py-4 shadow-sm"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm font-black">
                      ✓
                    </span>
                    <span className="text-slate-800 font-semibold text-sm">
                      {item.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* Arabic */}
              <div dir="rtl" className="space-y-3">
                {trustItems.map((item, i) => (
                  <div
                    key={i}
                    className="reveal hover-lift flex items-center gap-4 bg-white rounded-2xl border border-slate-200/70 px-5 py-4 shadow-sm"
                    style={{ transitionDelay: `${i * 60 + 30}ms` }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm font-black">
                      ✓
                    </span>
                    <span className="text-slate-800 font-semibold text-sm">
                      {item.ar}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────── */}
        <section id="demo" className="py-24 relative">
          <div className="mx-auto max-w-4xl px-6">
            <div
              className="reveal relative overflow-hidden rounded-[2rem] p-12 lg:p-16 text-white text-center shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #4f46e5 100%)",
              }}
            >
              {/* Decorative orbs */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute inset-0 bg-blue-400/10 rounded-[2rem] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)" }} />

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-2">
                  See what 5 hours of Excel looks like in 5 minutes.
                </h2>
                <p dir="rtl" className="text-blue-200 text-xl font-bold mb-8">
                  شاهد كيف تتحول 5 ساعات من إكسل إلى 5 دقائق.
                </p>

                <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed mb-2">
                  Book a 20-minute demo. We'll show you how Kuwait HVAC
                  contractors cut their AMC admin time by 80%.
                </p>
                <p
                  dir="rtl"
                  className="text-blue-200/70 text-sm max-w-xl mx-auto leading-relaxed mb-10"
                >
                  احجز عرضاً تجريبياً مدته 20 دقيقة. سنريك كيف يوفر مقاولو
                  التكييف في الكويت 80% من وقت إدارة العقود.
                </p>

                <a
                  href="https://wa.me/96550324743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-extrabold text-blue-700 shadow-2xl shadow-blue-900/30 transition-all hover:-translate-y-1 hover:shadow-3xl hover:bg-blue-50"
                >
                  <span>📱</span>
                  <span>Book a Demo &nbsp;·&nbsp; احجز عرضاً</span>
                </a>

                <p className="text-blue-300/70 text-sm mt-5">
                  No credit card. No sales pressure.
                  &nbsp;·&nbsp; بدون بطاقة ائتمان. بدون ضغط مبيعات.
                </p>
                <p className="text-blue-400/50 text-xs mt-2">
                  Built with Kuwait HVAC contractors — beta launching soon.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <a href="#hero" className="inline-flex items-center gap-2.5 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/smp-logo.png"
                  alt="ShipMyProject logo"
                  width={36}
                  height={36}
                  className="rounded-xl object-cover shadow"
                />
                <div>
                  <span className="font-extrabold text-base leading-none block">
                    ShipMyProject<span className="text-blue-500">.</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    HVAC Kuwait
                  </span>
                </div>
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                The first software built specifically for Kuwait HVAC AMC
                contractors.
              </p>
              <p
                dir="rtl"
                className="text-slate-600 text-sm leading-relaxed mt-2"
              >
                أول برنامج مصمم لمقاولي صيانة المكيفات في الكويت.
              </p>
            </div>

            {/* Team */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-5">
                The Team
              </h3>
              <div className="space-y-5">
                {[
                  {
                    initial: "A",
                    name: "Asad Mehar",
                    role: "Founder & CTO",
                    bio: "5+ years building software for clients in the US, Netherlands, and GCC. Based in Lahore.",
                  },
                  {
                    initial: "S",
                    name: "Sibghatullah",
                    role: "Kuwait Country Lead",
                    bio: "On the ground in Kuwait, available for in-person demos and onboarding.",
                  },
                ].map((person) => (
                  <div key={person.name} className="flex items-start gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-extrabold">
                      {person.initial}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{person.name}</div>
                      <div className="text-blue-400 text-xs font-semibold">
                        {person.role}
                      </div>
                      <div className="text-slate-500 text-xs mt-1 leading-relaxed">
                        {person.bio}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500 mb-5">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/96550324743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-base group-hover:bg-emerald-500/25 transition-colors">
                    📱
                  </span>
                  <span className="text-sm font-semibold">+965 50324743</span>
                </a>
                <a
                  href="mailto:info@shipmyproject.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-base group-hover:bg-blue-500/25 transition-colors">
                    ✉️
                  </span>
                  <span className="text-sm font-semibold">
                    info@shipmyproject.com
                  </span>
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <span className="h-9 w-9 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-base">
                    📍
                  </span>
                  <div className="text-xs leading-relaxed font-medium">
                    <div>Operations: Kuwait City, Kuwait</div>
                    <div>Engineering: Lahore, Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs font-semibold">
            <span>© 2025 ShipMyProject · shipmyproject.com</span>
            <span>HVAC Pro Kuwait — beta launching soon · بقريب</span>
          </div>
        </div>
      </footer>

      {/* ─── SCRIPTS ───────────────────────────────────────────────── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Scroll reveal
            const io = new IntersectionObserver((entries) => {
              entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); }
              });
            }, { threshold: 0.12 });
            document.querySelectorAll('.reveal').forEach(el => io.observe(el));

            // Nav shadow on scroll
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
              if (window.scrollY > 8) {
                nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.08)';
              } else {
                nav.style.boxShadow = '';
              }
            });
          `,
        }}
      />
    </>
  );
}
