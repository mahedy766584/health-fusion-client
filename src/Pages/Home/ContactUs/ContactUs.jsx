import Container from "../../../Components/Container/Container";
import { VscCallOutgoing } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
    return (
        <Container>
            <div className="bg-[#003D8D] py-7  text-white lg:flex justify-between gap-10 space-y-5 px-10 items-center  lg:h-[500px] w-full rounded-xl">
                {/* contact */}
                <div className="space-y-5 lg:text-start text-center">
                    <h1 className="text-5xl font-medium">Contact With Us</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <p className="flex gap-2 items-center"><VscCallOutgoing /> +88 01750 14 14 14</p>
                    <p className="flex gap-2 items-center"><CiLocationOn /> Sandwip, Chattogram, Bangladesh.</p>
                </div>
                {/* form */}
                <div>
                    <form className="space-y-5">
                        <div className="lg:flex gap-4 lg:space-y-0 space-y-5  font-kanit">
                            {/* first line */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm" />
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm" />
                                <input
                                    type="date"
                                    placeholder="Name"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm" />
                            </div>
                            {/* second line */}
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm" />
                                <input
                                    type="text"
                                    placeholder="Doctor Name"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm" />
                                <select className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm">
                                    <option value='option1'>10:00 am - 11:30 am</option>
                                    <option value='option2'>09:05 am - 10:30 am</option>
                                    <option value='option3'>11:05 am - 12:30 am</option>
                                    <option value='option3'>12:05 am - 02:30 am</option>
                                </select>
                            </div>
                        </div>
                        {/* button */}
                        <div>
                            <button type="submit" className="w-full bg-[#F87171] font-kanit py-2 text-xl rounded-sm">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;