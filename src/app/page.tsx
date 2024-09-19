import FeaturesSection from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import WhatWeDoSection from "@/components/WhatWeDoSection"
import ReactDOM from "react-dom"

export default function Home() {
  ReactDOM.preload("/images/herobg.webp", { as: "image" })
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhatWeDoSection />
    </div>
  )
}
