// CONFETTI COMPONENT BY ANDERSON MANCINI AND ROMAIN HERAULT
// Based on: https://github.com/JamesChan21/threejs-confetti
// Based on: https://github.com/daniel-lundin/dom-confetti
// If you use, please credit it :)

import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Preload, Stars } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

function Confetti(
  {
    isExploding = false,
    amount = 100,
    rate = 3, //be careful with this number. Can freze your app
    radius = 15,
    areaWidth = 3,
    areaHeight = 1,
    fallingHeight = 10,
    fallingSpeed = 8,
    colors = [0x0000ff, 0xff0000, 0xffff00],
    enableShadows = false
  },
  props
) {
  const groupRef = useRef()
  const [booms, setBooms] = useState([])

  rate = rate / 100
  const geometry = new THREE.PlaneGeometry(0.03, 0.03, 1, 1)

  function explode() {
    const boom = new THREE.Object3D()
    boom.life = Math.random() * 5 + 5
    boom.position.x = -(areaWidth / 2) + areaWidth * Math.random()
    boom.position.y = fallingHeight + areaHeight - fallingSpeed
    boom.position.z = -(areaWidth / 2) + areaWidth * Math.random()
    groupRef.current.add(boom)
    booms.push(boom)

    for (let i = 0; i < amount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        side: THREE.DoubleSide
      })
      const particle = new THREE.Mesh(geometry, material)
      particle.castShadow = enableShadows
      boom.add(particle)

      particle.life = 1

      particle.destination = {}
      particle.destination.x = (Math.random() - 0.5) * (radius * 2) * Math.random()
      particle.destination.y = (Math.random() - 0.5) * (radius * 2) * Math.random()
      particle.destination.z = (Math.random() - 0.5) * (radius * 2) * Math.random()

      particle.rotation.x = Math.random() * 360
      particle.rotation.y = Math.random() * 360
      particle.rotation.z = Math.random() * 360

      const size = Math.random() * 2 + 1
      particle.scale.set(size, size, size)

      particle.rotateSpeedX = Math.random() * 0.8 - 0.4
      particle.rotateSpeedY = Math.random() * 0.8 - 0.4
      particle.rotateSpeedZ = Math.random() * 0.8 - 0.4
    }

    boom.dispose = function () {
      for (let i = 0; i < boom.children.length; i++) {
        const particle = boom.children[i]
        particle.material.dispose()
        particle.geometry.dispose()
        boom.remove(particle)
      }
      groupRef.current.remove(boom)
    }
  }

  useFrame(() => {
    if (isExploding && Math.random() < rate) explode()

    let particleAmount = 0

    for (let i = 0; i < booms.length; i++) {
      const boom = booms[i]

      for (let k = 0; k < boom.children.length; k++) {
        let particle = boom.children[k]

        particle.destination.y -= THREE.MathUtils.randFloat(0.1, 0.3)
        particle.life -= THREE.MathUtils.randFloat(0.005, 0.01)

        const speedX = (particle.destination.x - particle.position.x) / 200
        const speedY = (particle.destination.y - particle.position.y) / 200
        const speedZ = (particle.destination.z - particle.position.z) / 200

        particle.position.x += speedX
        particle.position.y += speedY
        particle.position.z += speedZ

        particle.rotation.y += particle.rotateSpeedY
        particle.rotation.x += particle.rotateSpeedX
        particle.rotation.z += particle.rotateSpeedZ

        particle.material.opacity -= THREE.MathUtils.randFloat(0.005, 0.01)

        if (particle.position.y < -fallingHeight) {
          particle.material.dispose()
          particle.geometry.dispose()
          boom.remove(particle)
          particle = null
        }
      }

      if (boom.children.length <= 0) {
        boom.dispose()
        setBooms(booms.filter((b) => b !== boom))
      }
      particleAmount += boom.children.length
    }
  })

  return <mesh ref={groupRef} />
}

const ConfettiCanvas = () => {
  return (
    <div className='absolute w-full h-auto inset-0 z-[-1] border-t-4 border-secondary'>
      <Canvas camera={{ position: [0, 0, 7.5] }}>
      <color attach="background" args={['#080808']} />
        <Suspense fallback={null}>
          <Confetti isExploding={true} count={50} colors={["#fc5310", "#25fffb"]} areaWidth={5} areaHeight={5} fallingHeight={10} fallingSpeed={10}/>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={0.1} />
        </Suspense>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <EffectComposer>
          <Bloom
            intensity={0.5}
            kernelSize={KernelSize.MEDIUM}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.01}
            mipmapBlur={false}
          />
        </EffectComposer>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default ConfettiCanvas