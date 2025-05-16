import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll"

function Tours() {
  return (
    <section className="py-1 bg-[#f4f8f9]">
      <div className="px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Left Column */}
          <div className="space-y-1">
            {/* Top Card (Text) */}
            <div className="relative rounded-3xl p-8 h-auto flex flex-col justify-between bg-[#f4f8f9]">
              <div className="space-y-4">
                <div>
                <AnimateOnScroll>
                  <h2 className="text-4xl font-semibold text-blue-900 mb-2">
                    Book a Tour
                  </h2>
                  </AnimateOnScroll>
                  <AnimateOnScroll>
                  <p className="text-justify">
                    Embark on an extraordinary adventure with Ocean View Tours as we
                    take you on an unforgettable journey through the enchanting island of
                    Sri Lanka. Discover the hidden gems, cultural treasures, and natural
                    wonders that make this paradise in the Indian Ocean a must-visit destination.
                  </p></AnimateOnScroll><br/>
                  <AnimateOnScroll>
                  <p className="text-justify">
                    We are specialized in organizing Sri Lanka tours for the individual
                    travelers and for small groups. We know touring is not shopping. We
                    are special to other operators because we do not promote any shops or
                    places to buy things. We have got lot of uncommon places where most
                    of the operators do not know and tourist haven’t being.
                    Our experience since 1978 enables us to provide you with day trips,
                    round tours and excursion tailor-made tours to your expectations and taste.
                  </p>
                  </AnimateOnScroll>
                </div>
              </div>
            </div>
            

            {/* Bottom Card (Image with Overlay Text) */}
            <AnimateOnScroll>
            <div className="relative rounded-3xl h-[300px] overflow-hidden">
            {/* Background Image */}
            <img
              src="/assets/tour/tour_1.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay (optional, for contrast) */}
            <div className="absolute inset-0 bg-black/30 z-0" />

            {/* Content on top */}
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <p className="text-5xl font-bold text-white drop-shadow-lg">Natural Wonders</p>
            </div>
          </div>
            </AnimateOnScroll>
            

          </div>
          

          {/* Right Column (Image with Overlay Text & Button) */}
          <AnimateOnScroll>
          <div className="relative rounded-3xl min-h-[680px] overflow-hidden flex items-center justify-center">
          
          <img
            src="/assets/tour/tour_2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          
          <div className="absolute inset-0 bg-black/30 z-0" />
          
          
          <div className="relative z-10 max-w-md text-center">
            <h2 className="text-4xl font-bold text-white leading-tight drop-shadow-lg">
              Extraordinary Adventures
            </h2><br/>
            <Button asChild className="bg-blue-900 text-white hover:bg-blue-600/90 rounded-full">
              <Link to="/tours">
                Plan your tour
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Tours;
