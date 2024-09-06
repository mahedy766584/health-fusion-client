import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"

const Reviews = () => {

    const axiosPublic = useAxiosPublic()

    const {data: reviews = []} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () =>{
            const res = await axiosPublic('/reviews')
            return res.data;
        }
    })

    console.log(reviews);

    return (
        <div>
            {/* {
                reviews?.map(item => <ReviewCart key={item._id} item={item}/>)
            } */}
        </div>
    );
};

export default Reviews;