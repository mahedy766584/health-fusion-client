/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useAuth();

    const location = useLocation();
    // console.log(location.pathname);

    // console.log(user);

    if (user) {
        return children;
    }

    if (isLoading) {
        return <LoadingAnimation />
    }

    return <Navigate to={'/login'} state={{from: location}} />
};

export default PrivateRoute;