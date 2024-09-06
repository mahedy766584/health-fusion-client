import { Helmet } from "react-helmet-async";
import HomeBanner from "./HomeBanner";
import OurServices from "./OurServices/OurServices";
import ContactDetails from "./ContactDetails/ContactDetails";
import OurReview from "./OurReview/OurReview";
import DoctorsProfile from "./DoctorsProfile/DoctorsProfile";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> HealthFusion | Home </title>
            </Helmet>
            <div className="lg:space-y-24 space-y-8">
                <HomeBanner />
                <OurServices />
                <ContactDetails />
                <OurReview />
                <DoctorsProfile/>
                <ContactUs/>
            </div>
        </div>
    );
};

export default Home;