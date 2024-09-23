/* eslint-disable react/prop-types */
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo/logo3.png"

const Navbar = ({ sideBarIsOpen, setSideBarIsOpen }) => {


    return (
        <div className={`bg-[#003D8D] px-4 py-3 w-full fixed z-30`}>

            <div className={`flex justify-between items-center`}>
                <div className="flex items-center gap-2">
                    <div className="  bg-[#003D8D] text-white p-1 rounded-full">
                        <span onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                            {
                                sideBarIsOpen ? <FaBars className="w-8 h-8 cursor-pointer" /> : <AiOutlineClose className="w-8 h-8 cursor-pointer" />
                            }
                        </span>
                    </div>
                    {/* logo design */}
                    <div className="flex items-center gap-1 ">
                        <img src={logo} alt="HealthFusion" className="lg:w-9 w-9" />
                        <h1
                            style={{ textShadow: ' 3px 3px 10px black' }}
                            className={` lg:text-2xl text-xl font-medium font-kanit text-white`}><span className="text-red-400">Health</span >Fusion</h1>
                    </div>
                </div>
                <div className="flex  items-center gap-x-5">
                    <div className="relative md:w-65 hidden lg:flex">
                        <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                            <button className="p-1 focus:outline-none text-white md:text-black"><FaSearch /></button>
                        </span>
                        <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" />
                    </div>
                    <div className="text-white"><FaBell className="w-6 h-6" /></div>

                    <div className="relative">
                        <button className="text-white group">
                            <FaUserCircle className="w-6 h-6 mt-1" />
                            <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white">
                                <ul className="py-2 text-sm text-gray-950">
                                    <li className="flex flex-col gap-4">
                                        <NavLink>Profile</NavLink>
                                        <NavLink>Logout</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;