function Location () {
    return (
        <section className="py-8 px-16">
            <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
                <div className="flex flex-col justify p-20 gap-y-8">
                    <h1 className="text-5xl font-semibold">
                        Our Location
                    </h1>
                    <p>
                        Welcome to the Ocean View Guest House, where modern comfort meets convenience, just 1 km
                        from the vibrant heart of Negombo and a mere 12 km from the Katunayake International Airport.
                        Nestled a mere 100 meters from the pristine shores of Negombo Beach, we redefine coastal luxury and relaxation.
                    </p>
                    
                </div>
                <div className="relative">
                    <img src="/assets/location/location.jpg" alt="" className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    );
}

export default Location;