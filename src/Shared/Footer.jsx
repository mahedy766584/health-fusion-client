import Container from "../Components/Container/Container";
import logo from "../assets/Logo/logo3.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-[#F3F3F3] mt-24">
            {/* footer container */}
            <Container>
                <div className="py-16 lg:flex gap-10 lg:skew-y-0 space-y-5 items-start lg:justify-between text-center lg:text-start font-kanit">
                    {/* first line */}
                    <div className="flex flex-col space-y-4 justify-center lg:justify-start items-center lg:items-start">
                        <div className="flex gap-1 items-center">
                            <img src={logo} alt="HealthFusion" className="w-16" />
                            <h1
                                // style={{ textShadow: ' 3px 3px 10px black' }} 
                                className="text-4xl font-medium font-kanit text-[#003D8D]"><span className="text-red-400">Health</span >Fusion</h1>
                        </div>
                        <p className="font-kanit text-[#3B3A3A] w-[296px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the </p>
                        <div className="text-start"><button className="rounded-md border-2  border-red-400 hover:bg-red-400 hover:text-white px-6 py-2 ">Appointment</button></div>
                    </div>
                    {/* second line */}
                    <div className="space-y-3">
                        <h1 className="text-[#0A0808] text-2xl font-medium">Quick Links</h1>
                        <ul className="space-y-2 text-[#3B3A3A]">
                            <li><Link>About</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link>Doctors</Link></li>
                            <li><Link>Departments</Link></li>
                            <li><Link>Online Payment</Link></li>
                            <li><Link>Online Payment</Link></li>
                            <li><Link>Contact Us</Link></li>
                            <li><Link>My Account</Link></li>
                        </ul>
                    </div>
                    {/* third line */}
                    <div className="space-y-3">
                        <h1 className="text-[#0A0808] text-2xl font-medium">HealthFusion Services</h1>
                        <ul className="space-y-2 text-[#3B3A3A]">
                            <li>
                                <Link to="#">Primary Care</Link>
                            </li>
                            <li>
                                <Link to="#">Pediatrics</Link>
                            </li>
                            <li>
                                <Link to="#">Cardiology</Link>
                            </li>
                            <li>
                                <Link to="#">Dermatology</Link>
                            </li>
                            <li>
                                <Link to="#">Orthopedics</Link>
                            </li>
                            <li>
                                <Link to="#">Physical Therapy</Link>
                            </li>
                            <li>
                                <Link to="#">Radiology</Link>
                            </li>
                            <li>
                                <Link to="#">Mental Health</Link>
                            </li>
                        </ul>
                    </div>
                    {/* forth line */}
                    <div className="space-y-3">
                        <h1 className="text-[#0A0808] text-2xl font-medium">Working Hours</h1>
                        <ul className="space-y-2 text-[#3B3A3A]">
                            <li>
                                <Link to="#">Monday: 9:00 AM - 5:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Tuesday: 10:00 AM - 6:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Wednesday: 9:00 AM - 5:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Thursday: 10:00 AM - 6:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Friday: 9:00 AM - 5:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Saturday: 9:00 AM - 2:00 PM</Link>
                            </li>
                            <li>
                                <Link to="#">Sunday: Closed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="text-center text-[#6C6B6B] py-5 font-kanit">
                    <p>Copyright © 2022 - All right reserved by HealthFusion Ltd</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;