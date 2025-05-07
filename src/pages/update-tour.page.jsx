import UpdateTourForm from "@/components/UpdateTourForm";

export default function UpdateTourPage() {
    return(
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Update Tour
            </h2>
            <UpdateTourForm />
        </main>
    )
}