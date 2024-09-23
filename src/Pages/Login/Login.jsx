import { Helmet } from "react-helmet-async";
import medicine from "../../assets/medicineImg/medicine1.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { loginWithUser, googleLoginUser } = useAuth();
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data);
            // eslint-disable-next-line no-unused-vars
            const res = await loginWithUser(data.email, data.password)
            console.log(res);
            navigate(from, { replace: true });
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            toast.success('Login Successful');
        }
    }

    const handleGoogleLogin = () => {
        googleLoginUser()
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                // console.log(res.user);
                toast.success('Login Successful');
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            <Helmet>
                <title> HealthFusion | Login </title>
            </Helmet>
            <div className="h-screen lg:flex font-kanit">
                {/* banner */}
                <div className="h-screen lg:w-1/2 bg-[#003D8D] flex justify-center items-center">
                    <img className="max-h-[400px] mx-w-[570px]" src={medicine} />
                </div>
                {/* sing up option */}
                <div className="h-full lg:px-8 px-6   lg:w-1/2 bg-white flex justify-center  flex-col space-y-8">
                    <h1
                        className="lg:text-4xl text-2xl text-center font-medium font-kanit text-gray-700">Sign Up to <span className="text-red-400">Health</span >Fusion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input
                                    {...register("email", { required: true })}
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="outline-none border-[#fa966b] border rounded px-4 font-medium py-3  bg-slate-100 w-full" />
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
                            <input
                                type="submit"
                                value={'Create Account'}
                                className="w-full py-3 mt-6 bg-[#fa966b] cursor-pointer text-white rounded-md" />
                        </div>
                    </form>
                    <div className="w-full space-y-3 ">
                        <button
                            onClick={handleGoogleLogin}
                            className="border-2   rounded-md hover:rounded-full border-[#fa966b] py-3 w-full duration-500 ease-in  flex justify-center items-center "><FcGoogle size={25} />
                        </button>
                        <p className="text-[#6C6B6B]">Already registered? Go to <Link to={'/signUp'}><span className="text-[#fa966b]">SIGN IN</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;