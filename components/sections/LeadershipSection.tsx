"use client"

import { motion } from "framer-motion"
import { Crown, Linkedin, Twitter } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

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
    <section className="relative py-24 bg-[#0A0A0F]">
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
            <span className="gradient-text-gold"> Visionaries</span>
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
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
              <div
                className={`relative glass rounded-2xl p-8 text-center card-hover ${
                  leader.isGold ? "glow-gold" : ""
                }`}
              >
                {/* Gold Border for Leadership */}
                {leader.isGold && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#FFD700]/50 pointer-events-none" />
                )}

                {/* Role Badge */}
                {leader.isGold && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#0A0A0F] text-sm font-semibold flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      Founder
                    </div>
                  </div>
                )}

                {/* Avatar */}
                <Avatar className="w-24 h-24 mx-auto mb-6 ring-4 ring-offset-4 ring-offset-[#0A0A0F] ring-[#FFD700]">
                  <AvatarFallback className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#0A0A0F] text-2xl font-bold">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Info */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {leader.name}
                </h3>
                <p className="text-[#FFD700] font-medium mb-4">{leader.role}</p>
                <p className="text-[#A0A0B8] mb-6">{leader.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#0077B5]/50 hover:bg-[#0077B5]/20 hover:border-[#0077B5]"
                    asChild
                  >
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]"
                    asChild
                  >
                    <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
