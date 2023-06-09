import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaEdit } from 'react-icons/fa';
import useFeedback from "../../../hooks/useFeedback";
import { useState } from "react";


const InstructorClasses = () => {
    const [ feedbacks ] = useFeedback();
    const [feedback , setFeedback] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorClass?email=${user?.email}`);
            return res.data;
        }
    })

    const handleShowFeedback = (id) => {
      const item = feedbacks.filter(f => f.itemId == id)
      setFeedback(item[0]);
    }
    return (
        <div className="mx-4 my-4">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((sc, index) => <tr key={sc._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={sc.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{sc.className}</td>
                                <td className="text-right">${sc.price}</td>
                                <td className="text-primary">{sc.status}</td>
                                <td>0</td>
                                <td onClick={() => window.my_modal_5.showModal()}><button onClick={() => handleShowFeedback(sc._id)} className="underline">feedback</button></td>
                                <td><FaEdit className="text-xl"></FaEdit></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                {/* Open the modal using ID.showModal() method */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                       <p className="text-lg mx-4 ">{feedback?.feedback} </p>
                        <div className="modal-action">
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default InstructorClasses;