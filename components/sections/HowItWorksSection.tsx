"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, challenges, and vision. Our team conducts thorough research to craft a tailored strategy.",
    color: "#6C63FF",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Design & Development",
    description: "Our expert designers and developers bring your vision to life with cutting-edge technology and stunning user experiences.",
    color: "#00D4FF",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support, maintenance, and optimization to keep your solution running perfectly.",
    color: "#FFD700",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            How We Bring Your
            <span className="gradient-text"> Vision</span> to Life
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
            A proven 3-step process that ensures your project is delivered on time, 
            within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#6C63FF]/30 to-[#00D4FF]/30" />
              )}

              <div className="glass rounded-2xl p-8 text-center relative z-10 h-full">
                {/* Number Badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 text-white font-bold"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#A0A0B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
