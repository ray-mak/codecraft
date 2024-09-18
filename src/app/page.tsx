import FeaturesSection from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import ReactDOM from "react-dom"

export default function Home() {
  ReactDOM.preload("/images/herobg.webp", { as: "image" })
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}
