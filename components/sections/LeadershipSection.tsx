"use client"

import { motion } from "framer-motion"
import { Crown, Linkedin, Twitter } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const leaders = [
  {
    id: "1",
    name: "Muhammad Jawad",
    role: "CEO & Founder",
    bio: "Visionary technology leader with a passion for innovation and building world-class digital solutions.",
    isGold: true,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    id: "2",
    name: "Syed Muhammad Awais",
    role: "Co-Founder & President",
    bio: "Strategic leader driving business growth and operational excellence across all divisions.",
    isGold: true,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
]

export function LeadershipSection() {
  return (
    <section className="relative py-24 bg-[#0A0800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#FFD700] mb-4">
            <Crown className="w-4 h-4 inline mr-2" />
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Meet Our
            <span className="gradient-text"> Visionaries</span>
          </h2>
          <p className="text-[#C9A84C] text-lg max-w-2xl mx-auto">
            Guided by visionary leaders committed to transforming the digital landscape.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-leadership p-8 text-center glow-gold">
                {/* Crown Icon */}
                <div className="flex justify-center mb-4">
                  <Crown className="w-8 h-8 text-[#FFD700] crown-glow" />
                </div>

                {/* Role Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#0A0800] text-sm font-bold flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Founder
                  </div>
                </div>

                {/* Avatar */}
                <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-offset-4 ring-offset-[#0A0800] ring-[#FFD700]">
                  <AvatarFallback className="bg-gradient-to-br from-[#FFD700] to-[#FFC000] text-[#0A0800] text-2xl font-bold">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Info */}
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  {leader.name}
                </h3>
                <p className="text-[#FFD700] font-medium mb-4">{leader.role}</p>
                <p className="text-[#C9A84C] mb-6">{leader.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <button
                    className="rounded-full w-10 h-10 border border-[#FFD700]/30 hover:bg-[#FFD700]/10 flex items-center justify-center transition-all"
                    onClick={() => window.open(leader.linkedin, '_blank')}
                  >
                    <Linkedin className="w-5 h-5 text-[#FFD700]" />
                  </button>
                  <button
                    className="rounded-full w-10 h-10 border border-[#FFD700]/30 hover:bg-[#FFD700]/10 flex items-center justify-center transition-all"
                    onClick={() => window.open(leader.twitter, '_blank')}
                  >
                    <Twitter className="w-5 h-5 text-[#FFD700]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
