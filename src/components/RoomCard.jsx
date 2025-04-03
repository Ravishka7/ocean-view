import { MapPin, Star } from "lucide-react";

function RoomCard(props) {
    return ( <a
        href={`/rooms/${props.room._id}`}
        key={props.room._id}
        className="block group relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={props.room.image}
            alt={props.room.name}
            className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
          />
        </div>

        <div className="mt-3 space-y-2">
          <h3 className="font-semibold text-2xl">{props.room.name}</h3>
          
          
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold">${props.room.price}</span>
          </div>
        </div>
      </a>
        
    );
}

export default RoomCard;
