"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-24 bg-[#0A0A0F] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#6C63FF]/20 to-[#00D4FF]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass gradient-border rounded-3xl p-12 md:p-16 text-center glow-purple"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6C63FF]/20 to-[#00D4FF]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm font-medium text-white">Start Your Journey Today</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white mb-6 leading-tight"
          >
            Ready to Transform Your
            <br />
            <span className="gradient-text">Digital Presence?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#A0A0B8] text-lg max-w-2xl mx-auto mb-10"
          >
            Let's collaborate to build something extraordinary. Our team is ready to bring your vision to life with cutting-edge technology and premium quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button className="btn-primary shine-effect rounded-full px-10 py-7 text-lg font-semibold group">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="rounded-full px-10 py-7 text-lg font-semibold border-white/20 hover:bg-white/10 text-white"
              >
                View Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[#A0A0B8] text-sm mt-8"
          >
            Trusted by 150+ businesses worldwide • Free consultation • No commitment required
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
