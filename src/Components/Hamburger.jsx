import React from 'react'

const Hamburger = ({
  mobileMenu,
  setMobileMenu,
  navigate,
  isAboutPage
}) => {

  return (

    <div className={`
      md:hidden
      fixed
      top-16
      right-4
      z-50
      w-[290px]
      overflow-hidden
      rounded-[32px]
      border
      border-white/20
      bg-white/10
      shadow-[0_8px_40px_rgba(0,0,0,0.15)]
      backdrop-blur-3xl
      transition-all
      duration-500
      ${mobileMenu
        ? 'translate-x-0 opacity-100 scale-100'
        : 'translate-x-[120%] opacity-0 scale-95'}
    `}>

      {/* ================= BACKGROUND GLOW EFFECTS ================= */}

      <div className='absolute -top-12 -right-12 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl'></div>

      <div className='absolute bottom-0 left-0 h-36 w-36 rounded-full bg-orange-500/20 blur-3xl'></div>

      <div className='absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-2xl'></div>


      {/* ================= MENU CONTENT ================= */}

      <div className='relative z-10 flex flex-col p-5'>

        {/* Small Heading */}

        <p className='mb-5 px-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500'>
          Navigation
        </p>


        {/* About / Home Button */}

        <button
          onClick={() => {
            navigate(isAboutPage ? "/" : "/about")
            setMobileMenu(false)
          }}
          className='group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/30 hover:bg-cyan-300/10'
        >

          <span className='text-lg font-semibold text-slate-800'>
            {isAboutPage ? "Home" : "About"}
          </span>

          <span className='translate-x-0 text-xl text-slate-500 transition-all duration-300 group-hover:translate-x-1'>
            →
          </span>

        </button>


        {/* Login Button */}

        <button
          onClick={() => {
            navigate('/login')
            setMobileMenu(false)
          }}
          className='group mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/30 hover:bg-cyan-300/10'
        >

          <span className='text-lg font-semibold text-slate-800'>
            Login
          </span>

          <span className='translate-x-0 text-xl text-slate-500 transition-all duration-300 group-hover:translate-x-1'>
            →
          </span>

        </button>


        {/* Signup Button */}

        <button
          onClick={() => {
            navigate('/signup')
            setMobileMenu(false)
          }}
          className='mt-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-blue-700 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-400/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-orange-500/40'
        >
          Create Account
        </button>


        {/* Bottom Text */}

        <p className='mt-5 text-center text-xs text-slate-500'>
          Discover products and partners with Vendora
        </p>

      </div>
    </div>
  )
}

export default Hamburger