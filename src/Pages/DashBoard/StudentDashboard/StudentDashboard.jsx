import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";

const StudentDashboard = () => {
    const [reload , setReload] = useState(false)
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([])
    const url = `http://localhost:5000/studentClasses?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [url , reload])
    const handleDelete = (id) =>{
          fetch(`http://localhost:5000/studentClasses/${id}` , {
            method : "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount>0){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'this class delete from cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setReload(!reload)
            }
          })
    }
    
    return (
        <div className="mx-10 my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems?.map((cartItem , index) => <tr key={cartItem._id}>
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
                                <td><button onClick={()=>handleDelete(cartItem._id)}  className="btn btn-outline"><FaTrash></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default StudentDashboard;