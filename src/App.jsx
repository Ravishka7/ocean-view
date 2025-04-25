import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Introduction from "./components/Introduction"
import Reservations from "./components/Reservations"
import Tours from "./components/Tours"
import Location from "./components/Location"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
function App() {
  
  return (
    <>
      <Navigation />
      <div className="relative min-h-screen">
        <Hero />
        <img
          src="/assets/hero/beach_hero.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-1 object-cover -z-10"
        />
      </div>
      <Introduction />
      <Reservations />
      <Tours />
      <Gallery />
      <Location />
      <Footer />
    </>
  )
}

export default App