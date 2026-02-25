"use client"

import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { PricingSection } from "@/components/sections/PricingSection"
import { motion } from "framer-motion"
import { Check, X, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const plans = [
  { name: "Starter", id: "starter" },
  { name: "Professional", id: "professional", popular: true },
  { name: "Enterprise", id: "enterprise" },
]

const features = [
  { name: "Custom Website Development", starter: true, professional: true, enterprise: true },
  { name: "Mobile Responsive Design", starter: true, professional: true, enterprise: true },
  { name: "Basic SEO Setup", starter: true, professional: true, enterprise: true },
  { name: "Contact Forms", starter: true, professional: true, enterprise: true },
  { name: "Custom Web Application", starter: false, professional: true, enterprise: true },
  { name: "User Authentication System", starter: false, professional: true, enterprise: true },
  { name: "Database Integration", starter: false, professional: true, enterprise: true },
  { name: "API Development", starter: false, professional: true, enterprise: true },
  { name: "Advanced Analytics", starter: false, professional: true, enterprise: true },
  { name: "Priority Support", starter: false, professional: true, enterprise: true },
  { name: "Full-Stack SaaS Platform", starter: false, professional: false, enterprise: true },
  { name: "Multi-tenant Architecture", starter: false, professional: false, enterprise: true },
  { name: "Advanced Security Features", starter: false, professional: false, enterprise: true },
  { name: "Third-party Integrations", starter: false, professional: false, enterprise: true },
  { name: "Dedicated Project Manager", starter: false, professional: false, enterprise: true },
  { name: "24/7 Premium Support", starter: false, professional: false, enterprise: true },
  { name: "Custom SLA", starter: false, professional: false, enterprise: true },
]

export default function PricingPage() {
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
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Simple, Transparent
              <span className="gradient-text"> Pricing</span>
            </h1>
            <p className="text-[#A0A0B8] text-lg max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our 
              premium quality guarantee and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Comparison Table */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-[#A0A0B8]">Compare plans to find the perfect fit</p>
          </motion.div>

          <TooltipProvider>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10 bg-white/5">
                <div className="text-white font-semibold">Features</div>
                {plans.map((plan) => (
                  <div key={plan.id} className={`text-center font-semibold ${plan.popular ? "text-[#6C63FF]" : "text-white"}`}>
                    {plan.name}
                    {plan.popular && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-[#6C63FF]/20 text-[#6C63FF] text-xs">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="divide-y divide-white/5">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-4 gap-4 p-4 ${index % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <div className="flex items-center gap-2 text-[#A0A0B8]">
                      {feature.name}
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="w-4 h-4 text-[#6C63FF]/50" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Learn more about {feature.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="flex justify-center items-center">
                      {feature.starter ? (
                        <Check className="w-5 h-5 text-[#00D4FF]" />
                      ) : (
                        <X className="w-5 h-5 text-[#A0A0B8]/30" />
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      {feature.professional ? (
                        <Check className="w-5 h-5 text-[#00D4FF]" />
                      ) : (
                        <X className="w-5 h-5 text-[#A0A0B8]/30" />
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      {feature.enterprise ? (
                        <Check className="w-5 h-5 text-[#00D4FF]" />
                      ) : (
                        <X className="w-5 h-5 text-[#A0A0B8]/30" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Row */}
              <div className="grid grid-cols-4 gap-4 p-6 border-t border-white/10 bg-white/5">
                <div></div>
                {plans.map((plan) => (
                  <div key={plan.id} className="flex justify-center">
                    <Link href={`/contact?plan=${plan.id}`}>
                      <Button
                        className={`rounded-full ${
                          plan.popular
                            ? "btn-primary"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                      >
                        {plan.id === "enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </TooltipProvider>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at the next billing cycle." },
              { q: "Is there a setup fee?", a: "No, there are no hidden fees or setup charges. You only pay the monthly or annual subscription fee." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and PayPal. Enterprise clients can also arrange for invoice-based billing." },
              { q: "Do you offer refunds?", a: "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact us for a full refund." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#A0A0B8] text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
