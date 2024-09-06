import Container from "../Components/Container/Container";
import NavItems from "./NavItems";
import logo from "../assets/Logo/logo3.png"
import { FaBars } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Navbar = () => {
    return (
        <div className="navbar fixed z-10 top-0 bg-[#003D8D] bg-opacity-90">
            <Container />
            <div className="navbar-start space-x-48">
                {/* logo design */}
                <div className="flex items-center gap-1 -ml-8">
                    <img src={logo} alt="HealthFusion" className="lg:w-16 w-12" />
                    <h1
                        style={{ textShadow: ' 3px 3px 10px black' }} 
                        className="lg:text-4xl text-2xl font-medium font-kanit text-white"><span className="text-red-400">Health</span >Fusion</h1>
                </div>
                <div className="lg:hidden">
                    <Menu>
                        <MenuButton><FaBars size={25} color="white"/></MenuButton>
                        <MenuItems anchor="bottom" className={'z-20 bg-white px-4 py-4 rounded shadow-md w-full mt-5 text-center space-y-2'}>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/settings">
                                    Settings
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/support">
                                    Support
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a className="block data-[focus]:bg-blue-100" href="/license">
                                    License
                                </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <NavItems />
                </div>
            </div>
            <Container />
        </div>
    );
};

export default Navbar;