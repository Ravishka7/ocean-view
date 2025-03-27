function Introduction () {
    return (
        <section className="py-1">
            <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
                <div className="flex flex-col justify p-20 gap-y-8">
                    <h1 className="text-5xl font-semibold">
                        Welcome to your luxurious home away from home
                    </h1>
                    <p>
                        Welcome to the Ocean View Guest House, where modern comfort meets convenience, just 1 km
                        from the vibrant heart of Negombo and a mere 12 km from the Katunayake International Airport.
                        Nestled a mere 100 meters from the pristine shores of Negombo Beach, we redefine coastal luxury and relaxation.
                    </p>
                    <p>
                        Whether you're arriving in Sri Lanka after a long flight or bidding farewell to this enchanting island,
                        our guest house offers unmatched convenience. In just 20 minutes, at any hour of the day, you can reach
                        your tranquil haven at Ocean View Guest House. No stress, no hassle, just pure relaxation.
                    </p>
                    <p>
                        Welcome to the Ocean View Guest House, where modern comfort meets convenience, just 1 km
                        from the vibrant heart of Negombo and a mere 12 km from the Katunayake International Airport.
                        Nestled a mere 100 meters from the pristine shores of Negombo Beach, we redefine coastal luxury and relaxation.
                    </p>
                    <a href="/shop" className="px-4 py-2 text-white font-medium bg-blue-900 rounded w-fit">Our Services</a>
                </div>
                <div className="relative">
                    <img src="/assets/hero/hero_3.jpg" alt="" className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    );
}

export default Introduction;