
import { ResponsiveContainer, BarChart, Bar,  YAxis, Tooltip, XAxis } from "recharts";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const Recharts = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: totalData = [] } = useQuery({
        queryKey: ['totalData'],
        queryFn: async () => {
            const res = await axiosSecure.get('admin-start');
            return res.data;
        }
    })

    console.log(totalData);

    const data = [
        { name: 'doctors', value: totalData.doctors },
        { name: 'users', value: totalData.user },
        { name: 'appointments', value: totalData.appointments }
    ];

    

    return (
        <div className="mt-16">
            <ResponsiveContainer width={'100%'} aspect={4}>
                <BarChart data={data} width={400} height={300} >
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={'value'} fill="#ff9b70" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;