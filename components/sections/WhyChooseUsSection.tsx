"use client"

import { motion } from "framer-motion"
import { Check, Zap, Shield, Users, Clock, Award } from "lucide-react"

const features = [
  { icon: Zap, text: "Rapid development with agile methodologies" },
  { icon: Shield, text: "Enterprise-grade security & compliance" },
  { icon: Users, text: "Dedicated team of expert developers" },
  { icon: Clock, text: "24/7 support & maintenance" },
  { icon: Award, text: "Award-winning design & development" },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-6 leading-tight">
              We Build Technology That
              <span className="gradient-text"> Transforms</span> Businesses
            </h2>
            <p className="text-[#A0A0B8] text-lg mb-8 leading-relaxed">
              With years of experience and a passion for innovation, we deliver solutions 
              that not only meet but exceed expectations. Our commitment to excellence 
              has made us the trusted partner for businesses worldwide.
            </p>
            
            {/* Stats Row */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">98%</div>
                <div className="text-sm text-[#A0A0B8]">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">250+</div>
                <div className="text-sm text-[#A0A0B8]">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-1">8+</div>
                <div className="text-sm text-[#A0A0B8]">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 glass rounded-xl group hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium">{feature.text}</span>
                <Check className="w-5 h-5 text-[#00D4FF] ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
