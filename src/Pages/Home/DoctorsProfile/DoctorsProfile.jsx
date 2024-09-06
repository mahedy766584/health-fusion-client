/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"

import "./styles.css"

import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
import { Link } from "react-router-dom";
import useDoctors from "../../../Hooks/useDoctors";

const DoctorsProfile = () => {

    // eslint-disable-next-line no-unused-vars
    const [star, setStar] = useState([]);
    const [doctors] = useDoctors();
    // console.log(doctors);

    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "flex", background: "#003D8D", marginRight: '10px', }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#003D8D", marginLeft: '6px' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            <div>
                <div className="space-x-6 mb-32 font-kanit">
                    <div className="text-center mx-auto lg:w-5/6">
                        <SectionTitle heading={'Our Expert Doctors'} />
                        <p className="text-[#3B3A3A] mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <Slider {...settings}>
                        {
                            doctors.map((doctor) => (
                                <div key={doctor._id} className="bg-white mt-8  space-y-3  text-black rounded-xl relative">
                                    <div className="rounded-t-xl z-20 h-56 bg-[#003D8D] flex justify-center items-center relative rounded-bl-3xl">
                                        <img src={doctor?.profile_image} alt="" className="w-52 h-52 rounded-full object-cover" />
                                        <div className="h-8 w-10 z-10 bg-white rounded-tr-full  absolute mt-[256px] right-0 overly">
                                            {/*  */}
                                        </div>
                                        <div className="h-8 w-8 bg-[#003D8D] absolute mt-[250px] right-0">
                                            {/*  */}
                                        </div>
                                    </div>
                                    <div className="px-3 space-y-2">
                                        <div className="space-y-2">
                                            <div className="">
                                                <h1 className="text-[#3B3A3A] text-xl">{doctor?.name}</h1>
                                                <h1 className="flex  items-center gap-1 text-sm text-[#6C6B6B]">
                                                    <span><CiLocationOn /></span>
                                                    {doctor?.location}</h1>
                                            </div>
                                            <p className="text-[#6C6B6B] text-sm font-normal">BTP- {doctor?.category}</p>
                                            <ReactStars
                                                onChange={onChange}
                                                value={parseInt(doctor?.review)}
                                                isEdit={true}
                                                activeColors={["#FFBF00"]} />
                                        </div>
                                        <div className="space-y-2 mt-5">
                                            <div className="h-[55px] flex gap-1 items-start text-sm text-[#6C6B6B]">
                                                {/* <div>
                                                    {doctor?.services?.map((item, idx) => <p key={idx} className="flex items-center gap-1"><span className="text-[#ff8753]"><IoArrowForwardCircleOutline /></span> {item}</p>)}
                                                </div> */}
                                                <p>{doctor?.about}</p>
                                            </div>
                                        </div>
                                        <Link to={`/doctorProfileDetails/${doctor?._id}`}>
                                            <button className="w-full border-2 text-[#ff976b] border-[#ff976b] hover:text-white text-xl  rounded-md py-2 text-center mx-auto mt-10 mb-5 hover:bg-[#ff976b]">View Profile</button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </Container>
    );
};

export default DoctorsProfile;