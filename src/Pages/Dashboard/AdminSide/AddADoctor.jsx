import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import AddDoctorForm from "./AddDoctorForm";


const AddADoctor = () => {

    return (
        <div className="lg:px-8 px-3 py-4 lg:mt-0 mt-12">
            <SectionTitle heading={'Add a New Doctor'} />
            {/* adding form */}
            <AddDoctorForm/>
        </div>
    );
};

export default AddADoctor;