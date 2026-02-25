"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "1",
    question: "What services does King Group of Technology offer?",
    answer: "We offer comprehensive technology solutions including SaaS development, web and mobile app development, AI & automation solutions, cloud infrastructure services, UI/UX design, and IT consulting. Our team of experts can handle everything from ideation to deployment and maintenance.",
  },
  {
    id: "2",
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex SaaS platform could take 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project requirements.",
  },
  {
    id: "3",
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Next.js, TypeScript, Node.js, Python, AWS/Azure/GCP, and various AI/ML frameworks. We choose the best tech stack based on your specific project needs and long-term goals.",
  },
  {
    id: "4",
    question: "Do you provide ongoing support after project completion?",
    answer: "Absolutely! We offer comprehensive maintenance and support packages including 24/7 monitoring, bug fixes, security updates, and feature enhancements. We believe in building long-term partnerships with our clients.",
  },
  {
    id: "5",
    question: "How do you ensure project security and confidentiality?",
    answer: "We implement enterprise-grade security measures including encrypted communications, secure development practices, NDAs, and strict access controls. We're committed to protecting your intellectual property and sensitive data.",
  },
  {
    id: "6",
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including fixed-price projects, time-and-materials, and retainer arrangements. Our pricing is transparent and based on project scope, complexity, and timeline. Contact us for a custom quote.",
  },
]

export function FAQSection() {
  return (
    <section className="relative py-24 bg-[#0D0D1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-[#6C63FF] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-[#A0A0B8] text-lg">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="glass rounded-xl border-none px-6 data-[state=open]:glow-purple"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#6C63FF] hover:no-underline py-4">
                  <span className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#A0A0B8] pb-4 pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
