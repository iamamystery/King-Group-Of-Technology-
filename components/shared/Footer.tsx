"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "SaaS Development", href: "/services#saas" },
    { label: "Web & Mobile Apps", href: "/services#apps" },
    { label: "AI Solutions", href: "/services#ai" },
    { label: "Cloud Infrastructure", href: "/services#cloud" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Help Center", href: "/help" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logokgt.png"
                  alt="KGT Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-['Space_Grotesk'] text-white">
                  KGT
                </span>
              </div>
            </Link>
            <p className="text-[#A0A0B8] text-sm mb-6 max-w-xs">
              Innovating the Future, One Solution at a Time. World-class technology solutions for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@kinggroup.tech" className="flex items-center gap-3 text-[#A0A0B8] hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4 text-[#6C63FF]" />
                contact@kinggroup.tech
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-[#A0A0B8] hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4 text-[#6C63FF]" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-[#A0A0B8] text-sm">
                <MapPin className="w-4 h-4 text-[#6C63FF]" />
                Tech Hub, Innovation City
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-[#A0A0B8] hover:text-white hover:bg-[#6C63FF]/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#A0A0B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#A0A0B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#A0A0B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#A0A0B8] hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A0B8] text-sm">
            &copy; {new Date().getFullYear()} KGT. All rights reserved.
          </p>
          <p className="text-[#A0A0B8] text-sm flex items-center gap-1">
            Crafted with <span className="text-[#6C63FF]">♥</span> by Muhammad Jawad & Syed Muhammad Awais
          </p>
        </div>
      </div>
    </footer>
  )
}
