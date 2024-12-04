import axios from "axios";

const instance = axios.create({
    baseURL: 'https://healthfusionserver.vercel.app'
});

const useAxiosPublic = () => {
    return instance;
}
export default useAxiosPublic;