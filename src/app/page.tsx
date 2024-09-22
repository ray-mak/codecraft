import ContactForm from "@/components/ContactForm"
import FeaturesSection from "@/components/FeaturesSection"
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
      <div id="contact" className="my-16 flex justify-center">
        <div className="w-full md:w-5/6 lg:w-3/4 lg:max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
