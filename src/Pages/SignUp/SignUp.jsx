import { Helmet } from "react-helmet-async";
import medicine from "../../assets/medicineImg/medicine1.png"
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

//6LdSZyQqAAAAALVgjyeu1W798y50VddwwgO5puit

const SignUp = () => {

    const { createUser, googleLoginUser, updateUserProfile } = useAuth();
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await createUser(data.email, data.password)
            console.log(res);
            updateUserProfile(data.name, data.photoURL)
            navigate('/')
            reset();

            const userInfo = { name: data.name, email: data.email, image: data.photoURL };
            const result = await axiosPublic.post('/users', userInfo)
            console.log('user added to the database---->', result);

        } catch (error) {
            console.log(error);
        } finally {
            toast.success('Sign Successful...');
        }
        console.log(data);
    }


    return (
        <>
            <Helmet>
                <title> HealthFusion | Sign Up </title>
            </Helmet>
            <div className="h-screen lg:flex font-poppins text-gray-700">
                {/* banner */}
                <div className="h-screen lg:w-1/2 bg-[#003D8D] flex justify-center items-center">
                    <img className="max-h-[400px] mx-w-[570px]" src={medicine} />
                </div>
                {/* sing up option */}
                <div className="h-screen  flex flex-col justify-center lg:mt-0 mt-20  lg:w-1/2 bg-white px-8 space-y-6">
                    <h1
                        className="lg:text-4xl text-2xl text-center font-medium font-kanit text-gray-700">Sign Up to <span className="text-red-400">Health</span >Fusion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" space-y-3 font-normal">
                            <div className="lg:flex gap-5">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className=" outline-none border-[#fa966b] border rounded px-4 font-medium py-3  bg-slate-100 w-full" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </div>
                                    <input
                                        {...register("photoURL", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Photo URL"
                                        className="outline-none border-[#fa966b] border rounded px-4 font-medium py-3  bg-slate-100 w-full" />
                                    {errors.photoURL && <span className="text-red-600">User Name is required</span>}
                                </label>
                            </div>
                            <div className="lg:flex gap-5">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input
                                        {...register("email", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className=" outline-none border-[#fa966b] border rounded px-4 font-medium py-3  bg-slate-100 w-full" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </label>
                                <label className="form-control w-full relative">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <input
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                            })}
                                            type={`${showPass ? "text" : "password"}`}
                                            placeholder="Enter Your Password"
                                            className=" outline-none border-[#fa966b] border rounded px-4 font-medium py-3  bg-slate-100 w-full" />
                                        {errors.password && <span className="text-red-600">Password is required</span>}
                                        <p
                                            onClick={() => setShowPass(!showPass)}
                                            className={`absolute right-4 cursor-pointer`}>
                                            {
                                                showPass ? <IoEyeOffOutline /> : <IoEyeOutline />
                                            }
                                        </p>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value={'Create Account'}
                                    // disabled={!captchaValue}
                                    className="w-full py-3 mt-3 bg-[#fa966b] cursor-pointer text-white rounded-md" />
                            </div>
                        </div>
                    </form>
                    <div className="w-full space-y-3 ">
                        <button
                            onClick={googleLoginUser}
                            className="border-2   rounded-md hover:rounded-full border-[#fa966b] py-3 w-full duration-500 ease-in  flex justify-center items-center "><FcGoogle size={25} />
                        </button>
                        <p className="text-[#6C6B6B]">Already registered? Go to <Link to={'/login'}><span className="text-[#fa966b]">SIGN IN</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;