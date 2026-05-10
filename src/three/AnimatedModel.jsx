import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const AnimatedModel = ({ children }) => {

  const modelRef = useRef()

  // Continuous animations
  useEffect(() => {

    if (!modelRef.current) return

    const floatTween = gsap.to(
      modelRef.current.position,
      {
        y: '+=0.1',

        duration: 3,

        ease: 'sine.inOut',

        yoyo: true,

        repeat: -1
      }
    )

    const rotateTween = gsap.to(
      modelRef.current.rotation,
      {

        y: `+=${Math.PI * 2}`,

        duration: 20,

        ease: 'none',

        repeat: -1
      }
    )

    return () => {

      floatTween.kill()

      rotateTween.kill()
    }

  }, [])

  // Entrance animation
  useEffect(() => {

    if (!modelRef.current) return

    const startTime = performance.now()

    gsap.set(modelRef.current.scale, {
      x: 0.2,
      y: 0.2,
      z: 0.2
    })

    const tl = gsap.timeline({

      onStart: () => {

      },

      onComplete: () => {

        const endTime = performance.now()

      }

    })

    tl.to(
      modelRef.current.scale,
      {

        x: 1,
        y: 1,
        z: 1,

        duration: 1.4,

        ease: 'back.out(1.7)'
      }
    )

    .to(
      modelRef.current.scale,
      {

        x: 1.05,
        y: 1.05,
        z: 1.05,

        duration: 0.3,

        ease: 'power2.inOut',

        yoyo: true,

        repeat: 1
      }
    )

  }, [children])

  return (

    <group ref={modelRef}>

      {children}

    </group>
  )
}

export default AnimatedModel