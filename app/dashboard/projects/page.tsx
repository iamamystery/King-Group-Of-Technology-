"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Search, Plus, Filter, MoreVertical, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    status: "in_progress",
    progress: 75,
    startDate: "2025-01-15",
    dueDate: "2025-03-15",
    budget: 25000,
    spent: 18750,
  },
  {
    id: "2",
    name: "Mobile App Development",
    description: "iOS and Android app for customer engagement",
    status: "completed",
    progress: 100,
    startDate: "2024-12-01",
    dueDate: "2025-02-20",
    budget: 35000,
    spent: 35000,
  },
  {
    id: "3",
    name: "Website Redesign",
    description: "Modern responsive website with CMS integration",
    status: "under_review",
    progress: 90,
    startDate: "2025-01-20",
    dueDate: "2025-02-28",
    budget: 15000,
    spent: 13500,
  },
  {
    id: "4",
    name: "AI Chatbot Integration",
    description: "Customer support automation with NLP capabilities",
    status: "in_progress",
    progress: 45,
    startDate: "2025-02-01",
    dueDate: "2025-04-01",
    budget: 20000,
    spent: 9000,
  },
]

const statusConfig = {
  in_progress: { label: "In Progress", color: "bg-blue-500/20 text-blue-400" },
  completed: { label: "Completed", color: "bg-green-500/20 text-green-400" },
  under_review: { label: "Under Review", color: "bg-yellow-500/20 text-yellow-400" },
  pending: { label: "Pending", color: "bg-gray-500/20 text-gray-400" },
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
          <p className="text-[#A0A0B8]">Manage and track all your projects</p>
        </div>
        <Link href="/dashboard/projects/new">
          <Button className="btn-primary rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </Link>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0B8]" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
          />
        </div>
        <Button variant="outline" className="border-white/10 hover:bg-white/10 text-white">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Projects", value: "4" },
          { label: "Active", value: "2" },
          { label: "Completed", value: "1" },
          { label: "In Review", value: "1" },
        ].map((stat, index) => (
          <Card key={index} className="glass border-white/5">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-[#A0A0B8] text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Projects List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass border-white/5">
          <CardHeader>
            <CardTitle className="text-white">All Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProjects.map((project) => {
                const status = statusConfig[project.status as keyof typeof statusConfig]
                return (
                  <div
                    key={project.id}
                    className="flex flex-col lg:flex-row lg:items-center justify-between p-4 glass rounded-xl gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-[#6C63FF]" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{project.name}</h3>
                          <p className="text-[#A0A0B8] text-sm">{project.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-[#A0A0B8]">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Due {new Date(project.dueDate).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {Math.ceil((new Date(project.dueDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days left
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* Progress */}
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

                      {/* Budget */}
                      <div className="text-right hidden sm:block">
                        <p className="text-white font-medium">${project.spent.toLocaleString()}</p>
                        <p className="text-[#A0A0B8] text-xs">of ${project.budget.toLocaleString()}</p>
                      </div>

                      {/* Status */}
                      <Badge className={status.color}>{status.label}</Badge>

                      {/* Actions */}
                      <Button variant="ghost" size="icon" className="text-[#A0A0B8] hover:text-white">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
