"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "KGT transformed our vision into reality. Their team's expertise in SaaS development is unmatched, and they delivered our platform ahead of schedule.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    content: "Working with KGT was a game-changer for our digital transformation. Their attention to detail and technical excellence exceeded our expectations.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Ventures",
    content: "The mobile app they developed for us has received incredible user feedback. Their design team truly understands user experience.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Founder",
    company: "NextGen Solutions",
    content: "From concept to launch, King Group provided exceptional support. Their AI solutions have helped us automate key processes and scale efficiently.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#0D0D1A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            What Our
            <span className="gradient-text"> Clients</span> Say
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-8 h-full card-hover">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#6C63FF]/30 mb-4" />

                {/* Content */}
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#00D4FF]">
                    <AvatarFallback className="bg-transparent text-white font-semibold">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-[#A0A0B8] text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
