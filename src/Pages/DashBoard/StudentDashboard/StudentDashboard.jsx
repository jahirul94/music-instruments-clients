import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const StudentDashboard = () => {
    const [cartItems , reload , setReload] = useCart();
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/studentClasses/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'This class delete from cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setReload(!reload)
                }
            })
    }
    //   total price function 
    const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="mx-10 mt-14 mb-6">
            <div className="flex justify-evenly items-center">
                <p className="text-xl font-bold">Total Price : ${totalPrice} </p>
                <Link to="/dashboard/payment"><button className="btn btn-outline btn-sm">Pay</button></Link>
            </div>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-lg font-bold">#</th>
                            <th className="text-lg font-bold">Picture</th>
                            <th className="text-lg font-bold">Class Name</th>
                            <th className="text-lg font-bold">Instructor</th>
                            <th className="text-lg font-bold">Price</th>
                            <th className="text-lg font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems?.map((cartItem, index) => <tr key={cartItem._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cartItem.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cartItem.className}</td>
                                <td>{cartItem.instructorName}</td>
                                <td className="text-right">${cartItem.price}</td>
                                <td><button onClick={() => handleDelete(cartItem._id)} className="btn btn-outline"><FaTrash></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default StudentDashboard;