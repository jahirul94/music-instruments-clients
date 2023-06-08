import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_token = import.meta.env.VITE_IMAGE_TOKEN;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

const AddAClass = () => {
    const { user } = useAuth();
    const [ axiosSecure ] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
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
                    const { className , price, instructorEmail , instructorName , availableSeats } = data;
                    const newClass = { className , price: parseFloat(price), instructorEmail , instructorName , image: imgURL , availableSeats }
                    console.log(newClass);
                    axiosSecure.post("/instructors", newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Your New Item has been Uploaded',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset();
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content min-w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("className", { required: true })} placeholder="class name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input type="text" {...register("instructorName", { required: true })} placeholder="instructor name" defaultValue={user?.displayName} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input type="text" {...register("instructorEmail", { required: true })} defaultValue={user?.email} placeholder="instructor email" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input type="text" {...register("availableSeats", { required: true })} placeholder="available seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Class" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;