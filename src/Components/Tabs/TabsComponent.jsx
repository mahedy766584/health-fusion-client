/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import ReactStars from 'react-rating-star-with-type'

const TabsComponent = ({ doctor }) => {

    // eslint-disable-next-line no-unused-vars
    const { profile_image, name, category, occupation, review, location, about, education, work_and_experience, services, awards, specializes } = doctor || {};

    // eslint-disable-next-line no-unused-vars
    const [star, setStar] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, [])


    const onChange = (nextValue) => {
        setStar(nextValue)
    }

    // console.log(services);

    const items = [
        {
            title: 'Overview',
            content: (
                <div className="border-2 space-y-7 border-[#F7A582] rounded-lg p-4">
                    <div className="space-y-2">
                        <h1 className="text-2xl text-[#3B3A3A]">About Me</h1>
                        <p className="text-[#3B3A3A]">
                            {about}
                        </p>
                    </div>
                    <div className="lg:flex justify-start lg:gap-x-16 space-y-12 lg:space-y-0 ">
                        {/* first line */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl text-[#3B3A3A]">Education</h2>
                                {
                                    education?.map((item, idx) => <div key={idx} className="flex ml-4 items-baseline gap-3 space-y-4">
                                        <BsCircleFill size={8} color="#3B3A3A" />
                                        <div>
                                            <h3 className="flex items-center gap-2 text-[#252424]"> {item?.institution}</h3>
                                            <p className="text-[#4C4C4C]">{item?.degree}</p>
                                            <p className="text-[#4C4C4C]">{item?.year}</p>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <div>
                                <h2 className="text-2xl text-[#3B3A3A]">Work & Experience</h2>
                                {
                                    work_and_experience?.map((item, idx) => <div key={idx} className="flex ml-4 items-baseline gap-3 space-y-4">
                                        <BsCircleFill size={8} color="#3B3A3A" />
                                        <div>
                                            <h3 className="flex items-center gap-2 text-[#252424]"> {item?.role}</h3>
                                            <p className="text-[#4C4C4C]">{item?.years}</p>
                                            <p className="text-[#4C4C4C]">{item?.year}</p>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <div>
                                {/* <h2 className="text-2xl text-[#3B3A3A]">Work & Experience</h2> */}
                                {/* {
                                    services?.map((item, idx) => <div key={idx} className="flex ml-4 items-baseline gap-3 space-y-4">
                                        <BsCircleFill size={8} color="#3B3A3A" />
                                        <div>
                                            <h3 className="flex items-center gap-2 text-[#252424]"> {item}</h3>
                                        </div>
                                    </div>)
                                } */}
                            </div>
                        </div>
                        {/* second line */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-2xl text-[#3B3A3A]">Awards</h2>
                                {
                                    awards?.map((item, idx) => <div key={idx} className="flex ml-4 items-baseline gap-3 space-y-4">
                                        <div className="mt-5">
                                            <div className="flex items-center gap-1 ml-5">
                                                <p className="text-[#4C4C4C]">{item?.month} {item?.years}</p>
                                                <p className="text-[#4C4C4C]">{item?.year}</p>
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <BsCircleFill size={8} color="#3B3A3A" />
                                                <div>
                                                    <h3 className="flex items-center gap-2"> {item?.subject}</h3>
                                                    <p className="text-[#4C4C4C]">{item?.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <div>
                                <h2 className="text-2xl text-[#3B3A3A]">Work & Experience</h2>
                                {
                                    specializes?.map((item, idx) => <div key={idx} className="flex ml-4 items-baseline gap-3 space-y-4">
                                        <BsCircleFill size={8} color="#3B3A3A" />
                                        <div>
                                            <h3 className="flex items-center gap-2 text-[#252424]"> {item}</h3>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Location",
            content: (
                <div className="border-2 border-blue-400 rounded-lg p-4">
                    <p className="flex items-center gap-3 text-4xl">
                        <CiLocationOn/> {location}
                    </p>
                </div>
            )
        },
        {
            title: "Reviews",
            content: (
                <div className="border-2 border-blue-400 rounded-lg p-4">
                    <p className="flex text-xl items-center gap-5">
                        <ReactStars
                            size={25}
                            onChange={onChange}
                            value={parseInt(review)}
                            isEdit={true}
                            activeColors={["#FFBF00"]} />
                        {review}
                    </p>
                </div>
            )
        },
        {
            title: "Business Hours",
            content: (
                <div className="border-2 border-blue-400 rounded-lg p-4">
                    <h1 className="text-3xl text-blue-600">Title Text 4</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sint earum dignissimos itaque repellendus labore suscipit aut, excepturi natus odit neque consequuntur vitae corporis iure, hic, voluptates a nisi explicabo!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae eos perferendis. Voluptatibus libero blanditiis nisi excepturi nostrum molestiae est vitae voluptates et doloremque, voluptatum hic accusamus quidem sed ut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sed autem facilis sunt ea, labore ullam ab quod, delectus perspiciatis vero rem voluptates animi corrupti tenetur! Exercitationem accusantium dicta eius.
                    </p>
                </div>
            )
        },
    ]

    return (
        <div className="bg-white flex justify-center items-center py-12">
            <div className="max-w-screen-xl flex flex-col gap-y-2 w-full">
                <div className="bg-white p-1 overflow-x-auto rounded-xl flex justify-between items-center gap-x-6 font-bold text-black">
                    {
                        items.map((item, index) => (
                            <button
                                ref={index === 0 ? firstBtnRef : null}
                                onClick={() => setSelectedTab(index)}
                                key={index}
                                className={`outline-none w-full p-2 text-sm hover:bg-[#fc9366] rounded-xl text-center  ${selectedTab === index ? "ring-2 bg-[#F7A582] text-white" : ""}`}>
                                {item.title}
                            </button>
                        ))
                    }
                </div>

                <div className="bg-white p-2 rounded-xl">
                    {/* https://youtu.be/R2tyUnK2OUI */}
                    {
                        items.map((item, index) => (
                            <div key={index} className={`${selectedTab === index ? "" : "hidden"}`}>
                                {item.content}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TabsComponent;