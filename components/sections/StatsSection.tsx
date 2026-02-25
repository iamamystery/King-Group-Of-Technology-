"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Users, Clock, Award } from "lucide-react"

const stats = [
  { id: "1", value: 250, suffix: "+", label: "Projects Delivered", icon: Briefcase },
  { id: "2", value: 150, suffix: "+", label: "Happy Clients", icon: Users },
  { id: "3", value: 50, suffix: "+", label: "Team Members", icon: Award },
  { id: "4", value: 8, suffix: "+", label: "Years of Excellence", icon: Clock },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 text-center card-hover">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-[#6C63FF]" />
                </div>
                
                {/* Value */}
                <div className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <p className="text-[#A0A0B8] text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
