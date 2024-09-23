/* eslint-disable react/prop-types */
import Container from "../../Components/Container/Container";

const BannerDesign = ({img1, img2, img3}) => {
    return (
        <div className="bg-[#003D8D] text-white">
            <Container>
                <div className="lg:flex justify-between items-center py-20 lg:py-0 gap-10  lg:h-screen">
                    <div className="space-y-4 lg:py-0  py-8 text-center lg:text-start">
                        <h1 className="lg:text-7xl text-4xl font-kanit font-medium hero-title">Your Best Medical <br /><span className="font-medium text-3xl lg:text-5xl "> Help Center</span></h1>
                        <p className="font-poppins font-normal text-xl lg:w-[500px] hero-title">At HealthFusion, we blend advanced medical solutions with personalized care, ensuring your health and well-being are our priority. </p>
                        <button className="bg-[#F87171] px-10 py-3 text-xl  font-kanit shadow-lg  hero-title" style={{borderRadius: '16px 0px'}}>All Service</button>
                    </div>
                    <div className="flex-1">
                        {/* image style */}
                        <div className="flex flex-col items-center gap-3 relative hero-title">
                            <div className="flex items-center gap-5">
                                <div className="border-8 border-white" style={{transform: 'skewy(6deg)'}}>
                                    <img className="w-[250px] object-cover  h-[280px]" src={img1} />
                                </div>
                                <div className="border-8 shadow border-white z-30 mb-16" style={{transform: 'skewy(6deg)'}}>
                                    <img className="w-[250px] object-cover h-[280px]" src={img3} />
                                </div>
                            </div>
                            <div className="-mt-40 shadow border-8 z-20 border-white" style={{transform: 'skewy(6deg)'}}>
                                <img className="lg:w-[250px] object-cover lg:h-[280px] w-[180px] h-[230px]" src={img2} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BannerDesign;