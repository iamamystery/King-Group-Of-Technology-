"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Crown, RefreshCw, Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#0D0D1A] flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
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

        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Something Went Wrong</h1>
        <p className="text-[#A0A0B8] mb-8">
          We apologize for the inconvenience. An unexpected error has occurred. 
          Our team has been notified and is working to fix it.
        </p>

        {error.digest && (
          <p className="text-[#A0A0B8]/50 text-sm mb-8">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="btn-primary rounded-full px-8"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="rounded-full px-8 border-white/20 hover:bg-white/10 text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
