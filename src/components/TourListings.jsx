import TourCard from "./TourCard";
import { useGetToursQuery } from "@/lib/api";


export default function TourListings() {

  const { data: tours, isLoading, error } = useGetToursQuery();
  

  if (isLoading) {
    return (<section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tours
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose your perfect tour around Sri Lanka
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div> 
      </div>
      
    </section>)
  };

  if (error) {
    return (<section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tours
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose your perfect tour around Sri Lanka
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          Tours
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose your perfect tour around Sri Lanka
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {
        tours.map((tour) => {
            return (<TourCard key={tour._id} tour={tour} />)
        })
      }  
      </div>
      
    </section>
  );
};
