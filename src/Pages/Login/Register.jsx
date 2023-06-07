import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setError("Password and Confirm Password don't match")
            return
        }
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name , email: data.email }
                        fetch('http://localhost:5000/users', {
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
                                        position: 'top-end',
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
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" {...register("password", { minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters or Upper</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one special character.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword")} placeholder="confirm-password" className="input input-bordered" />
                        </div>
                        <p className="text-red-600">{error}</p>
                        <p> Already have an Account ? <Link to="/login">Login</Link></p>
                        <input className="btn btn-primary" type="submit" value="Sign up" />
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;