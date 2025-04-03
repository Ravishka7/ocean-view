import Hero from "@/components/Hero"
import Introduction from "@/components/Introduction"
import Reservations from "@/components/Reservations"
import Tours from "@/components/Tours"
import Location from "@/components/Location"
import GalleryGrid from "@/components/GalleryGrid"

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
      <Introduction />
      <Reservations />
      <Tours />
      <GalleryGrid />
      
    </main>
  )
}

export default HomePage
