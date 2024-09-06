import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import doctorImg from "../../../assets/ourDoctor/doctor1.jpg"
import ServicesTab from "./ServicesTab/ServicesTab";
import { Link } from "react-router-dom";

const OurServices = () => {
    return (
        <Container>
            <div className="lg:flex items-center justify-center gap-8  lg:h-[1030px]">
                <div className="flex-1">
                    <img className="w-[658px] lg:h-[1020px] rounded-md" src={doctorImg} />
                </div>
                <div className="flex-1 lg:text-start text-center">
                    <SectionTitle heading={'Our Services'} />
                    <p className="font-kanit text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <ServicesTab />
                    <Link to={'/appointment'}>
                        <button style={{ borderRadius: '10px 0px' }} className="font-kanit outline outline-[#F7A582] px-8 hover:text-gray-800 py-2 mt-6 hover:outline-none hover:bg-[#F7A582] text-[#F7A582]">All Service</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default OurServices;