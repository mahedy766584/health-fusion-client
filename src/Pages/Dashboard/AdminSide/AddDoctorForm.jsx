import ImageUploadingSystem from "./ImageUploadingSystem";
import { useForm } from "react-hook-form"
import { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctorForm = () => {

    const [isImage, setIsImage] = useState("")

    const axiosSecure = UseAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        // console.log(data, 'image file ---->', { image: isImage})

        // // image uploading;
        const imageFile = { image: isImage }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log('with image url----->', res.data.data.display_url);
        if (res.data.success) {

            const doctorIdentity = {
                name: data.name,
                email: data.email,
                category: data.category,
                location: data.location,
                review: parseFloat(data.review),
                work_and_experiencea: data.work_and_experience,
                services: data.services,
                occupation: data.occupation,
                about: data.about,
                profile_image: res.data.data.display_url,
            }
            console.log(doctorIdentity);

            const doctorRes = await axiosSecure.post('/doctors', doctorIdentity);
            console.log(doctorRes);
            if (doctorRes.data.insertedId) {
                reset();
                toast.success(`You have successfully added ${data.name}, thank you`)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 grid-cols-1  gap-7 font-kanit mt-6">
                <div className="space-y-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name★</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="enter name"
                            className="input input-bordered w-full" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email★</span>
                        </div>
                        <input
                            {...register("email", { required: true })}
                            type="emil"
                            placeholder="enter email"
                            className="input input-bordered w-full" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Location★</span>
                        </div>
                        <input
                            {...register("location", { required: true })}
                            type="emil"
                            placeholder="enter location"
                            className="input input-bordered w-full" />
                        {errors.location && <span className="text-red-600">Location is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category★</span>
                        </div>
                        <input
                            {...register("category", { required: true })}
                            type="emil"
                            placeholder="enter location"
                            className="input input-bordered w-full" />
                        {errors.location && <span className="text-red-600">Category is required</span>}
                    </label>
                    {/* https://youtu.be/SVGOmIhDRqc */}
                </div>
                <div className="space-y-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Services★</span>
                        </div>
                        <input
                            {...register("services", { required: true })}
                            type="emil"
                            placeholder="enter services"
                            className="input input-bordered w-full" />
                        {errors.services && <span className="text-red-600">Services is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Occupation★</span>
                        </div>
                        <input
                            {...register("occupation", { required: true })}
                            type="emil"
                            placeholder="enter Occupation"
                            className="input input-bordered w-full" />
                        {errors.occupation && <span className="text-red-600">Occupation is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Work and Experience★</span>
                        </div>
                        <input
                            {...register("work_and_experience", { required: true })}
                            type="emil"
                            placeholder="enter Experience"
                            className="input input-bordered w-full" />
                        {errors.work_and_experience && <span className="text-red-600">Work is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Review★</span>
                        </div>
                        <select defaultValue={'default'} className="select select-bordered" {...register("review", { required: true })}>
                            <option disabled value={'default'}>Select Review</option>
                            <option value={4.9 / 2}>4.9/2</option>
                            <option value={4.2 / 5}>4.2/5</option>
                            <option value={4.3 / 5}>4.3/5</option>
                            <option value={4.4 / 5}>4.4/5</option>
                            <option value={4.5 / 5}>4.5/5</option>
                        </select>
                        {errors.review && <span className="text-red-600">Review is required</span>}
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-kanit">About★</span>
                    </div>
                    <textarea
                        {...register("about", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="enter about doctor"></textarea>
                    {errors.about && <span className="text-red-600">About is required</span>}
                </label>
            </div>

            {/* image uploading styles */}
            <ImageUploadingSystem
                isImage={isImage}
                setIsImage={setIsImage}
            />
            <div className="text-center mt-10 w-full">
                <input type="submit" value="Add a Doctor" className="bg-[#003D8D] cursor-pointer w-full py-2 text-lg  rounded text-white font-medium" />
            </div>
        </form>
    );
};

export default AddDoctorForm;