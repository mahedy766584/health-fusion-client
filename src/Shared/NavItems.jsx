import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AiOutlineDashboard } from "react-icons/ai";

const NavItems = () => {

    const { logOut, user } = useAuth();

    return (
        <ul className=" font-kanit text-lg flex items-center text-[#ff9161] relative  font-light menu-horizontal px-1 space-x-10">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/appointment"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md" : ""
                    }
                >
                    Appointment
                </NavLink>
            </li>
            {user ?
                <div className="">
                    <Menu>
                        <MenuButton><img className="w-12 h-12 rounded-full" src={user?.photoURL} /></MenuButton>
                        <MenuItems anchor="bottom" className={'z-20 bg-white px-4 py-4 rounded lg:-ml-24 shadow-md  mt-5 text-center text-lg font-poppins font-normal space-y-5'}>
                            <MenuItem>
                                <p className="block">
                                    {user?.displayName}
                                </p>
                            </MenuItem>
                            <MenuItem>
                                <a className=" flex items-center gap-2 text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 w-full py-2 rounded-md" href="/dashboard">
                                    <AiOutlineDashboard size={25}/> Go to Dashboard
                                </a>
                            </MenuItem>
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
        </ul>
    );
};

export default NavItems;