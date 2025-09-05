import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ModelGrid } from "@/components/model-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ModelGrid />
      </main>
      <Footer />
    </div>
  )
}
