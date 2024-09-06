/* eslint-disable react/prop-types */
import { format } from "date-fns";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useServices from "../../Hooks/Services/useServices";
import Modal from "./Modal";
// import Modal from "./Modal";


const Services = ({ date }) => {

    const [services] = useServices();

    console.log(services);

    return (
        <div>
            <div className="text-center font-kanit">
                <p className="text-red-600 mb-3">Available Services on {format(date.startDate, 'MMM,dd,yyyy')}</p>
                <SectionTitle heading={'Please select a service.'} />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-14">
                {
                    services?.map((service) => (
                        <div 
                            key={service?._id}
                            className="flex flex-col space-y-2 items-center gap-2 p-4 bg-slate-100"
                        >
                            <img
                                src={service?.image} alt={service?.name}
                                className="w-[150px] h-[150px] object-cover rounded-md"
                            />
                            <h1 className="text-lg font-medium text-[#3B3A3A]">{service?.name}</h1>
                            <p>{service?.service_time}</p>
                            <Modal date={date} services={service}  id={service?._id} />
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Services;