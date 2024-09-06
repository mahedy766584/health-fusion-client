import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import AddDoctorForm from "./AddDoctorForm";


const AddADoctor = () => {

    return (
        <div className="px-8 py-4 mt-16">
            <SectionTitle heading={'Add a New Doctor'} />
            {/* adding form */}
            <AddDoctorForm/>
        </div>
    );
};

export default AddADoctor;