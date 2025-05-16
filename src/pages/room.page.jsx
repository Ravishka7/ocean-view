import { useParams } from "react-router";
import { useGetRoomByIdQuery } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll"
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
      <AnimateOnScroll>
      <main>
        <div className="container mx-auto px-4 py-8 min-h-screen">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {/* Image gallery */}
              <div className="relative w-full h-[300px]">
            <img
              src={room.image}
              alt={room.name}
              className="absolute object-cover rounded-lg"
            />
          </div>
              
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-blue-900">{room.name}</h1>
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
                <Button className="w-auto py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </AnimateOnScroll>
    );
  }

  // In case room data is unavailable (if fetched, but no room data exists)
  return <p className="text-red">Room not found!</p>;
};

export default RoomPage;
