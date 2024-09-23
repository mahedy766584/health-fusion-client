/* eslint-disable react/no-unescaped-entities */

import Container from "../../Components/Container/Container";
import aboutImg from "../../assets/ourDoctor/doctor1.jpg";

const About = () => {
    return (
        <Container>
            <div className="mt-28 lg:flex gap-10 ">
                <div className="w-full">
                    <img className="object-cover rounded-md" src={aboutImg} />
                </div>
                <div className="space-y-9 w-full mt-6">
                    <h1
                        className="lg:text-4xl text-2xl text-center font-medium font-kanit text-gray-700">About to <span className="text-red-400">Health</span >Fusion</h1>
                    <div className="space-y-7 text-lg text-gray-800 font-poppins">
                        <p>HealthFusion Medical Center was best known for its cloud-based electronic health record (EHR) platform, MediTouch, which was designed for small healthcare practices. The system, optimized for mobile use, allows medical professionals to manage patient records, billing, practice management, and other administrative tasks all through an iPad or tablet.</p>

                        <p>HealthFusion was founded in 1998 and gained traction by offering a user-friendly solution specifically designed for smaller medical practices that lack the extensive IT resources of larger healthcare providers. In 2015, HealthFusion was acquired by Quality Systems, Inc. (the parent company of NextGen Healthcare) for $165 million. This acquisition was aimed at integrating MediTouch with NextGen's enterprise-level systems, while continuing to focus on increasing physician efficiency by minimizing the time spent on data entry and system management.</p>

                        <p>If you're looking for more current details or services related to HealthFusion's platform, they are now under NextGen Healthcare, offering products like their EHR, medical billing, and patient management tools tailored for smaller practices</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;