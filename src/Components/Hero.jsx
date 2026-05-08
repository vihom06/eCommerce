import React from 'react'

const Hero = () => {
  return (
    <section className='pt-16'>
      {/* left and right section */}
      <div className='flex flex-row pt-10'>
        {/* left text section */}
        <div className='flex flex-col text-7xl pt-10 pl-20 gap-4'>
          <p>Find</p>
          <p>Your</p>
          <p className='font-bold font-serif text-cyan-300 cursor-pointer'>Product</p>
          <p className='font-bold font-serif text-cyan-300 cursor-pointer'>partner</p>
        </div>
        {/* right model section */}
        <div>
          Render Model later
        </div>
      </div>
    </section>
  )
}

export default Hero
