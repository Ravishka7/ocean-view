import { Link } from "react-router";

export default function AdminPage() {
    return (
        <main className="container mx-auto px-4 py-8 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Admin Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link to="/tours/create">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Add a New Tour</h3>
                        
                    </div>
                </Link>

                <Link to="/rooms/create">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Add a New Room</h3>
                        
                    </div>
                </Link>

                <Link to="/tours/update">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Update a Tour</h3>    
                    </div>
                </Link>

                <Link to="/rooms/update">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Update a Room</h3> 
                    </div>
                </Link>
                
                
            </div>
        </main>
    );
}