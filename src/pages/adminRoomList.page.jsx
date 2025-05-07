import { useNavigate } from "react-router";
import { useGetRoomsQuery } from "@/lib/api";
import { Button } from "@/components/ui/button";

export default function AdminRoomListPage() {
    const { data: rooms, isLoading, error } = useGetRoomsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return (
        <div>Loading rooms...</div>
        )
    };
    if (error) {
        return (
        <div>Error loading rooms</div>
        )
    };

    return (
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Select a Room to Update
            </h2>
            <p className="mb-4">
                Here you can update your rooms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ul className="space-y-3">
        {rooms.map((room) => (
          <li key={room._id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center border p-3 rounded">
            <img className="rounded" src={room.image} />
            <span>{room.name}</span>
            <Button
              onClick={() => navigate(`/rooms/update/${room._id}`)}
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