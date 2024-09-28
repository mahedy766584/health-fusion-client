import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import DoctorProfileDetails from "../Pages/Home/DoctorsProfile/DoctorProfileDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Components/Private/PrivateRoute"
import AllUser from "../Pages/Dashboard/AdminSide/AllUser";
import DashboardLayout from "../Layout/DashboardLayout";
import AddADoctor from "../Pages/Dashboard/AdminSide/AddADoctor";
import ManageDoctor from "../Pages/Dashboard/AdminSide/ManageDoctor";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import MyHistory from "../Pages/Dashboard/UserSide/MyHistory";
import HomeDashboard from "../Pages/Dashboard/Home";
import Payment from "../Pages/Dashboard/MyAppointment/Payment";
import AdminRoute from "../Components/Private/AdminRoute";
import ProfilePage from "../Pages/Dashboard/ProfilePage";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/appointment",
                element: <PrivateRoute><Appointment /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/doctorProfileDetails/:id",
                element: <PrivateRoute><DoctorProfileDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:9500/doctors/${params.id}`)
            }
        ],
    },
    {
        // dashboard
        path: "/dashboard",
        element: (<PrivateRoute><DashboardLayout /></PrivateRoute>),
        errorElement: <ErrorPage />,
        children: [

            // admin routes

            {
                // path: "/dashboard",
                index: true,
                element: <HomeDashboard />
            },
            {
                path: "allUser",
                element: <AdminRoute>
                    <AllUser />
                </AdminRoute>
            },
            {
                path: "addDoctor",
                element: <AdminRoute>
                    <AddADoctor />
                </AdminRoute>
            },
            {
                path: "manageDoctor",
                element: <AdminRoute>
                    <ManageDoctor />
                </AdminRoute>
            },

            // user routes
            {
                path: "myAppointment",
                element: <MyAppointment />
            },
            {
                path: "myHistory",
                element: <MyHistory />
            },
            {
                path: "payment",
                element: <Payment />
            },
            {
                path: "profilePage",
                element: <ProfilePage />
            }
        ]
    },
]);

export default myCreatedRouter;