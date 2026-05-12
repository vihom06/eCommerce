import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'

const Navbar = () => {

  // State for opening and closing mobile menu
  const [mobileMenu, setMobileMenu] = useState(false)

  // React router navigation hook
  const navigate = useNavigate()

  // Gives current route path
  const location = useLocation()

  // Check if current page is about page
  const isAboutPage = location.pathname === "/about"

  return (

    <header>

      <nav>

        {/* ================= MAIN NAVBAR ================= */}

        <div className='flex flex-row justify-around h-14 fixed z-10 top-0 left-0 w-full backdrop-blur-xl'>


          {/* ================= LOGO SECTION ================= */}

          <div className='flex flex-row gap-16 items-center'>

            {/* Website Logo */}
            <img
              className='max-w-14'
              src="/eCommerceLogo.svg"
              alt="Logo"
            />

            {/* Website Name */}
            <p className='text-4xl font-semibold font-serif'>
              Vendora
            </p>

          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}

          {/* 
            hidden md:flex means:
            - hidden on mobile
            - flex layout on medium and larger screens
          */}

          <div className='hidden md:flex flex flex-row items-center gap-5'>


            {/* About / Home Button */}

            <p
              onClick={() =>
                navigate(isAboutPage ? "/" : "/about")
              }
              className='hover:text-cyan-400 cursor-pointer transition-all hover:-translate-y-1'
            >

              {/* 
                If already on About page → show Home
                Else → show About
              */}

              {isAboutPage ? "Home" : "About"}

            </p>


            {/* Login Button */}

            <button
              onClick={() => navigate('/login')}
              className='hover:bg-cyan-400 border rounded-md p-1 cursor-pointer'
            >
              Login
            </button>


            {/* Signup Button */}

            <button
              onClick={() => navigate('/signup')}
              className='hover:bg-cyan-400 border rounded-md p-1 cursor-pointer'
            >
              Signup
            </button>

          </div>

          {/* ================= HAMBURGER BUTTON ================= */}

          {/* 
            Visible only on mobile screens.
            md:hidden means:
            - hide on medium and larger screens
            - show on smaller screens
          */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className='md:hidden text-3xl'
          >

            {/* 
              If mobileMenu is true → show close icon
              Else → show hamburger icon
            */}

            {
              mobileMenu
                ? <FiX />
                : <FiMenu />
            }

          </button>

        </div>


        {/* ================= MOBILE MENU COMPONENT ================= */}

        {/* 
          Passing props to Hamburger component:
          - mobileMenu → current state
          - setMobileMenu → function to close/open menu
          - navigate → navigation function
          - isAboutPage → checks current route
        */}

        <Hamburger
          mobileMenu={mobileMenu}
          setMobileMenu={setMobileMenu}
          navigate={navigate}
          isAboutPage={isAboutPage}
        />

      </nav>

    </header>
  )
}

export default Navbar