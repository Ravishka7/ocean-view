import { Globe } from "lucide-react";

export default function GalleryGrid() {
  return (
    <div className="px-8 py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Top Card */}
          <div className="relative rounded-3xl p-8 h-[300px] flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                Book your perfect stay with us
                </h2>
                <p className="text-gray-300">Your best staycation</p>
              </div>
              
            </div>
            <img
              src="/assets/room/room_2.jpg"
              alt=""
              className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
            />
          </div>

          {/* Bottom Card */}
          <div className="relative rounded-3xl p-8 h-[300px] flex flex-col justify-end">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Great Food
              </h3>
              <p className="text-5xl font-bold text-white">All day dining</p>
            </div>
            <img
              src="/assets/food/food_2.jpg"
              alt=""
              className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
            />
          </div>
          
        </div>

        {/* Right Column - Large Card */}
        <div className="relative rounded-3xl p-8 min-h-[620px] flex items-center justify-center">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Beyond accommodation, creating memories of a lifetime
            </h2>
          </div>
          <img
            src="/assets/pool/pool_1.jpg"
            alt=""
            className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
          />
        </div>
        
      </div>
      <div className="mt-6">
        {/* Bottom Card */}
      <div className="relative rounded-3xl p-8 h-[300px] flex flex-col justify-end py">
            <div>
              
              <p className="text-5xl font-bold text-white">Our Location</p>
            </div>
            <img
              src="/assets/location/location.jpg"
              alt=""
              className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
            />
          </div>
      </div>

      
      
    </div>
  );
}
