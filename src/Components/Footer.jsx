import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa'

const Footer = () => {

  return (

    <footer className='relative mt-16 overflow-hidden border-t border-white/10 bg-slate-950 text-white sm:mt-20 md:mt-24'>

      {/* ================= BACKGROUND GLOW ================= */}

      <div className='absolute top-0 left-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl sm:h-72 sm:w-72'></div>

      <div className='absolute bottom-0 right-0 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl sm:h-72 sm:w-72'></div>


      {/* ================= MAIN FOOTER ================= */}

      <div className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-14 lg:px-10 lg:py-16'>


        {/* ================= BRAND SECTION ================= */}

        <div className='flex flex-col items-center text-center md:items-start md:text-left'>

          <div className='flex items-center gap-3 sm:gap-4'>

            <img
              className='w-12 sm:w-14'
              src="/eCommerceLogo.svg"
              alt="Logo"
            />

            <h1 className='text-2xl font-bold font-serif sm:text-3xl'>
              Vendora
            </h1>

          </div>

          <p className='mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-base'>
            Discover trusted products, reliable partners,
            and modern eCommerce solutions built for the next generation of business.
          </p>


          {/* ================= SOCIAL ICONS ================= */}

          <div className='mt-7 flex flex-wrap justify-center gap-4 md:justify-start'>

            <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-11 sm:w-11 sm:text-lg'>
              <FaFacebookF />
            </div>

            <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-11 sm:w-11 sm:text-lg'>
              <FaTwitter />
            </div>

            <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-11 sm:w-11 sm:text-lg'>
              <FaLinkedinIn />
            </div>

            <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-base transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-orange-300 sm:h-11 sm:w-11 sm:text-lg'>
              <FaInstagram />
            </div>

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className='text-center md:text-left'>

          <h2 className='mb-5 text-xl font-semibold font-serif sm:text-2xl'>
            Quick Links
          </h2>

          <div className='flex flex-col gap-4 text-sm text-slate-300 sm:text-base'>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Products
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Partners
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Factories
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              About Us
            </p>

          </div>

        </div>


        {/* ================= SUPPORT ================= */}

        <div className='text-center md:text-left'>

          <h2 className='mb-5 text-xl font-semibold font-serif sm:text-2xl'>
            Support
          </h2>

          <div className='flex flex-col gap-4 text-sm text-slate-300 sm:text-base'>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Help Center
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Privacy Policy
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Terms & Conditions
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-cyan-300'>
              Contact Support
            </p>

          </div>

        </div>


        {/* ================= CONTACT SECTION ================= */}

        <div className='text-center md:text-left'>

          <h2 className='mb-5 text-xl font-semibold font-serif sm:text-2xl'>
            Contact
          </h2>

          <div className='flex flex-col gap-5 text-sm text-slate-300 sm:text-base'>

            <div>
              <p className='text-xs text-slate-500 sm:text-sm'>
                Email
              </p>

              <p className='mt-1 break-words'>
                support@vendora.com
              </p>
            </div>

            <div>
              <p className='text-xs text-slate-500 sm:text-sm'>
                Phone
              </p>

              <p className='mt-1'>
                +1 (555) 123-4567
              </p>
            </div>

            <div>
              <p className='text-xs text-slate-500 sm:text-sm'>
                Address
              </p>

              <p className='mt-1 leading-7'>
                123 Commerce Street,
                Business City,
                Global Market
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}

      <div className='relative z-10 border-t border-white/10'>

        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center text-xs text-slate-400 sm:px-8 sm:text-sm md:flex-row md:text-left lg:px-10'>

          <p>
            © 2026 Vendora. All rights reserved.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-5 sm:gap-6'>

            <p className='cursor-pointer transition-all duration-300 hover:text-cyan-300'>
              Privacy
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:text-cyan-300'>
              Terms
            </p>

            <p className='cursor-pointer transition-all duration-300 hover:text-cyan-300'>
              Security
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer