import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { CiCircleRemove } from "react-icons/ci";
import { FaUserGear } from "react-icons/fa6";
import { Tooltip } from "@chakra-ui/react";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'
import { RiDeleteBinLine } from "react-icons/ri";


const AllUser = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    // console.log(users);

    const handleMakeAdmin = async (user) => {
        console.log(user);
        const res = await axiosSecure.patch(`/users/admin/${user?._id}`)
        console.log(res);
        if (res.data.modifiedCount) {
            refetch();
            toast.success(`${user?.name} is Admin now!`)
        }
    }

    const handleDeleteUser = (user) => {
        // console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        // console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="">
            <h1 className="text-2xl font-kanit font-normal py-2 mt-16">Users: {users?.length}</h1>

            <div className="overflow-x-auto bg-white">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200 text-base rounded-t-lg">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Remove</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                {
                                                    user?.image ? <img src={user?.image} /> :
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/5@94.webp" />
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>
                                    {
                                        user?.role === 'admin' ? <button className="bg-[#003D8D] px-3 py-2 text-white">Admin</button> :
                                            <Tooltip hasArrow label='Make Admin' bg='#003D8D' placement='left'>
                                                <button onClick={() => handleMakeAdmin(user)} className="bg-[#003D8D] text-white p-3 rounded-full font-semibold">
                                                    <FaUserGear size={22} />
                                                </button>
                                            </Tooltip>
                                    }
                                </td>
                                <th>
                                    <Tooltip hasArrow label='Remove User' bg='red.600' placement='left'>
                                        <button onClick={() => handleDeleteUser(user)} className="bg-red-600 text-white p-3 rounded-full font-semibold">
                                            <RiDeleteBinLine size={22} />
                                        </button>
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

export default AllUser;