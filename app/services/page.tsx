"use client"

import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { motion } from "framer-motion"
import { Cloud, Smartphone, Bot, Server, Palette, MessageSquare, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "saas",
    title: "SaaS Development",
    description: "Build scalable, multi-tenant SaaS applications with cutting-edge technology stack and robust architecture.",
    icon: Cloud,
    features: [
      "Multi-tenant architecture with isolated data environments",
      "Auto-scaling infrastructure for handling traffic spikes",
      "API-first design with comprehensive documentation",
      "White-label solutions for resellers",
      "Subscription management & billing integration",
      "Advanced analytics dashboard",
    ],
    benefits: ["Faster time-to-market", "Lower operational costs", "Scalable growth"],
    gradient: "from-[#6C63FF] to-[#8B5CF6]",
  },
  {
    id: "apps",
    title: "Web & Mobile App Development",
    description: "Create stunning, high-performance web and mobile applications that deliver exceptional user experiences.",
    icon: Smartphone,
    features: [
      "Progressive Web Apps (PWA) with offline capabilities",
      "Native iOS & Android development",
      "React Native cross-platform solutions",
      "Real-time data synchronization",
      "Push notifications & deep linking",
      "App store optimization & deployment",
    ],
    benefits: ["Native performance", "Cross-platform reach", "Engaging UX"],
    gradient: "from-[#00D4FF] to-[#06B6D4]",
  },
  {
    id: "ai",
    title: "AI & Automation Solutions",
    description: "Leverage artificial intelligence and automation to streamline processes and unlock new possibilities.",
    icon: Bot,
    features: [
      "Machine Learning model development & training",
      "Natural Language Processing (NLP) solutions",
      "Computer Vision & image recognition",
      "Predictive analytics & forecasting",
      "Process automation & RPA",
      "Chatbots & conversational AI",
    ],
    benefits: ["Increased efficiency", "Data-driven insights", "Competitive advantage"],
    gradient: "from-[#FFD700] to-[#F59E0B]",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    description: "Design and implement secure, scalable cloud infrastructure on AWS, Azure, or Google Cloud Platform.",
    icon: Server,
    features: [
      "Cloud architecture design & migration",
      "Kubernetes & container orchestration",
      "Serverless computing solutions",
      "DevOps & CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "24/7 monitoring & support",
    ],
    benefits: ["99.9% uptime", "Cost optimization", "Enterprise security"],
    gradient: "from-[#EC4899] to-[#F43F5E]",
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "Craft beautiful, intuitive interfaces that delight users and drive engagement with your products.",
    icon: Palette,
    features: [
      "User research & persona development",
      "Wireframing & interactive prototyping",
      "Visual design & brand identity",
      "Design systems & component libraries",
      "Usability testing & optimization",
      "Accessibility compliance (WCAG)",
    ],
    benefits: ["Higher conversions", "Better retention", "Stronger brand"],
    gradient: "from-[#10B981] to-[#14B8A6]",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Get expert guidance on technology strategy, digital transformation, and technical architecture decisions.",
    icon: MessageSquare,
    features: [
      "Technology strategy & roadmap planning",
      "Digital transformation consulting",
      "Architecture review & optimization",
      "Security audits & compliance",
      "Team training & knowledge transfer",
      "CTO-as-a-Service",
    ],
    benefits: ["Strategic direction", "Risk mitigation", "Expert guidance"],
    gradient: "from-[#6366F1] to-[#8B5CF6]",
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Comprehensive
              <span className="gradient-text"> Solutions</span>
            </h1>
            <p className="text-[#A0A0B8] text-lg max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end technology solutions 
              tailored to your unique business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-[#A0A0B8] text-lg mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#A0A0B8]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full glass text-sm text-white"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="btn-primary rounded-full group">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`glass rounded-3xl p-8 gradient-border h-80 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-4`}>
                        <service.icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-[#A0A0B8]">{service.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass gradient-border rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-[#A0A0B8] mb-8">
              Let's discuss your unique requirements and create a tailored approach for your business.
            </p>
            <Link href="/contact">
              <Button className="btn-primary shine-effect rounded-full px-8 py-6 text-lg font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
