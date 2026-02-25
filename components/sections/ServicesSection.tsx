"use client"

import { motion } from "framer-motion"
import { 
  Cloud, 
  Smartphone, 
  Bot, 
  Server, 
  Palette, 
  MessageSquare,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "saas",
    title: "SaaS Development",
    description: "Build scalable, multi-tenant SaaS applications with cutting-edge technology stack and robust architecture.",
    icon: Cloud,
    features: ["Multi-tenant Architecture", "Auto-scaling", "API-first Design"],
    gradient: "from-[#6C63FF] to-[#8B5CF6]",
  },
  {
    id: "apps",
    title: "Web & Mobile Apps",
    description: "Create stunning, high-performance web and mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
    features: ["React & Next.js", "iOS & Android", "Progressive Web Apps"],
    gradient: "from-[#00D4FF] to-[#06B6D4]",
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Leverage artificial intelligence and automation to streamline processes and unlock new possibilities.",
    icon: Bot,
    features: ["Machine Learning", "Process Automation", "Predictive Analytics"],
    gradient: "from-[#FFD700] to-[#F59E0B]",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description: "Design and implement secure, scalable cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
    icon: Server,
    features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Serverless"],
    gradient: "from-[#EC4899] to-[#F43F5E]",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Craft beautiful, intuitive interfaces that delight users and drive engagement with your products.",
    icon: Palette,
    features: ["User Research", "Prototyping", "Design Systems"],
    gradient: "from-[#10B981] to-[#14B8A6]",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Get expert guidance on technology strategy, digital transformation, and technical architecture decisions.",
    icon: MessageSquare,
    features: ["Tech Strategy", "Digital Transformation", "Architecture Review"],
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-[#0D0D1A]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#6C63FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl" />
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Solutions That Drive
            <span className="gradient-text"> Results</span>
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full glass rounded-2xl p-6 group card-hover gradient-border">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#A0A0B8] text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#A0A0B8]">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/services#${service.id}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-[#6C63FF] hover:text-[#00D4FF] group/btn"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
