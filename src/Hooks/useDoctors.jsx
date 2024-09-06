import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDoctors = () => {

    const axiosPublic = useAxiosPublic();

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic('/doctors')
            return res.data
        }
    })

    return [doctors, refetch]
    // console.log(doctors);
};

export default useDoctors;