import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import usePageTItle from "../../hooks/usePageTItle";
import useTheme from "../../hooks/useTheme";
import animation from '../../../public/Lottie/animation_ln5qxg20.json';
import Lottie from "lottie-react";

const Register = () => {
    usePageTItle("Sign up")
    const { createUser, updateUserProfile } = useAuth();
    const [theme] = useTheme();
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    //   image hosting url 
    const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            if (user) { console.log(user) }
                            // console.log(user);
                            updateUserProfile(data.name, imgURL)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email, role: "regular", image: imgURL }
                                    fetch('https://music-instrument-server-navy.vercel.app/users', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json'
                                        },
                                        body: JSON.stringify(saveUser)
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.insertedId) {
                                                reset();
                                                Swal.fire({
                                                    position: 'center',
                                                    icon: 'success',
                                                    title: 'User created successfully.',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                });
                                                navigate('/');
                                            }
                                        })



                                })
                                .catch(err => console.log(err.message))
                        })
                        .catch(err => {
                            setError(err.message)
                        })
                }
            })
    };

    return (
        <div className={`${theme === "light" ? "min-h-screen" : "min-h-screen text-slate-300"} w-full my-8 md:w-3/4 md:mx-auto`}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full p-4 md:p-0 md:w-1/2">
                    <Lottie animationData={animation} loop={true} className="w-full md:h-[750px] md:me-8" />
                </div>
                <div className="shadow-2xl rounded-xl p-4 w-full md:m-4 md:w-1/2">
                    <h1 className="text-2xl md:text-4xl text-center font-bold lg:pt-4 lg:pb-2">Sign Up now!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold`}>Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" {...register("password", { minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters or Upper</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold`}>Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <p className="text-red-600">{error}</p>

                        <p className={`${theme === "light" ? "text-black" : "text-slate-300"} font-semibold py-2`}> Already have an Account ? <Link to="/login" className="text-blue-600 underline underline-offset-4 font-semibold">Login</Link></p>

                        <input className={`${theme === "light" ? "btn btn-outline" : "btn btn-outline text-slate-300"}`} type="submit" value="Sign up" />

                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;