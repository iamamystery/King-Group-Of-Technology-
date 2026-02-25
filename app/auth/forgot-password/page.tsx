"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Crown, Mail, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#0D0D1A] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-12 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Check Your Email</h2>
          <p className="text-[#A0A0B8] mb-8">
            We've sent a password reset link to <span className="text-white">{email}</span>. 
            Please check your inbox and follow the instructions.
          </p>
          <Link href="/auth/login">
            <Button className="btn-primary rounded-full px-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Login
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0D1A] flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00D4FF]/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Crown className="w-10 h-10 text-[#FFD700]" />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-['Space_Grotesk'] text-white">King Group</span>
              <span className="text-xs text-[#A0A0B8]">of Technology</span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="glass gradient-border rounded-2xl p-8 glow-purple">
          <h1 className="text-2xl font-bold text-white text-center mb-2">Reset Password</h1>
          <p className="text-[#A0A0B8] text-center mb-8">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0B8]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary shine-effect rounded-xl py-6 text-base font-semibold"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Send Reset Link
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-[#A0A0B8] mt-8">
            Remember your password?{" "}
            <Link href="/auth/login" className="text-[#6C63FF] hover:text-[#00D4FF] transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
