import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const StudentDashboard = () => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([])
    const url = `http://localhost:5000/studentClasses?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [url])
    console.log(cartItems);
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
                                <td>${cartItem.price}</td>
                                <td></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default StudentDashboard;