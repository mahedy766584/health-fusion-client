/* eslint-disable react/prop-types */
import { Input, Stack } from "@chakra-ui/react";
import { format } from "date-fns";
import useAuth from "../../Hooks/useAuth"
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import toast from "react-hot-toast";

const Modal = ({ services, date, id }) => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset } = useForm()

    console.log(services.price);

    const onSubmit = async (data) => {
        // console.log(data);
        const appointmentItem = {
            isDateS: data.isDateS,
            isTimes: data.isTimes,
            isNames: data.isNames,
            isNumbers: data.isNumbers,
            isEmail: data.isEmails,
            serviceName: data.serviceName,
            servicesId: id,
            price: services.price,
        }
        const res = await axiosPublic.post('/appointment', appointmentItem)
        reset();
        if (res.data.insertedId) {
            toast.success('You have successfully made an appointment')
        }
        console.log(res.data);

        console.log(appointmentItem);

    }

    // console.log(services);

    return (


        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn font-kanit bg-[#F7A582] px-6 py-2 hover:bg-[#F7A582] text-white rounded-md"
                onClick={() => document.getElementById(id).showModal()}>
                Book Appointment
            </button>
            <dialog id={id} className="modal">
                <div className="modal-box font-kanit">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn text-white hover:bg-[#003D8D] text-2xl bg-[#003D8D] btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Cavity Protection</h3>
                    <h1 className="mt-4 text-red-400 font-normal text-lg">Price: {services?.price}$</h1>
                    <form
                        className="mt-10"
                        onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={6}>
                            <Input
                                // onBlur={e => setIsDate(e.target.value)}
                                {...register("isDateS", { required: true })}
                                defaultValue={`${format(date.startDate, 'MMM, dd, yyy')}`}
                                size='lg'
                                className="focus:bg-[#E6E6E6]" />
                            <Input
                                {...register("isTimes", { required: true })}
                                defaultValue={services?.service_time}
                                placeholder='large size'
                                size='lg' />
                            <Input
                                {...register("isNames", { required: true })}
                                defaultValue={user?.displayName}
                                placeholder='Full Name'
                                size='lg' />
                            <Input
                                {...register("isNumbers", { required: true })}
                                type="number"
                                placeholder='Number'
                                size='lg' />
                            <Input
                                {...register("isEmails", { required: true })}
                                defaultValue={user?.email}
                                placeholder='Email'
                                size='lg' />
                            <Input
                                {...register("serviceName", { required: true })}
                                defaultValue={services?.name}
                                placeholder='Service'
                                size='lg' />
                            <input
                                type="submit"
                                value={'Submit'}
                                className="w-full text-white bg-[#003D8D]  py-3 rounded-md"
                            />
                        </Stack>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;