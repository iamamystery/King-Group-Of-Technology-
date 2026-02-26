"use client"

import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { motion } from "framer-motion"
import { Crown, Target, Eye, Heart, Lightbulb, Users, Rocket, Award } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const milestones = [
  { year: "2017", title: "Company Founded", description: "KGT was established by Muhammad Jawad with a vision to transform digital landscapes." },
  { year: "2018", title: "First Major Client", description: "Secured our first enterprise client and delivered a groundbreaking SaaS platform." },
  { year: "2019", title: "Team Expansion", description: "Grew to 20+ team members and opened our second office location." },
  { year: "2020", title: "Global Reach", description: "Expanded services internationally with clients across 5 continents." },
  { year: "2021", title: "Innovation Award", description: "Received the Tech Innovation Award for our AI-powered solutions." },
  { year: "2022", title: "100+ Projects", description: "Successfully delivered our 100th project with 98% client satisfaction." },
  { year: "2023", title: "New Leadership", description: "Syed Muhammad Awais joined as Co-Founder & President, driving strategic growth." },
  { year: "2025", title: "Industry Leader", description: "Recognized as a top-tier technology solutions provider globally." },
]

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We constantly push boundaries and embrace cutting-edge technologies." },
  { icon: Heart, title: "Passion", description: "We love what we do, and it shows in every project we deliver." },
  { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and client partnerships." },
  { icon: Award, title: "Excellence", description: "We settle for nothing less than exceptional quality in everything." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Building the Future of
              <span className="gradient-text"> Technology</span>
            </h1>
            <p className="text-[#A0A0B8] text-lg max-w-3xl mx-auto">
              King Group of Technology is a premier technology company dedicated to delivering 
              world-class digital solutions that empower businesses to thrive in the modern era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-[#A0A0B8] leading-relaxed">
                To deliver world-class technology solutions that empower businesses to grow, 
                scale, and dominate their industries. We strive to be the trusted partner that 
                transforms ambitious visions into digital reality through innovation, excellence, 
                and unwavering commitment to quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#0A0A0F]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-[#A0A0B8] leading-relaxed">
                To be the global leader in technology innovation, recognized for transforming 
                businesses through cutting-edge solutions. We envision a world where technology 
                seamlessly empowers every organization to achieve its fullest potential and 
                create meaningful impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-[#A0A0B8]">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#6C63FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-[#A0A0B8] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#FFD700] mb-4">
              <Crown className="w-4 h-4" />
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Meet Our <span className="gradient-text-gold">Visionaries</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Muhammad Jawad", role: "CEO & Founder", initials: "MJ" },
              { name: "Syed Muhammad Awais", role: "Co-Founder & President", initials: "SA" },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 text-center glow-gold relative"
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-[#FFD700]/50 pointer-events-none" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A0A0F] text-sm font-semibold flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Founder
                  </div>
                </div>
                <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-[#FFD700]">
                  <AvatarFallback className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#0A0A0F] text-2xl font-bold">
                    {leader.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                <p className="text-[#FFD700] font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-[#A0A0B8]">Milestones that mark our growth and success</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#6C63FF] to-[#00D4FF]/30 mt-2" />
                  )}
                </div>
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="text-[#6C63FF] font-semibold mb-1">{milestone.year}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-[#A0A0B8] text-sm">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
