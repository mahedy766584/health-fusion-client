/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { PiBagSimpleBold } from "react-icons/pi";
import { RiFolderHistoryLine } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin"
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";


const Sidebar = ({ sideBarIsOpen, setSideBarIsOpen }) => {

    const [isAdmin] = useAdmin();

    // console.log(sideBarIsOpen);

    const {logOut} = useAuth();

    return (
        <div className={`${sideBarIsOpen ? 'w-64 duration-700 mt-16 lg:mt-0' : '-ml-80  duration-700 '} bg-[#003D8D] fixed h-full px-4  z-20`}>
            <div className="flex items-start flex-col justify-between h-[90vh]  overflow-y-auto">
                <ul className=" text-white font-medium ">
                    {
                        isAdmin ? <>
                            <NavLink
                                to={'/dashboard'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span><AiOutlineDashboard className="inline-block w-6 h-6 mr-1 -mt-2" /> Dashboard</span>
                            </NavLink>
                            <NavLink
                                to={'/dashboard/allUser'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span><FaUsers className="inline-block w-6 h-6 mr-1 -mt-2" /> Users</span>
                            </NavLink>
                            <NavLink
                                to={'/dashboard/addDoctor'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span> <FaUserDoctor className="inline-block w-6 h-6 mr-1 -mt-2" /> Add a Doctor</span>
                            </NavLink>
                            <NavLink
                                to={'/dashboard/manageDoctor'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span><GrUserManager className="inline-block w-6 h-6 mr-1 -mt-2" /> Manage Doctors</span>
                            </NavLink>
                            <NavLink
                                to={'/'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span><FaHome className="inline-block w-6 h-6 mr-1 -mt-2" /> Home</span>
                            </NavLink>
                        </> :
                            <>
                                <NavLink
                                    to={'/dashboard/myAppointment'}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                        }`
                                    }
                                >
                                    <span><PiBagSimpleBold className="inline-block w-6 h-6 mr-1 -mt-2" /> My Appointment</span>
                                </NavLink>
                                <NavLink
                                    to={'/dashboard/myHistory'}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                        }`
                                    }
                                >
                                    <span><RiFolderHistoryLine className="inline-block w-6 h-6 mr-1 -mt-2" /> My History</span>
                                </NavLink>
                                <NavLink
                                    to={'/'}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                        }`
                                    }
                                >
                                    <span><FaHome className="inline-block w-6 h-6 mr-1 -mt-2" />Home</span>
                                </NavLink>
                            </>
                    }
                </ul>
                <ul className="font-kanit">
                    <NavLink
                        to={'/dashboard/profilePage'}
                        end
                        className={({ isActive }) =>
                            `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                            }`
                        }
                    >
                        <span><CgProfile className="inline-block w-6 h-6 mr-1 -mt-2" />Profile</span>
                    </NavLink>
                    <li onClick={logOut} className="flex hover:bg-[#F87171] cursor-pointer items-center rounded text-lg  px-4 py-2 my-5 text-white">
                        <span><IoMdLogOut className="inline-block w-6 h-6 mr-1 -mt-2" /> Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;