import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9500'
});

const useAxiosPublic = () => {
    return instance;
}
export default useAxiosPublic;