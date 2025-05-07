import { useNavigate } from "react-router";
import { useGetToursQuery } from "@/lib/api";
import { Button } from "@/components/ui/button";

export default function AdminTourListPage() {
    const { data: tours, isLoading, error } = useGetToursQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return (
        <div>Loading tours...</div>
        )
    };
    if (error) {
        return (
        <div>Error loading tours</div>
        )
    };

    return (
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Select a Tour to Update
            </h2>
            <p className="mb-4">
                Here you can update your tours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ul className="space-y-3">
        {tours.map((tour) => (
          <li key={tour._id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center border p-3 rounded">
            <img className="rounded" src={tour.image} />
            <span>{tour.name}</span>
            <Button
              onClick={() => navigate(`/tours/update/${tour._id}`)}
                className="bg-blue-500 text-white hover:bg-blue-700"
            >
              Edit
            </Button>
          </li>
        ))}
      </ul>
            </div>
        </main>
    );
}