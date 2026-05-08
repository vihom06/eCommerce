import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()

  const handleProduct = () => {
    navigate('/products')
  }

  const handlePartner = () => {
    navigate('/partners')
  }

  return (
    <section className='pt-16'>
      {/* left and right section */}
      <div className='flex flex-row pt-10'>
        {/* left text section */}
        <div className='flex flex-col text-7xl pt-10 pl-20 gap-4'>
          <p>Find</p>
          <p>Your</p>
          <p onClick={handleProduct} className='font-bold font-serif text-cyan-300 cursor-pointer'>Product</p>
          <p onClick={handlePartner} className='font-bold font-serif text-cyan-300 cursor-pointer'>partner</p>
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
