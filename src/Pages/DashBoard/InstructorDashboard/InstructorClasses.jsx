import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaEdit } from 'react-icons/fa';

const InstructorClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { data } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/instructorClass?email=${user?.email}`);
            return res.data;
        }
    })

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
                            data.map((sc, index) => <tr key={sc._id}>
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
                                <td>pending</td>
                                <td>0</td>
                                <td>Feedback</td>
                                <td><FaEdit className="text-xl"></FaEdit></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorClasses;