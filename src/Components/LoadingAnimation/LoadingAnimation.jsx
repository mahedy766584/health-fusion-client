import Lottie from "lottie-react";
import errorAnimation from "../../../public/loading.json";


const LoadingAnimation = () => {
    return (
        <div className="w-[80vw] h-[100vh] mx-auto font-kanit bg-white flex flex-col text-center justify-center items-center">
            <div>
                <Lottie style={{
                    width: "350px",
                    height: "350px"
                }} animationData={errorAnimation} />
            </div>
        </div>
    );
};

export default LoadingAnimation;