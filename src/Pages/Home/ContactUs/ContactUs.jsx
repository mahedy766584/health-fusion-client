import Container from "../../../Components/Container/Container";
import { VscCallOutgoing } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
// import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import toast from "react-hot-toast"

const ContactUs = () => {

    // const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_number: '',
        user_date: '',
        user_email: '',
        name_doctor: '',
        user_time: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        e.target.reset();
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // MailJS এর মাধ্যমে ডেটা পাঠানো
        emailjs
            .send(
                'service_jkf0r3l',
                'template_2t2miul',
                formData,
                'UF_Abnb3pej3eGPOc')
            .then((response) => {
                console.log('Appointment sent successfully!', response);
                toast.success('Appointment sent successfully!')
            }, (error) => {
                console.log('Failed to send appointment. Please try again.', error);
            });
        e.target.reset();
    };

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
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="lg:flex gap-4 lg:space-y-0 space-y-5  font-kanit">
                            {/* first line */}
                            <div className="space-y-4">
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="Name"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.user_name} // bind the state value to input
                                    onChange={handleChange} // update state on input change
                                />
                                <input
                                    name="user_number"
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.user_number}
                                    onChange={handleChange}
                                />
                                <input
                                    name="user_date"
                                    type="date"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.user_date}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* second line */}
                            <div className="space-y-4">
                                <input
                                    name="user_email"
                                    type="email"
                                    placeholder="Email"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                />
                                <input
                                    name="name_doctor"
                                    type="text"
                                    placeholder="Doctor Name"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.name_doctor}
                                    onChange={handleChange}
                                />
                                <select
                                    name="user_time"
                                    className="bg-white opacity-40 outline-black text-black border-none placeholder-black w-full px-4 py-1 h-12 border-white rounded-sm"
                                    value={formData.user_time}
                                    onChange={handleChange} // remember to handle select too
                                >
                                    <option value='10:00 am - 11:30 am'>10:00 am - 11:30 am</option>
                                    <option value='09:05 am - 10:30 am'>09:05 am - 10:30 am</option>
                                    <option value='11:05 am - 12:30 am'>11:05 am - 12:30 am</option>
                                    <option value='12:05 am - 02:30 am'>12:05 am - 02:30 am</option>
                                </select>
                            </div>
                        </div>
                        {/* button */}
                        <div>
                            <button type="submit" className="w-full bg-[#F7A582] hover:bg-[#ff996d] font-kanit py-2 rounded-md text-xl">Appointment Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;