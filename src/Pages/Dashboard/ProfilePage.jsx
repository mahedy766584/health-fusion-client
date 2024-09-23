// import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";


const ProfilePage = () => {

    const { user } = useAuth();
    // const axiosPublic = useAxiosPublic();

    // const { data: users = []} = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () =>{
    //         const res = await  axiosPublic.get(`/userProfile/${user.email}`)
    //         return res.data;
    //     }
    // })

    // console.log(users);

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="flex items-center justify-center flex-col space-y-6 bg-slate-200 p-5 rounded-md">
                <img src={user.photoURL} className="rounded-full"/>
                <h1 className="lg:text-3xl text-2xl font-kanit font-medium text-gray-700">{user?.displayName}</h1>
                <p className="text-xl font-normal">{user?.email}</p>
            </div>
        </div>
    );
};

export default ProfilePage;