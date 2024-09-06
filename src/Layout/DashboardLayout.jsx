import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Helmet } from "react-helmet-async";
import Navbar from "../Pages/Dashboard/Navbar";
import { useState } from "react";

const DashboardLayout = () => {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
    // console.log(sideBarIsOpen);

    return (
        <>
            <Helmet>
                <title> HealthFusion | Dashboard</title>
            </Helmet>
            <div className='relative min-h-full md:flex'>
                {/* Sidebar Component */}
                <Sidebar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
                <div className='flex-1'>
                    <div className="">
                        <Navbar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
                    </div>
                    <div className={`p-5  ${sideBarIsOpen ? 'ml-64 duration-700' : 'duration-700'}`}>
                        {/* Outlet for dynamic contents */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;