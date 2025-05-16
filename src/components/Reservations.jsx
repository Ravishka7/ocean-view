import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll"

function Reservations () {
    return (
        <section className="py-1">
            

            <div className="px-8 py-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    {/* Left Column */}
                    <div className="space-y-6">
                    {/* Top Card */}
                    <div className="relative rounded-3xl p-8 h-auto flex flex-col justify-between">
                        
                        <div className="space-y-4">
                        <div>
                        <AnimateOnScroll>
                            <h1 className="text-4xl font-semibold text-blue-900 mb-2">
                            Stay With Us
                            </h1></AnimateOnScroll><br/>
                            
                            <div className="text-justify">
                            <AnimateOnScroll>
                            <p>
                        Your journey to Sri Lanka begins or concludes with Ocean View Guest House. Immerse yourself in
                        modern luxury and timeless hospitality. Book your stay with us today and experience Negombo like
                        never before. At Ocean View Guest House, we're not just a place to stay, we're an experience
                        warming to be discovered.
                        </p></AnimateOnScroll>
                        <div className="flex justify-center mt-4">
                        <AnimateOnScroll>
                        <Button
                            asChild
                            className="bg-blue-900 text-white hover:bg-blue-600/90 rounded-full"
                        >
                            <Link to="/rooms">
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        </AnimateOnScroll>
                        </div>
                        
                        
                            </div>
                            
                            
                        </div>  
                            
                        </div>                        
                    </div>     
                    </div>

                    {/* Right Column - Large Card */}
                    <AnimateOnScroll>
                    <div className="relative rounded-3xl p-8 h-[300px] flex flex-col justify-end">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                With
              </h3>
              <p className="text-5xl font-bold text-white">Modern Amenities</p>
            </div>
            <img
              src="/assets/room/room_1.jpg"
              alt=""
              className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
            />
          </div>
          </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}

export default Reservations;