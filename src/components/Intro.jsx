import React from "react";

const Intro = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#f4f8f9]">
        <div className="container mx-auto px-12 py-12 lg:py-4">        
          <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-5 text-3xl font-semibold text-blue-900 sm:text-[40px]/[48px]">
                Welcome to your luxurious home away from home
                </h2>
                <p className="mb-5 text-base text-body-color text-justify">
                Welcome to the Ocean View Guest House, where modern comfort meets simplicity, just 1km from the vibrant heart
                of Negombo and a mere 12km from the Katunayake International Airport. Nestled a mere 100 meters from the
                pristine shores of Negombo beach, we redefine coastal luxury and relaxation.
                </p>
                <p className="mb-8 text-base text-body-color text-justify">
                Whether you're arriving in Sri Lanka after a long flight or bidding farewell to this enchanting island,
                our guest house offers unmatched convenience. In just 20 minutes, at any hour of the day, you can reach
                your tranquil haven at Ocean View Guest House. No stress, no hassle, just pure relaxation.
                </p>
                <p className="mb-8 text-base text-body-color text-justify">
                With a legacy spanning back to 1978, we have had the privilege of hosting thousands of discerning travellers
                from across the globe. Our commitment to exceptional service and unparalleled comfort is not only our promise
                but also a testament to the praise we've received in renowned guidebooks such as Lonely Planet, Rough Guide,
                Foot Print, Guide du Routard, and Japanese guidebooks.
                </p>
                
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-10 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="/assets/hero/hero_3.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="/assets/room/room_5.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="/assets/pool/pool_1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
