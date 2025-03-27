function Reservations () {
    return (
        <section className="py-8 px-16">
            <div className="grid grid-cols-2 rounded-md min-h-[60vh] ">
                <div className="flex flex-col justify p-16 gap-y-4">
                    <h1 className="text-5xl font-semibold">
                        Stay With Us
                    </h1>
                    <p>
                        Welcome to the Ocean View Guest House, where modern comfort meets convenience, just 1 km
                        from the vibrant heart of Negombo and a mere 12 km from the Katunayake International Airport.
                        Nestled a mere 100 meters from the pristine shores of Negombo Beach, we redefine coastal luxury and relaxation.
                    </p>
                    
                    <a href="/shop" className="px-4 py-2 text-white font-medium bg-blue-900 rounded w-fit">Book Now</a>
                </div>
                <div className="relative">
                    <img src="/assets/room/room_1.jpg" alt="" className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    );
}

export default Reservations;