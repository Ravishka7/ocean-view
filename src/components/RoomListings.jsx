
import RoomCard from "./RoomCard";

export default function RoomListings() {
   
  const rooms = [{
    _id: "1",
    image:"/assets/room/room_2.jpg",
    name:"A/C Deluxe Rooms",
    price:"100",
  },
  {
    _id: "2",
    image:"/assets/room/room_3.jpg",
    name:"A/C Triple Rooms",
    price:"150",
  }
];  
  

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
