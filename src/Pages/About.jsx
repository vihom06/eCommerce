// About page component for Vendora ecommerce platform
// This page uses:
// - Glassmorphism UI
// - Gradient backgrounds
// - Responsive layouts
// - Floating blur effects
// - Animated hover interactions

export default function About() {
  // Array for statistics cards
  // Using array mapping keeps code scalable and cleaner
  const statsData = [
    ['10K+', 'Registered Buyers'],
    ['500+', 'Trusted Vendors'],
    ['50+', 'Business Categories'],
  ]

  // Feature cards data
  // This allows us to dynamically render all cards using .map()
  const featureData = [
    {
      title: 'Modern Marketplace',
      desc: 'Buyers and sellers interact through a clean and scalable ecommerce platform.',
    },
    {
      title: 'Fast Performance',
      desc: 'Optimized frontend and backend architecture for smooth browsing experience.',
    },
    {
      title: 'Secure Authentication',
      desc: 'Modern login and signup systems with secure authentication flow.',
    },
    {
      title: 'Vendor Ecosystem',
      desc: 'Businesses can manage products, orders, and customer interactions efficiently.',
    },
    {
      title: 'Premium UI Design',
      desc: 'Glassmorphism, gradients, animations, and responsive layouts create immersive experience.',
    },
    {
      title: 'Future Scalability',
      desc: 'Structured for future integrations like payments, analytics, and AI features.',
    },
  ]

  return (
    // Main page wrapper
    // overflow-hidden prevents blur effects from creating scrollbars
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50 to-cyan-50 pt-24">

      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Left glowing background blob */}
      <div className="absolute top-0 left-0 -z-10 h-[600px] w-[750px] rounded-full border-l-[120px] bg-orange-700 blur-3xl opacity-30 animate-pulse" />

      {/* Right glowing background blob */}
      <div className="absolute bottom-0 right-0 -z-10 h-[600px] w-[750px] rounded-full border-r-[120px] border-t-[120px] border-blue-800 blur-3xl opacity-30 animate-pulse" />

      {/* Center cyan glow */}
      <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300 blur-3xl opacity-20" />

      {/* Additional floating blur effects */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-64 w-64 rounded-full bg-orange-300 blur-3xl opacity-20" />

      <div className="absolute bottom-20 right-1/4 -z-10 h-72 w-72 rounded-full bg-blue-300 blur-3xl opacity-20" />


      {/* ================= FLOATING GLASS CARDS ================= */}

      {/* Decorative floating vendor card */}
      <div className="absolute left-12 top-40 hidden rotate-[-12deg] rounded-3xl border border-white/40 bg-white/20 p-6 shadow-2xl backdrop-blur-xl lg:block">
        <p className="text-lg font-bold text-slate-800">500+ Vendors</p>
        <p className="mt-2 text-sm text-slate-600">Growing business ecosystem</p>
      </div>

      {/* Decorative floating buyer card */}
      <div className="absolute right-16 top-60 hidden rotate-[12deg] rounded-3xl border border-white/40 bg-white/20 p-6 shadow-2xl backdrop-blur-xl lg:block">
        <p className="text-lg font-bold text-slate-800">10K+ Buyers</p>
        <p className="mt-2 text-sm text-slate-600">Active ecommerce community</p>
      </div>


      {/* ================= HERO SECTION ================= */}

      {/* Main hero container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Small top badge */}
        <div className="rounded-full border border-white/40 bg-white/30 px-6 py-2 text-sm font-semibold tracking-wide text-slate-700 backdrop-blur-xl shadow-lg">
          Modern Ecommerce Platform
        </div>

        {/* Main heading */}
        {/* bg-clip-text + text-transparent creates gradient text */}
        <h1 className="mt-8 max-w-6xl text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-7xl lg:text-8xl">
          Building The Future Of

          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-700 bg-clip-text text-transparent">
            {' '}Businesses{' '}
          </span>

          Digital Commerce With Vendora
        </h1>

        {/* Hero paragraph */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          Vendora is a next-generation ecommerce ecosystem designed to help vendors,
          businesses, and buyers connect seamlessly through a fast, modern, and
          visually immersive shopping experience.
        </p>


        {/* ================= HERO BUTTONS ================= */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">

          {/* Primary CTA Button */}
          <button
            className="group rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-blue-700 px-12 py-5 text-lg font-semibold text-white shadow-xl shadow-orange-300/40 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-orange-400/50"
          >
            Explore Marketplace →
          </button>

          {/* Secondary CTA Button */}
          <button
            className="rounded-2xl border border-white/30 bg-white/30 px-10 py-4 text-lg font-semibold text-slate-700 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/50"
          >
            Learn More
          </button>
        </div>
      </div>


      {/* ================= STATS SECTION ================= */}

      {/* Responsive stats grid */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">

        {/* Dynamically rendering stats cards */}
        {statsData.map(([number, text]) => (
          <div
            key={text}
            className="group rounded-[2rem] border border-white/30 bg-white/30 p-12 text-center shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white/40"
          >

            {/* Gradient stats number */}
            <h2 className="bg-gradient-to-r from-orange-600 to-blue-700 bg-clip-text text-5xl font-black text-transparent">
              {number}
            </h2>

            {/* Stats label */}
            <p className="mt-4 text-lg font-medium text-slate-700">
              {text}
            </p>
          </div>
        ))}
      </div>


      {/* ================= FEATURES SECTION ================= */}

      <div className="mx-auto mt-32 w-full max-w-7xl px-6 pb-24">

        {/* Features heading */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-900 md:text-5xl">
            Experience The Next Generation Ecommerce Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Designed with modern UI principles, scalable backend architecture,
            and smooth user experience to help businesses grow digitally.
          </p>
        </div>


        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Rendering all feature cards dynamically */}
          {featureData.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/30 p-10 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-white/40"
            >

              {/* Decorative glowing circle */}
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-orange-300/30 to-blue-400/30 blur-2xl" />

              {/* Gradient icon placeholder */}
              <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-700 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110" />

              {/* Feature title */}
              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Feature description */}
              <p className="mt-4 leading-relaxed text-slate-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
