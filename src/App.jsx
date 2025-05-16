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
      {/* <div className="relative min-h-screen">
        <Hero />
      </div> */}
      
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