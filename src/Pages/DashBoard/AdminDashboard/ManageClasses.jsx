import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";
import { useRef, useState } from "react";
import usePageTItle from "../../../hooks/usePageTItle";
import useTheme from "../../../hooks/useTheme";


const ManageClasses = () => {

    usePageTItle("Manage Classes")
    const [classes, refetch] = useClasses();
    const [theme] = useTheme();

    const ref = useRef();
    const [updateId, setUpdateId] = useState(null)
    const [axiosSecure] = useAxiosSecure();


    const handleAction = (action, user) => {
        axiosSecure.patch(`/adminAction/${user?._id}?action=${action}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `This Item has been ${action}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
    }

    const handleSubmitForm = () => {
        const feedback = { feedback: ref.current.value, itemId: updateId }
        axiosSecure.post('/feedback', { feedback })
            .then(data => {
                if (data.data.modifiedCount > 0 || data.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `feedback send successfully!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }

    return (
        <div className={`${theme === "light" ? "text-black" : "text-slate-300"} px-6 my-6`}>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className={`${theme === "light" ? "text-black" : "text-slate-300"}`}>
                            <th className="text-lg font-bold">#</th>
                            <th className="text-lg font-bold">Class Image</th>
                            <th className="text-lg font-bold">Class name</th>
                            <th className="text-lg font-bold">Instructor name</th>
                            <th className="text-lg font-bold">Instructor email</th>
                            <th className="text-lg font-bold"> Available seats</th>
                            <th className="text-lg font-bold">Price</th>
                            <th className="text-lg font-bold">Status</th>
                            <th className="text-center text-lg font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((sc, index) => <tr key={sc._id}>
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
                                <td>{sc.instructorName}</td>
                                <td>{sc.instructorEmail}</td>
                                <td>{sc.availableSeats}</td>
                                <td className="text-right">${sc.price}</td>
                                <td className="text-primary">{sc.status}</td>
                                <td>
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleAction("approve", sc)} disabled={sc.status === "approved" || sc.status === "denied"} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline btn-sm`}>Approve</button>
                                        <button onClick={() => handleAction("deny", sc)} disabled={sc.status === "approved" || sc.status === "denied"} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline btn-sm`}>Deny</button>
                                        <button className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline btn-sm`} onClick={() => window.my_modal_3.showModal()} onFocus={() => setUpdateId(sc._id)}>Send Feedback</button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <textarea ref={ref} name="feedback" className="textarea w-3/4" placeholder="Feedback"></textarea><br />
                    <input type="submit" onClick={() => handleSubmitForm()} className="btn btn-outline btn-sm my-2" value="Send" />
                </form>
            </dialog>
        </div>
    );
};

export default ManageClasses;