import { Navbar } from "@/components/shared/Navbar"
import { Footer } from "@/components/shared/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection"
import { HowItWorksSection } from "@/components/sections/HowItWorksSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { LeadershipSection } from "@/components/sections/LeadershipSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <LeadershipSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
