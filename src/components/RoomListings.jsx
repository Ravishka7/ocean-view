import { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { getRooms } from "@/lib/api/rooms.js";

export default function RoomListings() {
   
  const [rooms, setRooms] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(""); 


  useEffect(() => {
    getRooms()
    .then((data) => {
      setRooms(data);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return(<section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Rooms
        </h2>
        <p className="text-lg text-muted-foreground">
          Standard Rooms with modern amenities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">    
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-lg text-muted-foreground">Loading...</p>  
      </div>
      </div>
    </section>)
  };
  
  if (error) {
    return(<section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Rooms
        </h2>
        <p className="text-lg text-muted-foreground">
          Standard Rooms with modern amenities
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        
      {
        rooms.map((room) => {
            return (<RoomCard key={room._id} room={room} />)
        })
      }
        
      </div>
    </section>
  );
}
