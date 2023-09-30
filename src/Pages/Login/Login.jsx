import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import usePageTItle from "../../hooks/usePageTItle";
import useTheme from "../../hooks/useTheme";
import animation from '../../../public/Lottie/animation_ln5sm9oy.json';
import Lottie from "lottie-react";

const Login = () => {
    usePageTItle("Login")
    const [theme] = useTheme();
    const [error, setError] = useState("")
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                if (result) {
                    Swal.fire(
                        'Done!',
                        'Your Account Login Successfully.',
                        'success'
                    )
                    setError('')
                    reset();
                    navigate("/")
                }
            })
            .catch(err => {
                setError(err.message);
            })
    };

    return (
        <div className={theme === "light" ? "min-h-screen text-black" : "min-h-screen text-slate-300"}>
            <div className="flex flex-col md:flex-row md:items-center w-full mx-auto md:w-3/4">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={animation} loop={true} className="w-full md:h-[750px] md:me-8" />
                </div>
                <div className="w-full md:w-1/2 shadow-2xl h-[500px]">
                    <h1 className="text-5xl font-bold py-4 text-center cursor-pointer">Login now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold`}>Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold`}>Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                            <label className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold py-2`}>
                                <p> New at here ? <Link to="/register" className="text-blue-600 underline underline-offset-4 font-semibold">Sign Up </Link></p>
                            </label>
                            <p className="text-red-600">{error}</p>
                        </div>
                        <input className={theme === "light" ? "btn btn-outline" : "btn btn-outline text-slate-300"} type="submit" value="Login" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;