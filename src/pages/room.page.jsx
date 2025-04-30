import { useParams } from "react-router";
import { useGetRoomByIdQuery } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Coffee,
  MenuIcon as Restaurant,
  Tv,
  Wifi,
} from "lucide-react";
import { useState } from "react"; // Import useState for state management

const RoomPage = () => {
  const { id } = useParams();
  const { data: room, isLoading, error } = useGetRoomByIdQuery(id);

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === room.carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading)
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="w-full h-[400px] rounded-lg" />
            <div className="flex space-x-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-28" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
            <Skeleton className="h-4 w-36" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Card>
              <CardContent className="p-4">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="flex items-center">
                      <Skeleton className="h-5 w-5 mr-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-8 w-24 mb-1" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    );

  if (error) return <p className="text-red">Error: {error.message}</p>;

  return (
    <main>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {/* Image Carousel with Manual Navigation */}
            <div className="relative w-full h-[400px] overflow-hidden">
              {/* Fade effect transition for images */}
              <img
                key={currentImageIndex}  
                src={room.carouselImages[currentImageIndex]}
                alt={`Room Image ${currentImageIndex + 1}`}
                className="w-full h-[400px] object-cover rounded-lg opacity-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: 1, // Ensure the image is visible
                }}
              />

              {/* Manual Navigation Buttons */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
                >
                  &lt;
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
                >
                  &gt;
                </button>
              </div>
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
};

export default RoomPage;
