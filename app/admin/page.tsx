"use client"

import { motion } from "framer-motion"
import { Users, Briefcase, DollarSign, TrendingUp, Crown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const adminStats = [
  { title: "Total Clients", value: "150", icon: Users, change: "+12 this month", color: "from-[#6C63FF] to-[#8B5CF6]" },
  { title: "Active Projects", value: "42", icon: Briefcase, change: "+8 this month", color: "from-[#00D4FF] to-[#06B6D4]" },
  { title: "Monthly Revenue", value: "$84,500", icon: DollarSign, change: "+15% from last month", color: "from-[#FFD700] to-[#F59E0B]" },
  { title: "Growth Rate", value: "24%", icon: TrendingUp, change: "YTD performance", color: "from-[#10B981] to-[#14B8A6]" },
]

const quickLinks = [
  { title: "Manage Clients", href: "/admin/clients", desc: "View and manage all clients" },
  { title: "Manage Projects", href: "/admin/projects", desc: "Track and update projects" },
  { title: "Invoices", href: "/admin/invoices", desc: "Create and manage invoices" },
  { title: "Support Tickets", href: "/admin/support", desc: "Handle customer support" },
]

const recentActivity = [
  { action: "New client registered", user: "TechCorp Inc.", time: "2 hours ago" },
  { action: "Project completed", user: "E-Commerce Platform", time: "5 hours ago" },
  { action: "Invoice paid", user: "INV-2025-002 ($12,000)", time: "1 day ago" },
  { action: "New support ticket", user: "API Integration Issue", time: "1 day ago" },
]

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Header */}
      <header className="h-16 glass-strong border-b border-white/5 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <Crown className="w-8 h-8 text-[#FFD700]" />
          <span className="text-xl font-bold font-['Space_Grotesk'] text-white">Admin Panel</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#A0A0B8]">Welcome, Muhammad</span>
          <Link href="/">
            <button className="text-[#A0A0B8] hover:text-white transition-colors">
              Sign Out
            </button>
          </Link>
        </div>
      </header>

      <main className="p-4 lg:p-8 space-y-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-[#A0A0B8]">Monitor your business metrics and activities</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adminStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass border-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#A0A0B8] text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <p className="text-green-400 text-xs mt-1">{stat.change}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div className="p-4 glass rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-white font-medium mb-1">{link.title}</h3>
                        <p className="text-[#A0A0B8] text-xs">{link.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 glass rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-[#6C63FF] mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.action}</p>
                        <p className="text-[#A0A0B8] text-xs">{activity.user}</p>
                      </div>
                      <span className="text-[#A0A0B8] text-xs flex-shrink-0">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
