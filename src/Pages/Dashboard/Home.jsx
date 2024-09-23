import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Recharts from "./Recharts";
import useAuth from "../../Hooks/useAuth";

const Home = () => {

    const {user} = useAuth();

    const axiosSecure = UseAxiosSecure();

    const { data: totalData = [] } = useQuery({
        queryKey: ['totalData'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin-start');
            return res.data;
        }
    })

    console.log(totalData);

    return (
        <div className="">
            <h1 className="py-4 text-2xl font-medium">Hi, {user.displayName}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="bg-slate-200 p-6 rounded-md space-y-5 shadow-xl relative">
                    <div className="flex items-center gap-5">
                        <div className=" bg-red-100 p-4">
                            <FaUser color="red" size={35} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-600">{totalData?.doctors}</h1>
                    </div>
                    <div className="w-full h-1 bg-red-400"></div>
                    <h1 className="text-4xl font-semibold text-gray-600">Doctors</h1>
                </div>
                <div className="bg-slate-200 p-6 rounded-md space-y-5 relative shadow-xl">
                    <div className="flex items-center gap-5">
                        <div className=" bg-green-200 p-4">
                            <FaUsers color="green" size={35} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-600">{totalData?.user}</h1>
                    </div>
                    <div className="w-full h-1 bg-green-400"></div>
                    <h1 className="text-4xl font-semibold text-gray-600">Doctors</h1>
                </div>
                <div className="bg-slate-200 p-6 rounded-md space-y-5 relative shadow-xl">
                    <div className="flex items-center gap-5">
                        <div className=" bg-purple-200 p-4">
                            <FaUser color="purple" size={35} />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-600">{totalData?.appointments}</h1>
                    </div>
                    <div className="w-full h-1 bg-purple-400"></div>
                    <h1 className="text-4xl font-semibold text-gray-600">Doctors</h1>
                </div>
            </div>
            <div className="">
                <Recharts />
            </div>
        </div>
    );
};

export default Home;