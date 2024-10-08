import NavItems from "./NavItems";
import logo from "../assets/Logo/logo3.png"
import { FaBars } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {

    const { user, logOut } = useAuth();

    const [isAdmin] = useAdmin();

    return (
        <div className="fixed top-0 z-10 bg-[#003D8D] bg-opacity-90 w-full flex items-center justify-between lg:px-48 py-4 px-2">
                {/* logo design */}
                <div className="flex items-center gap-1">
                    <img src={logo} alt="HealthFusion" className="lg:w-16 w-12" />
                    <h1
                        style={{ textShadow: ' 3px 3px 10px black' }}
                        className="lg:text-4xl text-2xl font-medium font-kanit text-white"><span className="text-red-400">Health</span >Fusion</h1>
                </div>
                <div className="hidden lg:flex">
                    <div className="hidden lg:flex">
                        <NavItems />
                    </div>
                </div>
                <div className="lg:hidden">
                    <Menu>
                        <MenuButton><FaBars size={35} color="white" /></MenuButton>
                        <MenuItems anchor="bottom" className={'z-20 bg-gray-200 px-4  py-4 rounded shadow-md w-full mt-5 text-center space-y-2 font-kanit text-lg flex flex-col items-center text-[#ff9161] relative  font-light'}>
                            <MenuItem>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white w-full hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : " w-full"
                                    }
                                >
                                    Home
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                                    }
                                >
                                    About
                                </NavLink>
                            </MenuItem>
                            <MenuItem>
                                <NavLink
                                    to="/appointment"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                                    }
                                >
                                    Appointment
                                </NavLink>
                            </MenuItem>
                            {
                                isAdmin ? <MenuItem>
                                    <NavLink
                                        to={`/dashboard`}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white block hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : "flex items-center gap-2"
                                        }
                                    >
                                        <AiOutlineDashboard size={25} /> Go to Dashboard
                                    </NavLink>
                                </MenuItem>
                                    :
                                    <MenuItem>
                                        <NavLink
                                            to={`/dashboard/myAppointment`}
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-white block hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : "flex items-center gap-2"
                                            }
                                        >
                                            <AiOutlineDashboard size={25} /> Go to Dashboard
                                        </NavLink>
                                    </MenuItem>
                            }
                            {user ?
                                <div className="">
                                    <Menu>
                                        <MenuButton><img className="w-12 h-12 rounded-full" src={user?.photoURL} /></MenuButton>
                                        <MenuItems anchor="bottom" className={'z-20 bg-white px-4 py-4 rounded lg:-ml-24 shadow-md  mt-5 text-center text-lg font-poppins font-normal space-y-5'}>
                                            <MenuItem>
                                                <button onClick={logOut} className="text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 w-full py-2 rounded-md">Logout</button>
                                            </MenuItem>
                                        </MenuItems>
                                    </Menu>
                                </div>
                                :
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>}
                        </MenuItems>
                    </Menu>
                </div>
        </div>
    );
};

export default Navbar;