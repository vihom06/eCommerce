import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import Scene from '../three/Scene';
import Keychain from './Models/Keychain';
import SearchBar from './SearchBar';

const Hero = () => {

  const navigate = useNavigate()

  const handleProduct = () => {
    navigate('/products')
  }

  const handlePartner = () => {
    navigate('/partners')
  }

  return (
    <section className='pt-16 flex flex-col items-center'>
      {/* search bar */}
      <SearchBar />
      {/* left and right section */}
      <div className='flex flex-col items-center pt-10 lg:flex-row'>
        {/* left text section */}
        <div className='flex flex-col text-7xl pt-10 gap-4'>
          <p>Find</p>
          <p>Your</p>
          <p onClick={handleProduct} className='outline-text font-bold font-serif text-cyan-300 cursor-pointer'>Product</p>
          <p onClick={handlePartner} className='outline-text font-bold font-serif text-cyan-300 cursor-pointer'>partner</p>
        </div>
        {/* right model section */}
        <div className='w-full h-[350px] sm:h-[450px] md:h-[550px] lg:w-[700px] lg:h-[650px]'>

          <Canvas camera={{ position: [0, 0, 5], fov: 100, near: 0.1, far: 500 }}>

            <ambientLight intensity={6} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={3}
            />

            <Scene />


          </Canvas>
        </div>
      </div>
    </section> 
  )

}

export default Hero


