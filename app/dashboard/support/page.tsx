"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Plus, Search, Clock, AlertCircle, CheckCircle2, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const tickets = [
  {
    id: "1",
    title: "API Integration Issue",
    description: "Getting 500 errors when calling the payment endpoint",
    status: "open",
    priority: "high",
    createdAt: "2025-02-20",
    updatedAt: "2025-02-21",
    replies: 2,
  },
  {
    id: "2",
    title: "Feature Request: Dark Mode",
    description: "Would like to have a dark mode option for the dashboard",
    status: "in_progress",
    priority: "low",
    createdAt: "2025-02-18",
    updatedAt: "2025-02-19",
    replies: 1,
  },
  {
    id: "3",
    title: "Login Page Bug",
    description: "Users reporting being logged out unexpectedly",
    status: "resolved",
    priority: "medium",
    createdAt: "2025-02-15",
    updatedAt: "2025-02-17",
    replies: 5,
  },
]

const statusConfig = {
  open: { label: "Open", color: "bg-blue-500/20 text-blue-400", icon: MessageSquare },
  in_progress: { label: "In Progress", color: "bg-yellow-500/20 text-yellow-400", icon: Clock },
  resolved: { label: "Resolved", color: "bg-green-500/20 text-green-400", icon: CheckCircle2 },
}

const priorityConfig = {
  low: { label: "Low", color: "bg-gray-500/20 text-gray-400" },
  medium: { label: "Medium", color: "bg-yellow-500/20 text-yellow-400" },
  high: { label: "High", color: "bg-red-500/20 text-red-400" },
  urgent: { label: "Urgent", color: "bg-red-600/20 text-red-500" },
}

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isNewTicketOpen, setIsNewTicketOpen] = useState(false)

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
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
          <h1 className="text-3xl font-bold text-white mb-2">Support Tickets</h1>
          <p className="text-[#A0A0B8]">Submit and track your support requests</p>
        </div>
        <Dialog open={isNewTicketOpen} onOpenChange={setIsNewTicketOpen}>
          <DialogTrigger asChild>
            <Button className="btn-primary rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-white/10 bg-[#0A0A0F]">
            <DialogHeader>
              <DialogTitle className="text-white">Submit New Ticket</DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-white">Title</Label>
                <Input
                  placeholder="Brief description of the issue"
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Priority</Label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#13131F] border-white/10">
                    <SelectItem value="low" className="text-white">Low</SelectItem>
                    <SelectItem value="medium" className="text-white">Medium</SelectItem>
                    <SelectItem value="high" className="text-white">High</SelectItem>
                    <SelectItem value="urgent" className="text-white">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-white">Description</Label>
                <Textarea
                  placeholder="Detailed description of your issue..."
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50 resize-none"
                />
              </div>
              <Button
                type="button"
                onClick={() => setIsNewTicketOpen(false)}
                className="w-full btn-primary rounded-xl"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { label: "Total Tickets", value: "3", icon: MessageSquare },
          { label: "Open", value: "1", icon: AlertCircle, color: "text-blue-400" },
          { label: "In Progress", value: "1", icon: Clock, color: "text-yellow-400" },
          { label: "Resolved", value: "1", icon: CheckCircle2, color: "text-green-400" },
        ].map((stat, index) => (
          <Card key={index} className="glass border-white/5">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${stat.color || ""}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-[#A0A0B8] text-sm">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0B8]" />
        <Input
          placeholder="Search tickets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
        />
      </motion.div>

      {/* Tickets List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="glass border-white/5">
          <CardHeader>
            <CardTitle className="text-white">All Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredTickets.map((ticket) => {
                const status = statusConfig[ticket.status as keyof typeof statusConfig]
                const priority = priorityConfig[ticket.priority as keyof typeof priorityConfig]
                return (
                  <div
                    key={ticket.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 glass rounded-xl gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${status.color} flex items-center justify-center flex-shrink-0`}>
                        <status.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-semibold">{ticket.title}</h3>
                          <Badge className={priority.color}>{priority.label}</Badge>
                        </div>
                        <p className="text-[#A0A0B8] text-sm mb-2">{ticket.description}</p>
                        <div className="flex items-center gap-4 text-xs text-[#A0A0B8]">
                          <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
                          <span>Updated: {new Date(ticket.updatedAt).toLocaleDateString()}</span>
                          <span>{ticket.replies} replies</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Badge className={status.color}>{status.label}</Badge>
                      <Button variant="ghost" size="sm" className="text-[#6C63FF] hover:text-[#00D4FF]">
                        View
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
