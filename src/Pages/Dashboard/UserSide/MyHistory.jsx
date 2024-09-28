import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const MyHistory = () => {

    const axiosSecure = UseAxiosSecure();
    const { user } = useAuth();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;
        }
    })

    console.log(payments);

    return (
        <div className="lg:mt-0 mt-16">
            <div className="overflow-x-auto  font-kanit mt-6">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200 rounded-t-lg text-gray-700 font-normal">
                        <tr className="text-[17px]">
                            <th> <label>#</label> </th>
                            <th>Transaction Id</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white rounded-b-md">
                        {
                            payments?.map((item, index) => <tr key={item?._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="font-medium">{item?.transactionId}</div>
                                </td>
                                <td>{item?.serviceName}</td>
                                <td>${item?.price}</td>
                                <td>{item?.data}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyHistory;