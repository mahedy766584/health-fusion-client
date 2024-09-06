import { Link } from "react-router-dom";

const NotAppointment = () => {
    return (
        <div className="flex justify-center flex-col space-y-5 text-center items-center h-[85vh]">
            <h1 className="lg:text-3xl text-xl font-medium">You have not accepted any appointments!</h1>
            <h1 className="lg:text-xl text-md">Please make an appointment.</h1>
            <Link to={'/appointment'}>
                <button className="bg-[#F87171] px-6 py-2 rounded-md text-white">Appointment Now</button>
            </Link>
        </div>
    );
};

export default NotAppointment;