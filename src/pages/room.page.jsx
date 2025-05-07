import { useParams } from "react-router";
import { useGetRoomByIdQuery } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Coffee,
  MenuIcon as Restaurant,
  Tv,
  Wifi,
} from "lucide-react";

const RoomPage = () => {
  const { id } = useParams();
  const { data: room, isLoading, error } = useGetRoomByIdQuery(id);

  // If there's an error, display it
  if (error) return <p className="text-red">Error: {error.message}</p>;

  // If the data is still loading, show a loading message or spinner
  if (isLoading) return <p>Loading...</p>;

  // If the room data is fetched and exists, render the page
  if (room) {
    return (
      <main>
        <div className="container mx-auto px-4 py-8 min-h-screen">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {/* Image gallery */}
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <img
                  alt={room.name}
                  src={room.subImage_1}
                  className="hidden size-full rounded-lg object-cover lg:block"
                />
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <img
                    alt={room.name}
                    src={room.subImage_2}
                    className="aspect-3/2 w-full rounded-lg object-cover"
                  />
                  <img
                    alt={room.name}
                    src={room.subImage_3}
                    className="aspect-3/2 w-full rounded-lg object-cover"
                  />
                </div>
                <img
                  alt={room.name}
                  src={room.image}
                  className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
                />
              </div>
              <div className="flex space-x-2">
                <Badge variant="secondary">Rooftop View</Badge>
                <Badge variant="secondary">French Cuisine</Badge>
                <Badge variant="secondary">City Center</Badge>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold">{room.name}</h1>
                </div>
              </div>

              <p className="text-muted-foreground">{room.description}</p>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Wifi className="h-5 w-5 mr-2" />
                      <span>Free Wi-Fi</span>
                    </div>
                    <div className="flex items-center">
                      <Restaurant className="h-5 w-5 mr-2" />
                      <span>Restaurant</span>
                    </div>
                    <div className="flex items-center">
                      <Tv className="h-5 w-5 mr-2" />
                      <span>Flat-screen TV</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 mr-2" />
                      <span>Coffee maker</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">${room.price}</p>
                  <p className="text-sm text-muted-foreground">per night</p>
                </div>
                <Button size="lg">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // In case room data is unavailable (if fetched, but no room data exists)
  return <p className="text-red">Room not found!</p>;
};

export default RoomPage;
