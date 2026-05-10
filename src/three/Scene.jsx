import { useEffect, useState } from 'react'
import AnimatedModel from './AnimatedModel'

import Light from '../Components/Models/Light'
import Keychain from '../Components/Models/Keychain'
import Bottle from '../Components/Models/Bottle'


const Scene = () => {

  const [currentModel, setCurrentModel] = useState(0)

  const models = [
    <Light scale={0.05} position={[0, -4, 0]} />,
    <Keychain scale={6} position={[-18, -6, 0]} />,
    <Bottle scale={1} position={[0, -4, 0]} />
  ]

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentModel((prev) =>
        (prev + 1) % models.length
      )

    }, 1900)

    return () => clearInterval(interval)

  }, [])

  return (
    <AnimatedModel>

      {models[currentModel]}

    </AnimatedModel>
  )
}

export default Scene