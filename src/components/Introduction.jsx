function Introduction () {
    return (
        <section className="py-1">            
            <div className="px-8 py-8 lg:py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                    {/* Left Column */}
                    <div className="space-y-6">
                    {/* Top Card */}
                    <div className="relative rounded-3xl p-8 h-auto flex flex-col justify-between bg-[#f4f8f9]">
                        
                        <div className="space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold mb-2 justify-center text-center">
                            Welcome to your luxurious home away from home
                            </h1><br/>
                            
                            <div className="text-justify">
                            <p>
                            Welcome to the Ocean View Guest House, where modern comfort meets simplicity, just 1km from the vibrant heart
                            of Negombo and a mere 12km from the Katunayake International Airport. Nestled a mere 100 meters from the
                            pristine shores of Negombo beach, we redefine coastal luxury and relaxation.
                            </p><br/>
                            <p>
                            Whether you're arriving in Sri Lanka after a long flight or bidding farewell to this enchanting island,
                            our guest house offers unmatched convenience. In just 20 minutes, at any hour of the day, you can reach
                            your tranquil haven at Ocean View Guest House. No stress, no hassle, just pure relaxation.
                            </p><br/>

                            <p>
                            With a legacy spanning back to 1978, we have had the privilege of hosting thousands of discerning travellers
                            from across the globe. Our commitment to exceptional service and unparalleled comfort is not only our promise
                            but also a testament to the praise we've received in renowned guidebooks such as Lonely Planet, Rough Guide,
                            Foot Print, Guide du Routard, and Japanese guidebooks.
                            </p>
                            </div>
                            
                        </div>      
                        </div>                        
                    </div>     
                    </div>

                    {/* Right Column - Large Card */}
                    <div className="relative rounded-3xl p-8 min-h-[500px] flex items-center justify-center">
                    <img
                        src="/assets/hero/hero_3.jpg"
                        alt=""
                        className="absolute top-0 left-0 rounded-3xl w-full h-full object-cover -z-10"
                    />
                    </div>
                </div>
            </div>    
        </section>
    );
}

export default Introduction;