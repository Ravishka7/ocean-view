import { useParams } from "react-router";
import { useGetTourByIdQuery } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area"
import AnimateOnScroll from "@/components/AnimateOnScroll"


const TourPage = () => {
  const { id } = useParams();
  const { data: tour, isLoading, error } = useGetTourByIdQuery(id);

  
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
    <AnimateOnScroll>
    <div className="bg-white">
      <div className="pt-1">
      <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-10 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">{tour.name}</h1>
          </div>
          </div>
        {/* Image gallery */}
        <div className="mx-auto mt-1 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          
          <img
            alt={tour.name}
            src={tour.subImage_1}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={tour.name}
              src={tour.subImage_2}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
            <img
              alt={tour.name}
              src={tour.subImage_3}
              className="aspect-3/2 w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={tour.name}
            src={tour.image}
            className="aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{tour.name}</h1> */}
          </div>

          {/* Options */}
          <div className="mt-2 lg:row-span-3 lg:mt-0">
            
              <button
                type="submit"
                className="w-full py-4 px-4 mt-10 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 disabled:bg-blue-300 disabled:cursor-not-allowed transition duration-300"
              >
                Book Now
              </button>
            
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Description</h3>

              <div className="space-y-6 py-5">
                <ScrollArea className="text-gray-900 h-[400px] whitespace-pre-wrap">{tour.description}</ScrollArea>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </AnimateOnScroll>
  )
};

export default TourPage;
