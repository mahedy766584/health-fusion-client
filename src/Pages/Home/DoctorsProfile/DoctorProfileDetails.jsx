import { useLoaderData } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import bg from "../../../assets/doctorBanner/bg4.jpg"
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
import { CiLocationOn } from "react-icons/ci";
import TabsComponent from "../../../Components/Tabs/TabsComponent";

const DoctorProfileDetails = () => {

    const doctor = useLoaderData();

    const { profile_image, name, category, occupation, review, location, about } = doctor || {};

    // eslint-disable-next-line no-unused-vars
    const [star, setStar] = useState([]);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }


    return (
        <div className="bg-slate-100 font-kanit">
            <div className="relative">
                <img className="h-[500px] w-full object-cover" src={bg} />
                <div className="bg-gradient-to-b from-indigo-800 absolute top-0 w-full h-full flex lg:justify-start  items-center justify-center">
                    <h1 className="lg:ml-[160px] text-white font-medium text-4xl">Doctor Profile</h1>
                </div>
            </div>
            <Container>
                <div className="bg-slate-100 py-24 space-y-8">
                    {/* top part */}
                    <div className="lg:flex items-center gap-10 bg-white">
                        <div className="">
                            <img className="w-[350px] rounded-md h-[375px] object-cover" src={profile_image} alt="" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl font-medium">{name}</h1>
                            <p className="text-[#6C6B6B]">{category}</p>
                            <span className="flex items-center gap-4">
                                <ReactStars
                                    size={27}
                                    onChange={onChange}
                                    value={parseInt(review)}
                                    isEdit={true}
                                    activeColors={["#FFBF00"]} />
                                <p>({review})</p>
                            </span>
                            <p className="flex items-center gap-2 text-[#6C6B6B]"><CiLocationOn /> {location}</p>
                        </div>
                    </div>
                    {/* button part */}
                    <div className="bg-white rounded-lg mx-4 p-4">
                        <TabsComponent doctor={doctor}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DoctorProfileDetails;