"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Search, Download, Eye, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const invoices = [
  {
    id: "1",
    number: "INV-2025-001",
    description: "E-Commerce Platform - Phase 1",
    amount: 8500,
    status: "paid",
    date: "2025-02-15",
    dueDate: "2025-02-15",
    paidDate: "2025-02-14",
  },
  {
    id: "2",
    number: "INV-2025-002",
    description: "Mobile App Development - Milestone 2",
    amount: 12000,
    status: "pending",
    date: "2025-02-20",
    dueDate: "2025-03-05",
    paidDate: null,
  },
  {
    id: "3",
    number: "INV-2025-003",
    description: "Website Redesign - Final Payment",
    amount: 4500,
    status: "paid",
    date: "2025-01-30",
    dueDate: "2025-02-10",
    paidDate: "2025-02-08",
  },
  {
    id: "4",
    number: "INV-2024-012",
    description: "AI Chatbot Integration - Deposit",
    amount: 5000,
    status: "overdue",
    date: "2024-12-15",
    dueDate: "2024-12-30",
    paidDate: null,
  },
]

const statusConfig = {
  paid: { label: "Paid", color: "bg-green-500/20 text-green-400" },
  pending: { label: "Pending", color: "bg-yellow-500/20 text-yellow-400" },
  overdue: { label: "Overdue", color: "bg-red-500/20 text-red-400" },
}

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPaid = invoices.filter((i) => i.status === "paid").reduce((sum, i) => sum + i.amount, 0)
  const totalPending = invoices.filter((i) => i.status === "pending").reduce((sum, i) => sum + i.amount, 0)
  const totalOverdue = invoices.filter((i) => i.status === "overdue").reduce((sum, i) => sum + i.amount, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Invoices</h1>
        <p className="text-[#A0A0B8]">View and manage your invoices and payments</p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid sm:grid-cols-3 gap-4"
      >
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0B8] text-sm">Total Paid</p>
                <p className="text-2xl font-bold text-green-400">${totalPaid.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0B8] text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-400">${totalPending.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass border-white/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#A0A0B8] text-sm">Overdue</p>
                <p className="text-2xl font-bold text-red-400">${totalOverdue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Invoices List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="glass border-white/5">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-white">Invoice History</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A0B8]" />
              <Input
                placeholder="Search invoices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#A0A0B8]/50"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-white/5 border-white/10 mb-6">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#6C63FF] data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="paid" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  Paid
                </TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="overdue" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                  Overdue
                </TabsTrigger>
              </TabsList>

              {["all", "paid", "pending", "overdue"].map((tab) => (
                <TabsContent key={tab} value={tab}>
                  <div className="space-y-3">
                    {filteredInvoices
                      .filter((invoice) => tab === "all" || invoice.status === tab)
                      .map((invoice) => {
                        const status = statusConfig[invoice.status as keyof typeof statusConfig]
                        return (
                          <div
                            key={invoice.id}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 glass rounded-xl gap-4"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-[#6C63FF]" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{invoice.number}</p>
                                <p className="text-[#A0A0B8] text-sm">{invoice.description}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-6">
                              <div className="text-right">
                                <p className="text-white font-semibold">${invoice.amount.toLocaleString()}</p>
                                <p className="text-[#A0A0B8] text-xs">
                                  Due: {new Date(invoice.dueDate).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge className={status.color}>{status.label}</Badge>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="text-[#A0A0B8] hover:text-white">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-[#A0A0B8] hover:text-white">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
