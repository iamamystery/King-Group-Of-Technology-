"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Crown,
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  User,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Projects", href: "/dashboard/projects" },
  { icon: FileText, label: "Invoices", href: "/dashboard/invoices" },
  { icon: MessageSquare, label: "Support", href: "/dashboard/support" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 glass-strong border-r border-white/5 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/5">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Crown className="w-8 h-8 text-[#FFD700]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold font-['Space_Grotesk'] text-white">Client Portal</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 h-[calc(100vh-140px)]">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white"
                      : "text-[#A0A0B8] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5 bg-[#0A0A0F]/50">
          <Link href="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#A0A0B8] hover:text-white">
              <Settings className="w-5 h-5" />
              Settings
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-3 text-[#A0A0B8] hover:text-red-400">
              <LogOut className="w-5 h-5" />
              Sign Out
            </Button>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 glass-strong border-b border-white/5 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-semibold text-white hidden sm:block">
              Welcome back, John!
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative text-[#A0A0B8] hover:text-white">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#6C63FF] text-white text-xs">
                3
              </Badge>
            </Button>

            {/* Profile */}
            <Link href="/dashboard/profile">
              <Avatar className="w-9 h-9 ring-2 ring-[#6C63FF]">
                <AvatarFallback className="bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] text-white text-sm font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
