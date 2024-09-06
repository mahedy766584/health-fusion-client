import Container from "../../../Components/Container/Container";
import { LuClock } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneCallback } from "react-icons/md";

const ContactDetails = () => {
    return (
        <Container>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 font-kanit">
                <div className="flex h-32 items-start gap-4 bg-[#003D8D] hover:bg-[#F87171] hover:text-gray-800 text-white px-10 py-6 rounded-md">
                    <div className="text-3xl"><LuClock /></div>
                    <div>
                        <h1 className="text-xl font-kanit">Opening Hours</h1>
                        <p className="">Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                </div>
                <div className="flex h-32 items-start gap-4 bg-[#003D8D] hover:bg-[#F87171] hover:text-gray-800 text-white px-10 py-6 rounded-md">
                    <div className="text-3xl"><CiLocationOn/></div>
                    <div>
                        <h1 className="text-xl font-kanit">Our Location</h1>
                        <p className="">Musapur 1, Sandwip -4300, Bangladesh</p>
                    </div>
                </div>
                <div className="flex h-32 items-start gap-4 bg-[#003D8D] hover:bg-[#F87171] hover:text-gray-800 text-white px-10 py-6 rounded-md">
                    <div className="text-3xl"><MdOutlinePhoneCallback/></div>
                    <div>
                        <h1 className="text-xl font-kanit">Contact Us</h1>
                        <p className="">+88 01750 00 00 00 <br /> +88 01750 00 00 00</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactDetails;