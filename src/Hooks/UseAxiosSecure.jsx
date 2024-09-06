import axios from "axios";
import useAuth from "../Hooks/useAuth"
import { useNavigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:9500',
});

const UseAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () =>{
        logOut()
        .then()
        .catch()
    }

    // Add a request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request sopped byh interceptors ------->', token); ///part-5
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    //interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },  (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        //for 401 of 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            handleLogout;
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default UseAxiosSecure;