import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  const handleAbout = () => {
    navigate('/About')
  }

  return (
    <header>
      <nav>
        {/* logo and name div */}
        <div className='flex flex-row justify-around h-14 backdrop-blur-xs rounded-tl-2xl rounded-tr-2xl fixed top-0 left-0 w-full'>
          <div className='flex flex-row gap-16 items-center'>
            <img className='max-w-14' src="/eCommerceLogo.svg" alt="Logo" />
            <p className='text-4xl font-semibold font-serif'>Vendora</p>
          </div>
          <div className='flex flex-row items-center gap-5 '>
            <p onClick={handleAbout} className='cursor-pointer transition-all hover:-translate-y-1'>About</p>
            <button className='border rounded-md p-1 cursor-pointer'>Login</button>
            <button className='border rounded-md p-1 cursor-pointer'>Signup</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
