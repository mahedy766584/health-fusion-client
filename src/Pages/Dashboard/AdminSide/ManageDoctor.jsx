import { Tooltip } from "@chakra-ui/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useDoctors from "../../../Hooks/useDoctors";
import { Button } from "@headlessui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const ManageDoctor = () => {

    const [doctors, refetch] = useDoctors();
    // console.log(doctors);
    const axiosSecure = UseAxiosSecure();

    const handleDeleteDoctor = (doctor) => {
        // console.log(doctor);
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

                const res = await axiosSecure.delete(`/doctors/${doctor?._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `Your ${doctor?.name} has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });

    }

    return (
        <div className="mt-16 px-8">
            <SectionTitle heading={`Doctors: ${doctors?.length}`} />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-md">
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {
                            doctors?.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={doctor?.profile_image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.category}</td>
                                <th>
                                    <Tooltip hasArrow label='Remove a Doctor' placement='left' bg='red.600'>
                                        <Button
                                            onClick={() => handleDeleteDoctor(doctor)}
                                            className={'text-white bg-red-600 p-3 text-lg rounded-full'}>
                                            <RiDeleteBinLine />
                                        </Button>
                                    </Tooltip>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;