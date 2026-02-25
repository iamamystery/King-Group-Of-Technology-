"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.05
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6C63FF"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function FloatingOrb() {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * 0.2
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
  })

  return (
    <mesh ref={ref} position={[3, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#6C63FF"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6C63FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D4FF" />
      <ParticleField />
      <FloatingOrb />
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D1A]">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1A] via-transparent to-[#0D0D1A] z-10" />
      
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6C63FF]/10 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-sm text-[#A0A0B8]">Leading Technology Innovators</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] mb-6 leading-tight"
          >
            Innovating the Future,
            <br />
            <span className="gradient-text">One Solution at a Time</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#A0A0B8] max-w-2xl mx-auto mb-10"
          >
            World-class SaaS development, AI solutions, and digital transformation 
            services that empower businesses to grow, scale, and dominate their industries.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/auth/register">
              <Button className="btn-primary shine-effect rounded-full px-8 py-6 text-base font-semibold group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Shield, label: "Enterprise Security" },
              { icon: Zap, label: "99.9% Uptime" },
              { icon: CheckCircle2, label: "Trusted Worldwide" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              >
                <badge.icon className="w-4 h-4 text-[#6C63FF]" />
                <span className="text-sm text-[#A0A0B8]">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
