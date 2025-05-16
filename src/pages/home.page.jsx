import Hero from "@/components/Hero"
import Reservations from "@/components/Reservations"
import Tours from "@/components/Tours"
import GalleryGrid from "@/components/GalleryGrid"
import Intro from "@/components/Intro"
import AnimateOnScroll from "@/components/AnimateOnScroll" // Adjust path as needed

export default function HomePage() {
  return (
    <main>
      
      <AnimateOnScroll>
        <Hero />
      </AnimateOnScroll>
        
        <Intro />
      
        <Reservations />
      
        <Tours />
    
        <GalleryGrid />
      
    </main>
  )
}
