import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <nav className="flex items-center justify-between p-7">

        {/* Left side (logo + name) */}
        <div className="flex items-center gap-12">
          <img
            src="/public/logo/eCommerceLogo.svg"
            alt="Logo"
            className="h-16 object-contain rounded-full"
          />
          <h1 className="font-bold text-3xl">Vendora</h1>
        </div>

        {/* Right side (menu icon) */}
        <GiHamburgerMenu className="text-2xl cursor-pointer" />

      </nav>
    </header>
  )
}

export default Navbar
