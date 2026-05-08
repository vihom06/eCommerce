import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";


const Hero = () => {

  const navigate = useNavigate()

  const handleProduct = () => {
    navigate('/products')
  }

  const handlePartner = () => {
    navigate('/partners')
  }

  const searchTexts = [
    "Products",
    "Partners",
    "Factories"
  ]

  const [searchValue, setSearchValue] = useState('')

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        (prev + 1) % searchTexts.length
      )

    }, 2500)

    return () => clearInterval(interval)

  }, [])

  return (
    <section className='pt-16 flex flex-col items-center'>
      {/* search bar */}
      <form className='border w-[50%] flex flex-row justify-between rounded-xl px-4 py-2' >
        <input className={`outline-none w-full bg-transparent ${!searchValue ? 'animate-placeholder' : ''}`} placeholder={`Search for ${searchTexts[index]}`} type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button className='cursor-pointer'><BsSearch /></button>

      </form>
      {/* left and right section */}
      <div className='flex flex-row pt-10'>
        {/* left text section */}
        <div className='flex flex-col text-7xl pt-10 gap-4'>
          <p>Find</p>
          <p>Your</p>
          <p onClick={handleProduct} className='font-bold font-serif text-cyan-300 cursor-pointer'>Product</p>
          <p onClick={handlePartner} className='font-bold font-serif text-cyan-300 cursor-pointer'>partner</p>
        </div>
        {/* right model section */}
        <div className='font-bold text-7xl'>
          Render Model later
        </div>
      </div>
    </section>
  )
}

export default Hero


