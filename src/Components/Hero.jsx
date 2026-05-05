import React from 'react'
import { FiSearch } from 'react-icons/fi';

const Hero = () => {

  const images = [
    "/public/logo/eCommerceLogo.svg",
    "/public/logo/laptop.png",
    "/public/logo/eCommerceLogo.svg",
    "/public/logo/laptop1.png",
    "/public/logo/bottle.png"
  ];

  return (
    < section className='bg-black py-8'>
      <div className='max-w-2xl mx-auto px-5'>

        {/* search area */}
        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">

          <FiSearch className="text-gray-500 ml-4 text-xl" />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 text-black outline-none"
          />

          <button className="bg-gray-500 h-12 w-20 flex items-center justify-center cursor-pointer">
            <FiSearch className="text-xl" />
          </button>

        </div>

        {/* text area */}
        <div className="flex items-center justify-between py-36 relative">

          {/* LEFT: Text */}
          <div className="text-5xl flex flex-col gap-6">
            <h2>Find</h2>
            <h2>Your</h2>
            <h2 className="hover:text-gray-400 cursor-pointer">Product</h2>
            <h2 className="hover:text-gray-400 cursor-pointer">Partner</h2>
          </div>

          {/* {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="/public/logo/eCommerceLogo.svg"   // ✅ fixed path
              className="absolute w-12 animate-move"
              style={{
                animationDelay: `${i * 2}s`   // 🔥 core logic
              }}
            />
          ))} */}

          {
            images.map((src, i) => (
              <img
                key={i}
                src={src}
                className='absolute w-12 animate-move'
                style={{
                  animationDelay: `${i * 5}s`
                }} />
            ))}

        </div>
      </div>
    </section >
  )
}

export default Hero
