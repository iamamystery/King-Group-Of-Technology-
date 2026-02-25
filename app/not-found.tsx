"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Crown, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0D0D1A] flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass gradient-border rounded-3xl p-12 text-center max-w-lg w-full relative z-10"
      >
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Crown className="w-10 h-10 text-[#FFD700]" />
          <div className="flex flex-col">
            <span className="text-xl font-bold font-['Space_Grotesk'] text-white">King Group</span>
            <span className="text-xs text-[#A0A0B8]">of Technology</span>
          </div>
        </Link>

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-8xl font-bold font-['Space_Grotesk'] gradient-text">404</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-[#A0A0B8] mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="btn-primary rounded-full px-8">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="rounded-full px-8 border-white/20 hover:bg-white/10 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
