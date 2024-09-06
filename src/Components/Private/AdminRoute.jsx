/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const AdminRoute = ({ children }) => {

    const { user, isLoading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    // console.log(location.pathname);

    // console.log(user);

    if (user && isAdmin) {
        return children;
    }

    if (isLoading || isAdminLoading) {
        return <LoadingAnimation />
    }

    return <Navigate to={'/login'} state={{ from: location }} />
};

export default AdminRoute;