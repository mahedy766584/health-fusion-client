import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

const useServices = () => {

    const axiosPublic = useAxiosPublic();

    const { data: service = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic('/services')
            return res?.data;
        }
    })
    return [service]
};

export default useServices;