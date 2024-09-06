import { Helmet } from "react-helmet-async";
import medicine from "../../assets/medicineImg/medicine1.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Login = () => {

    const { loginUser, googleLogin } = useAuth();
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        try {
            // console.log(data);
            // eslint-disable-next-line no-unused-vars
            const res = await loginUser(data.email, data.password)
            // console.log(res);
            navigate(from, { replace: true });
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            toast.success('Login Successful');
        }
    }

    const handleGoogleLogin = () => {
        googleLogin()
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
                <div className="h-full lg:w-1/2 bg-[#003D8D] flex justify-center items-center">
                    <img className="max-h-[580px] mx-w-[570px]" src={medicine} />
                </div>
                {/* sing up option */}
                <div className="h-full lg:w-1/2 bg-white flex justify-center items-center flex-col space-y-6">
                    <h1 className="text-2xl lg:mt-4 mt-52 text-[#0A0808] font-medium">Sign In To HealthFusion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
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
                            <input
                                type="submit"
                                value={'Create Account'}
                                className="w-full py-3 mt-6 bg-[#fa966b] cursor-pointer text-white rounded-md" />
                        </div>
                    </form>
                    <div className="mt-6 space-y-6 py-5">
                        <button
                            onClick={handleGoogleLogin}
                            className="border-2 rounded-md border-[#fa966b] py-3 w-96 max-w-xs flex justify-center items-center ">
                            <FaGoogle />
                        </button>
                        <p
                            className="text-[#6C6B6B]">Please register at first. Go to <Link to={'/signUp'}>
                                <span className="text-[#fa966b]">SIGN UP</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;