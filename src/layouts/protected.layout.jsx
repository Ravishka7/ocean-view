import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";

const ProtectedLayout = () => {
    const { isSignedIn, isLoaded, user } = useUser();

    if (!isSignedIn) {
        return <Navigate to="/sign-in" />;
    }

    return <Outlet />;
};

export default ProtectedLayout;