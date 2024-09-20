import ContactForm from "@/components/ContactForm"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import WhatWeDoSection from "@/components/WhatWeDoSection"
import WhoWeAre from "@/components/WhoWeAre"
import ReactDOM from "react-dom"

export default function Home() {
  ReactDOM.preload("/images/herobg.webp", { as: "image" })
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhatWeDoSection />
      <WhoWeAre />
      <div id="contact" className="my-16">
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
