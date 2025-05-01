import { Link } from "react-router";
import { useSelector } from "react-redux";

function Navigation() {
    
    
    return (
        <nav className="flex items-center justify-between py-4 px-16 bg-blue-900">
        <div className="flex items-center gap-x-16">
          
          <div className="flex items-center gap-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/rooms" className="text-white">Accomodations</Link>
            <Link to="/tours" className="text-white">Our Trips</Link>
            <Link to="/tours/create" className="text-white">Create Tour</Link>
            <Link to="/rooms/create" className="text-white">Create Room</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
        <a href="/" className="flex items-center">
            <img src="/assets/navigation/logo.png" alt="logo" className="w-20 h-auto"/>
          </a>
        </div>
        
        
        {/* <div className="flex items-center gap-x-8">
          <p className="text-white">Hi, {userSlice.user.name}</p>
        </div> */}
      </nav>
    );
}

export default Navigation;