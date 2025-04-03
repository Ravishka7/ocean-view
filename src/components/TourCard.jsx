import { MapPin, Star } from "lucide-react";

function TourCard(props) {
    return ( <a
        href={`/tours/${props.tour._id}`}
        key={props.tour._id}
        className="block group relative"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={props.tour.image}
            alt={props.tour.name}
            className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
          />
        </div>

        <div className="mt-3 space-y-2">
          <h3 className="font-semibold text-lg">{props.tour.name}</h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{props.tour.location}</span>
          </div>
          
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-bold">${props.tour.price}</span>
          </div>
        </div>
      </a>
        
    );
}

export default TourCard;
