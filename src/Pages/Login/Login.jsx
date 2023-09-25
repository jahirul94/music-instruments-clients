import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import usePageTItle from "../../hooks/usePageTItle";
import useTheme from "../../hooks/useTheme";

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
        <div className={theme === "light" ? "hero min-h-screen" : "hero min-h-screen text-slate-300"}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">To securely access your account, please enter your registered email address and password in the designated fields. We take your privacy seriously and employ industry-standard encryption protocols to protect your sensitive information. Rest assured that your login credentials are safe with us.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === "light" ? "label-text" : "label-text text-slate-300"}>Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={theme === "light" ? "label-text" : "label-text text-slate-300"}>Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p> New at here ? <Link to="/register">Sign Up </Link></p>
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