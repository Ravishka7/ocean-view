import Hero from "@/components/Hero"
import Reservations from "@/components/Reservations"
import Tours from "@/components/Tours"
import GalleryGrid from "@/components/GalleryGrid"
import Intro from "@/components/Intro"

function HomePage() {
  return (
    <main>
      <div className="relative min-h-screen">
        <Hero />
        <img
          src="/assets/hero/beach_hero.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
      <Intro />
      <Reservations />
      <Tours />
      <GalleryGrid />
      
    </main>
  )
}

export default HomePage
