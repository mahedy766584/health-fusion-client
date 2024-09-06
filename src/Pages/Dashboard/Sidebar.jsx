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
import logo from "../../assets/Logo/logo3.png"
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";


const Sidebar = ({ sideBarIsOpen, setSideBarIsOpen }) => {

    const [isAdmin] = useAdmin();

    // console.log(sideBarIsOpen);

    return (
        <div className={`${sideBarIsOpen ? 'w-64 duration-700' : '-ml-80  duration-700 '} bg-[#003D8D] fixed h-full px-4 py-2 z-30 `}>
            <div className="my-2 mb-4">
                {/* logo design */}
                <div className="flex items-center gap-1 ">
                    <img src={logo} alt="HealthFusion" className="lg:w-9 w-9" />
                    <h1
                        style={{ textShadow: ' 3px 3px 10px black' }}
                        className={` lg:text-2xl text-xl font-medium font-kanit text-white`}><span className="text-red-400">Health</span >Fusion</h1>
                </div>
            </div>
            <hr />
            <div className="overflow">
                <ul className="mt-8 text-white font-medium  overflow-x-auto">
                    {
                        isAdmin ? <>
                            <NavLink
                                to={'/dashboard'}
                                end
                                className={({ isActive }) =>
                                    `flex items-center rounded  px-2 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                    }`
                                }
                            >
                                <span><AiOutlineDashboard className="inline-block w-6 h-6 mr-1 -mt-2" />
                                    <span className={``}>Dashboard</span>
                                </span>
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
                                <span><FaHome className="inline-block w-6 h-6 mr-1 -mt-2" />Home</span>
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
                                    to={'/dashboard/myReviews'}
                                    end
                                    className={({ isActive }) =>
                                        `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                                        }`
                                    }
                                >
                                    <span><MdOutlinePreview className="inline-block w-6 h-6 mr-1 -mt-2" /> My Reviews</span>
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
                <ul className="absolute bottom-0 overflow-y-auto font-kanit">
                    <NavLink
                        to={'/'}
                        end
                        className={({ isActive }) =>
                            `flex items-center rounded  px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#F87171]   hover:text-white ${isActive ? 'bg-[#F87171] text-white flex ' : 'text-white '
                            }`
                        }
                    >
                        <span><CgProfile className="inline-block w-6 h-6 mr-1 -mt-2" />Profile</span>
                    </NavLink>
                    <li className="flex hover:bg-[#F87171] cursor-pointer items-center rounded text-lg  px-4 py-2 my-5 text-white">
                        <span><IoMdLogOut className="inline-block w-6 h-6 mr-1 -mt-2" /> Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;