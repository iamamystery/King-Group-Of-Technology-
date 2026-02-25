"use client"

import { motion } from "framer-motion"
import { Briefcase, FileText, MessageSquare, Clock, TrendingUp, DollarSign, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const stats = [
  { title: "Active Projects", value: "4", icon: Briefcase, change: "+1 this month", positive: true },
  { title: "Total Invoices", value: "12", icon: FileText, change: "$24,500 total", positive: true },
  { title: "Support Tickets", value: "2", icon: MessageSquare, change: "1 resolved", positive: true },
  { title: "Hours Tracked", value: "156", icon: Clock, change: "This month", positive: true },
]

const recentProjects = [
  { id: "1", name: "E-Commerce Platform", status: "in_progress", progress: 75, dueDate: "Mar 15, 2025" },
  { id: "2", name: "Mobile App Development", status: "completed", progress: 100, dueDate: "Feb 20, 2025" },
  { id: "3", name: "Website Redesign", status: "under_review", progress: 90, dueDate: "Feb 28, 2025" },
]

const recentInvoices = [
  { id: "1", number: "INV-2025-001", amount: 8500, status: "paid", date: "Feb 15, 2025" },
  { id: "2", number: "INV-2025-002", amount: 12000, status: "pending", date: "Feb 20, 2025" },
  { id: "3", number: "INV-2025-003", amount: 4500, status: "paid", date: "Jan 30, 2025" },
]

const quickActions = [
  { label: "New Project Request", href: "/dashboard/projects/new", icon: Briefcase },
  { label: "View Invoices", href: "/dashboard/invoices", icon: FileText },
  { label: "Submit Ticket", href: "/dashboard/support/new", icon: MessageSquare },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-[#A0A0B8]">Here's what's happening with your projects</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
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
                    <p className={`text-xs mt-1 ${stat.positive ? "text-green-400" : "text-red-400"}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#6C63FF]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="glass border-white/5">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white">Active Projects</CardTitle>
              <Link href="/dashboard/projects">
                <Button variant="ghost" className="text-[#6C63FF] hover:text-[#00D4FF]">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 glass rounded-xl"
                  >
                    <div>
                      <h3 className="text-white font-medium">{project.name}</h3>
                      <p className="text-[#A0A0B8] text-sm">Due: {project.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <div className="flex justify-between text-xs text-[#A0A0B8] mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <Badge
                        className={`${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : project.status === "in_progress"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action) => (
                  <Link key={action.label} href={action.href}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-3 border-white/10 hover:bg-white/10 text-white"
                    >
                      <action.icon className="w-4 h-4" />
                      {action.label}
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Invoices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="glass border-white/5">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Recent Invoices</CardTitle>
                <Link href="/dashboard/invoices">
                  <Button variant="ghost" className="text-[#6C63FF] hover:text-[#00D4FF]">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentInvoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between p-3 glass rounded-lg"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">{invoice.number}</p>
                        <p className="text-[#A0A0B8] text-xs">{invoice.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-medium">
                          ${invoice.amount.toLocaleString()}
                        </span>
                        <Badge
                          className={`${
                            invoice.status === "paid"
                              ? "bg-green-500/20 text-green-400"
                              : invoice.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 glass rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">Project milestone completed</p>
                      <p className="text-[#A0A0B8] text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">Invoice payment due</p>
                      <p className="text-[#A0A0B8] text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg">
                    <TrendingUp className="w-5 h-5 text-[#6C63FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-sm">New project quote received</p>
                      <p className="text-[#A0A0B8] text-xs">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
