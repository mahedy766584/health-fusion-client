import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NavItems = () => {

    const { logOut, user } = useAuth();

    return (
        <ul className=" font-kanit text-lg flex items-center text-[#ff9161]  font-light menu-horizontal px-1 space-x-6">
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
            {user ? <button onClick={logOut} className="text-white hover:bg-[#ff9b70] bg-[#F7A582] px-6 py-2 rounded-md">Logout</button>
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