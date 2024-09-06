import { Helmet } from "react-helmet-async";
import medicine from "../../assets/medicineImg/medicine1.png"
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

//6LdSZyQqAAAAALVgjyeu1W798y50VddwwgO5puit

const SignUp = () => {

    const { createUser, googleLogin, updateUserProfile } = useAuth();
    const [showPass, setShowPass] = useState(false)
    const [captchaValue, setCaptchaValue] = useState(null);
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

            const userInfo = {name: data.name, email: data.email, image: data.photoURL};
            const result = await axiosPublic.post('/users', userInfo)
            console.log('user added to the database---->', result);

        } catch (error) {
            console.log(error);
        } finally {
            toast.success('Sign Successful...');
        }
    }


    return (
        <>
            <Helmet>
                <title> HealthFusion | Sign Up </title>
            </Helmet>
            <div className="h-screen lg:flex font-kanit">
                {/* banner */}
                <div className="h-full lg:w-1/2 bg-[#003D8D] flex justify-center items-center">
                    <img className="max-h-[580px] mx-w-[570px]" src={medicine} />
                </div>
                {/* sing up option */}
                <div className="h-full lg:w-1/2 bg-white flex justify-center items-center flex-col space-y-6">
                    <h1 className="text-2xl text-[#0A0808] lg:mt-0 mt-64  font-medium">Sign Up To HealthFusion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" ">
                            <div className="lg:flex gap-5">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="input input-bordered w-96 max-w-xs bg-slate-100" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </label>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </div>
                                    <input
                                        {...register("photoURL", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Photo URL"
                                        className="input input-bordered w-96 max-w-xs bg-slate-100" />
                                    {errors.photoURL && <span className="text-red-600">User Name is required</span>}
                                </label>
                            </div>
                            <div className="lg:flex gap-5">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input
                                        {...register("email", { required: true })}
                                        type="text"
                                        placeholder="Enter Your Email"
                                        className="input input-bordered w-96 max-w-xs bg-slate-100" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </label>
                                <label className="form-control w-full max-w-xs relative">
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
                                            className="input input-bordered  w-96 max-w-xs bg-slate-100" />
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
                            <div className="mt-6">
                                <ReCAPTCHA
                                    sitekey="6LdSZyQqAAAAALVgjyeu1W798y50VddwwgO5puit"
                                    onChange={(val) => setCaptchaValue(val)}
                                />
                            </div>
                            <input
                                type="submit"
                                value={'Create Account'}
                                disabled={!captchaValue}
                                className="w-full py-3 mt-6 bg-[#fa966b] cursor-pointer text-white rounded-md" />
                        </div>
                    </form>
                    <div className="w-full lg:px-16 px-10 space-y-3">
                        <button
                            onClick={googleLogin}
                            className="border-2   rounded-md hover:rounded-full border-[#fa966b] py-3 w-full  flex justify-center items-center "><FcGoogle size={25} />
                        </button>
                        <p className="text-[#6C6B6B]">Already registered? Go to <Link to={'/login'}><span className="text-[#fa966b]">SIGN IN</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;