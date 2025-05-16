import RoomCard from "./RoomCard";
import { useGetRoomsQuery } from "@/lib/api";
import AnimateOnScroll from "@/components/AnimateOnScroll"

export default function RoomListings() {

  const { data: rooms, isLoading, error } = useGetRoomsQuery();
    

  if (isLoading) {
    return(<section className="px-8 py-8 lg:py-16">
      <AnimateOnScroll>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Our Rooms
        </h2>
        <p className="text-lg text-muted-foreground">
          Standard Rooms with modern amenities
        </p>
      </div>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">    
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-lg text-muted-foreground">Loading...</p>  
      </div>
      </div>
    </section>)
  };
  
  if (error) {
    return(<section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Our Rooms
        </h2>
        <p className="text-lg text-muted-foreground">
          Standard Rooms with modern amenities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">  
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-lg text-red-500">{error}</p>
      </div>
      </div>
    </section>)
  };

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
          Our Rooms
        </h2>
        <p className="text-lg text-muted-foreground">
          Standard Rooms with modern amenities
        </p>
      </div>
      <AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
      {
        rooms.map((room) => {
            return (<RoomCard key={room._id} room={room} />)
        })
      }
        
      </div>
      </AnimateOnScroll>
    </section>
  );
}
