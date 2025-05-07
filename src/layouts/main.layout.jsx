import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Outlet } from "react-router";
import Navigations from "@/components/Navigation2";

function MainLayout() {
    return ( 
        <>
         <Navigations />
         <Outlet />
         <Footer />
        </>   
    )
}

export default MainLayout;