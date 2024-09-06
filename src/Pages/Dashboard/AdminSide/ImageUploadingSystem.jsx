/* eslint-disable react/prop-types */
import uploadIcon from "../../../assets/uploadIcon/photo (1).png";
import { useRef } from "react";

const ImageUploadingSystem = ({isImage, setIsImage}) => {

    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        // const file = event.target.files[0];
        // console.log(file);
        setIsImage(event.target.files[0]);
    }

    return (
        <div className="w-full  outline-[#003D8D] flex flex-col justify-center items-center outline-dashed  py-6 mt-10 rounded-md h-[200px]">
            <div onClick={handleImageClick}>
                {/* <img src={uploadIcon} /> */}
                {
                    isImage ?
                        (<div className="w-[180px] h-[180px]">
                            <img src={URL.createObjectURL(isImage)} className="w-[180px] object-cover h-[180px] rounded-full" />
                        </div>)
                        :
                        (<div className="flex flex-col justify-center items-center cursor-pointer">
                            <h1 className="text-gray-950 text-xl font-medium">Upload Your Photo</h1>
                            <img src={uploadIcon} className="w-28 h-28" />
                        </div>)
                }
                <input className="hidden" type="file" ref={inputRef} onChange={handleImageChange} />
            </div>
        </div>
    );
};

export default ImageUploadingSystem;