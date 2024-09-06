/* eslint-disable react/prop-types */
import Container from "../../Components/Container/Container"
// import img1 from "../../assets/doctorsImg/img1.jpg"
// import img2 from "../../assets/doctorsImg/img2.jpg"
// import img3 from "../../assets/doctorsImg/img3.jpg"

const BannerDesign = ({img1, img2, img3}) => {
    return (
        <div className="bg-[#003D8D] text-white">
            <Container>
                <div className="lg:flex justify-between items-center py-20 lg:py-0  lg:h-screen">
                    <div className="space-y-4 lg:py-0 py-8 text-center lg:text-start">
                        <h1 className="lg:text-7xl text-4xl font-kanit font-medium">Your Best Medical <br /><span className="font-medium text-3xl lg:text-5xl"> Help Center</span></h1>
                        <p className="font-kanit lg:w-[500px]">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard. </p>
                        <button className="bg-[#F87171] px-8 py-2  font-kanit shadow-lg " style={{borderRadius: '16px 0px'}}>All Service</button>
                    </div>
                    <div>
                        {/* image style */}
                        <div className="flex flex-col items-center gap-3 relative">
                            <div className="flex items-center gap-5">
                                <div className="border-8 border-white" style={{transform: 'skewy(6deg)'}}>
                                    <img className="lg:mx-w-[290px]  lg:h-[280px]" src={img1} />
                                </div>
                                <div className="border-8 shadow border-white z-30 mb-16" style={{transform: 'skewy(6deg)'}}>
                                    <img className="lg:mx-w-[290px] lg:h-[280px]" src={img3} />
                                </div>
                            </div>
                            <div className="-mt-40 shadow border-8 z-20 border-white" style={{transform: 'skewy(6deg)'}}>
                                <img className="lg:mx-w-[290px] h-[280px]" src={img2} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BannerDesign;