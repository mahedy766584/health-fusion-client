import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import NotAppointment from "../../../Components/NotAppointment/NotAppointment";
import { TiDeleteOutline } from "react-icons/ti";
import { Tooltip } from "@chakra-ui/react";
import Swal from "sweetalert2";
import LoadingAnimation from "../../../Components/LoadingAnimation/LoadingAnimation";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdPayments } from "react-icons/md";
import { Link } from "react-router-dom";


const MyAppointment = () => {

    const axiosSecure = UseAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: appointment = [], refetch, isLoading } = useQuery({
        queryKey: ["appointments", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/appointment?email=${user?.email}`
                // delete 
                //     {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('access-token')}`
                //     }
                // }
            )
            return res.data;
        }
    })

    // console.log(appointment.isNames);

    if (isLoading) {
        return <LoadingAnimation />
    }

    const handleDeleteAppointment = (item) => {
        // console.log(item._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/appointment/${item?._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `Your ${item?.serviceName} has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    }


    return (
        <>
            {
                appointment?.length === 0 ? <NotAppointment /> :
                    <div className="lg:px-8 mt-16">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl text-gray-800 font-kanit">My Appointment: {appointment?.length}</h1>
                            <button className="border border-[#003D8D] rounded-md hover:bg-[#003D8D] hover:text-white px-6 py-2">May, 10, 2022</button>
                        </div>
                        <div className="overflow-x-auto  font-kanit mt-6">
                            <table className="table">
                                {/* head */}
                                <thead className="bg-gray-200 rounded-t-lg text-gray-700 font-normal">
                                    <tr className="text-[17px]">
                                        <th> <label>#</label> </th>
                                        <th>Name</th>
                                        <th>Service</th>
                                        <th>Number</th>
                                        <th>Time</th>
                                        <th>Price</th>
                                        <th>Pay</th>
                                        <th>Acton</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white rounded-b-md">
                                    {
                                        appointment?.map((item, index) => <tr key={item?._id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <div className="font-medium">{item?.isNames}</div>
                                            </td>
                                            <td>{item?.serviceName}</td>
                                            <td>{item?.isNumbers}</td>
                                            <td>{item?.isTimes}</td>
                                            <td>${item?.price}</td>
                                            <th>
                                                {/* <PayModal
                                                    id={item?._id}
                                                    serviceName={item?.serviceName}
                                                    time={item?.isTimes}
                                                    price={item?.price}
                                                /> */}
                                                <Link to={'/dashboard/payment'}>
                                                    <button
                                                        className="btn btn-circle btn-primary">
                                                        pay
                                                    </button>
                                                </Link>
                                                {/* <Tooltip hasArrow label='Pay Now' placement='left' bg='#003D8D'>
                                                    <button
                                                        className="p-3 text-lg bg-[#003D8D] text-white rounded-full">
                                                        <MdPayments />
                                                    </button>
                                                </Tooltip> */}
                                            </th>
                                            <th>
                                                <Tooltip hasArrow label='Cancel' placement='left' bg='red.600'>
                                                    <button
                                                        onClick={() => handleDeleteAppointment(item)}
                                                        className="p-3 text-lg bg-red-600 text-white rounded-full">
                                                        <TiDeleteOutline />
                                                    </button>
                                                </Tooltip>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>
    );
};

export default MyAppointment;