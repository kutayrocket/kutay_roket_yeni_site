import { Starfield } from "@/components/starfield"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { Rocket3DSection } from "@/components/rocket-3d-section"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Starfield />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <GallerySection />
      <Rocket3DSection />
      <NewsSection />
      <Footer />
    </main>
  )
}
