
import Lottie from "lottie-react";
import errorAnimation from "../../../public/error.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-[90vw] h-[100vh] font-kanit bg-white mx-auto flex flex-col text-center justify-center items-center">
            <h1 className="font-medium text-4xl">Sorry,</h1>
            <p className="text-2xl text-gray-500">This page is not found</p>
            <div>
                <Lottie style={{
                    width: "350px",
                    height: "350px"
                }} animationData={errorAnimation} />
            </div>
            <div>
                <Link to={'/'}><button className="bg-[#F7A582] font-medium -mt-24 text-lg px-10 py-2 text-white rounded-sm">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;