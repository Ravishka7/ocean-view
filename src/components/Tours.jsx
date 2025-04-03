import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
  
function Tours () {
    return (
        <section className="py-1 ">
            
            <div className="px-8 py-8 lg:py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Left Column */}
        <div className="space-y-1">
          {/* Top Card */}
          <div className="relative rounded-3xl p-8 h-auto flex flex-col justify-between bg-[#f4f8f9]">
            
            <div className="space-y-4">
              <div>
                <h2 className="text-4xl font-bold  mb-2 ">
                Book a Tour
                </h2>
                <p className="text-justify">
                Embark on an extraordinary adventure with Ocean View Tours as we
                take you on an unforgettable journey through the enchanting island of
                Sri Lanka. Discover the hidden gems, cultural treasures, and natural
                wonders that make this paradise in the Indian Ocean a must-visit destination.
                </p><br/>
                <p className="text-justify">
                    We are specialized in organizing Sri Lanka tours for the individual
                    travelers and for small groups. We know touring is not shopping. We
                    are special to other operators because we do not promote any shops or
                    places to buy things. We have got lot of uncommon places where most
                    of the operators do not know and tourist haven’t being.
                    Our experience since 1978 enables us to provide you with day trips,
                    round tours and excursion tailor-made tours to your expectations and taste.
                    </p>
                    
              </div>
              
              
            </div>
            
          </div>

          {/* Bottom Card */}
          <div className="relative rounded-3xl p-8 h-[300px] flex flex-col justify-end">
            <div>
              
              <p className="text-5xl font-bold text-white">Natural Wonders</p>
            </div>
            <img
              src="/assets/tour/tour_1.jpg"
              alt=""
              className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
            />
          </div>
        </div>

        {/* Right Column - Large Card */}
        <div className="relative rounded-3xl p-8 min-h-[620px] flex items-center justify-center">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Extraordinary Adventures
            </h2><br/>
            <Button asChild className="bg-blue-900 text-white hover:bg-blue-600/90 rounded-full">
                <Link to="/tours">
                    Plan your tour
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
          </div>
          <img
            src="/assets/tour/tour_2.jpg"
            alt=""
            className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
          />
        </div>
      </div>
    </div>
        </section>
    );
}

export default Tours;