"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Camera, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Inc",
    phone: "+1 (555) 123-4567",
    role: "CEO",
  })

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-[#A0A0B8]">Manage your account information and preferences</p>
      </motion.div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white/5 border-white/10 mb-6">
          <TabsTrigger value="general" className="data-[state=active]:bg-[#6C63FF] data-[state=active]:text-white">
            General
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#6C63FF] data-[state=active]:text-white">
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-[#6C63FF] data-[state=active]:text-white">
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Profile Picture */}
            <Card className="glass border-white/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24 ring-4 ring-[#6C63FF]">
                      <AvatarFallback className="bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] text-white text-2xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full btn-primary"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Profile Picture</h3>
                    <p className="text-[#A0A0B8] text-sm">Upload a new photo to update your profile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Personal Information</CardTitle>
                <CardDescription className="text-[#A0A0B8]">
                  Update your personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white">Full Name</Label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Email</Label>
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white">Company</Label>
                    <Input
                      value={profile.company}
                      onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Phone</Label>
                    <Input
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Role</Label>
                  <Input
                    value={profile.role}
                    disabled
                    className="bg-white/5 border-white/10 text-white/50"
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="btn-primary rounded-xl"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </motion.div>
        </TabsContent>

        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Change Password</CardTitle>
                <CardDescription className="text-[#A0A0B8]">
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Current Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">New Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Confirm New Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <Button className="btn-primary rounded-xl">Update Password</Button>
              </CardContent>
            </Card>

            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                <CardDescription className="text-[#A0A0B8]">
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 glass rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">2FA Enabled</p>
                      <p className="text-[#A0A0B8] text-sm">Using authenticator app</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="notifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Notification Preferences</CardTitle>
                <CardDescription className="text-[#A0A0B8]">
                  Choose what notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Project Updates", desc: "Get notified when project status changes" },
                  { label: "Invoice Notifications", desc: "Receive alerts for new invoices and payments" },
                  { label: "Support Ticket Updates", desc: "Get notified about ticket replies" },
                  { label: "Marketing Emails", desc: "Receive news and promotional content" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass rounded-xl">
                    <div>
                      <p className="text-white font-medium">{item.label}</p>
                      <p className="text-[#A0A0B8] text-sm">{item.desc}</p>
                    </div>
                    <div className="w-12 h-6 rounded-full bg-[#6C63FF] relative cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
