export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  isPopular?: boolean
  isEnterprise?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
  twitter?: string
  isGold?: boolean
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface Stat {
  id: string
  value: string
  label: string
  icon: string
}

export interface Project {
  id: string
  name: string
  description: string
  status: "in_progress" | "completed" | "under_review" | "pending"
  progress: number
  startDate: string
  endDate?: string
  clientId: string
}

export interface Invoice {
  id: string
  invoiceNumber: string
  clientId: string
  projectId?: string
  amount: number
  status: "paid" | "pending" | "overdue"
  dueDate: string
  paidDate?: string
  items: InvoiceItem[]
}

export interface InvoiceItem {
  description: string
  quantity: number
  rate: number
  amount: number
}

export interface SupportTicket {
  id: string
  title: string
  description: string
  status: "open" | "in_progress" | "resolved" | "closed"
  priority: "low" | "medium" | "high" | "urgent"
  clientId: string
  createdAt: string
  updatedAt: string
  replies: TicketReply[]
}

export interface TicketReply {
  id: string
  message: string
  senderId: string
  senderRole: "client" | "admin" | "support"
  createdAt: string
}

export interface User {
  id: string
  email: string
  name: string
  role: "client" | "admin" | "super_admin"
  company?: string
  phone?: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "project" | "invoice" | "ticket" | "system"
  isRead: boolean
  link?: string
  createdAt: string
}

export interface Milestone {
  id: string
  year: string
  title: string
  description: string
}
