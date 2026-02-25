"use client"

import { useState } from "react"
import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@kinggroup.tech", href: "mailto:contact@kinggroup.tech" },
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Address", value: "Tech Hub, Innovation City, IC 12345", href: "#" },
]

const services = [
  "SaaS Development",
  "Web & Mobile Apps",
  "AI & Automation",
  "Cloud Infrastructure",
  "UI/UX Design",
  "IT Consulting",
  "Other",
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">
              Let's Start a
              <span className="gradient-text"> Conversation</span>
            </h1>
            <p className="text-[#A0A0B8] text-lg max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team and let's 
              discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-[#A0A0B8] mb-8">
                Whether you have a question, want to start a project, or just want to say hello, 
                we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#6C63FF]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#A0A0B8]">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-[#A0A0B8]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-[#A0A0B8]">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
                  
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white">Service Interest</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#13131F] border-white/10">
                          {services.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="text-white hover:bg-white/10 focus:bg-white/10"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary shine-effect rounded-xl py-6 text-base font-semibold"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#6C63FF] mx-auto mb-4" />
              <p className="text-[#A0A0B8]">Interactive Map</p>
              <p className="text-white font-semibold">Tech Hub, Innovation City</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
