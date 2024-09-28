import { useState } from "react";
import bg from "../../assets/doctorBanner/bg2.jpg"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import Calendar from "./Calendar";
import Container from "../../Components/Container/Container"
import labImg from "../../assets/madicalLab.webp"
import Services from "./Services";
import { Helmet } from "react-helmet-async";

const Appointment = () => {

    const [date, setData] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    )

    const handleChange = (ranges) => {
        setData(ranges.selection)
    }

    return (
        <div>
            <Helmet>
                <title>HealthFusion | Appointment</title>
            </Helmet>
            {/* top part */}
            <div className="relative">
                <img className="h-[500px] w-full bg-center bg-cover bg-no-repeat bg-blend-overlay" src={bg} />
                <div className="bg-gradient-to-b from-[#003D8D]  absolute top-0 w-full h-full flex items-center justify-center">
                    <h1 className=" text-white font-medium text-4xl text-center">Appointment</h1>
                </div>
            </div>

            {/* button */}
            <Container>
                <div className="py-24 lg:flex justify-around items-center">
                    <div>
                        <p className="mb-2 font-kanit">{`${format(date.startDate, 'MMM,dd,yyyy')}`}</p>
                        <Calendar date={date} handleChange={handleChange} />
                    </div>
                    <div>
                        <img className="lg:max-w-[599px] lg:max-h-[355px] rounded-md" src={labImg} alt="" />
                    </div>
                </div>
                {/* services */}
                <div className="space-y-20">
                    <Services date={date}/>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;