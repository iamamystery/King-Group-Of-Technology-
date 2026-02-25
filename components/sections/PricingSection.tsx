"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      "Custom Website (5 pages)",
      "Basic SEO Setup",
      "Mobile Responsive",
      "Contact Form Integration",
      "2 Revision Rounds",
      "1 Month Support",
    ],
    isPopular: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    features: [
      "Everything in Starter",
      "Custom Web Application",
      "User Authentication System",
      "Database Integration",
      "API Development",
      "Advanced SEO & Analytics",
      "5 Revision Rounds",
      "3 Months Support",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale digital transformation",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Everything in Professional",
      "Full-Stack SaaS Development",
      "Multi-tenant Architecture",
      "Advanced Security Features",
      "Third-party Integrations",
      "Dedicated Project Manager",
      "24/7 Premium Support",
      "Custom SLA",
      "Unlimited Revisions",
    ],
    isPopular: false,
    isEnterprise: true,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="relative py-24 bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Transparent Pricing for
            <span className="gradient-text"> Every</span> Business
          </h2>
          <p className="text-[#A0A0B8] text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our premium quality guarantee.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm ${!isYearly ? "text-white" : "text-[#A0A0B8]"}`}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-[#6C63FF]"
          />
          <span className={`text-sm ${isYearly ? "text-white" : "text-[#A0A0B8]"}`}>
            Yearly
          </span>
          <span className="px-3 py-1 rounded-full bg-[#6C63FF]/20 text-[#6C63FF] text-xs font-medium">
            Save 20%
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.isPopular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 ${
                  plan.isPopular
                    ? "glass gradient-border glow-purple"
                    : "glass"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#A0A0B8] text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  {plan.isEnterprise ? (
                    <div className="text-4xl font-bold text-white">Custom</div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-[#A0A0B8]">/month</span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-[#6C63FF] mt-1">
                          Billed annually
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#6C63FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#6C63FF]" />
                      </div>
                      <span className="text-[#A0A0B8] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/contact?plan=${plan.id}`}>
                  <Button
                    className={`w-full rounded-xl py-6 font-semibold ${
                      plan.isPopular
                        ? "btn-primary"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {plan.isEnterprise ? "Contact Sales" : "Get Started"}
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
