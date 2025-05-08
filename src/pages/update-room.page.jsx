import DeleteRoom from "@/components/DeleteRoom";
import UpdateRoomForm from "@/components/UpdateRoomForm";

export default function UpdateRoomPage() {
    return(
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Update Room
            </h2>
            <UpdateRoomForm />
            
        </main>
    )
}