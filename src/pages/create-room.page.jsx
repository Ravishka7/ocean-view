import CreateRoomForm from "@/components/CreateRoomForm";

export default function CreateRoomPage() {
    return(
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Add a New Room
            </h2>
            <CreateRoomForm />
        </main>
    )
}