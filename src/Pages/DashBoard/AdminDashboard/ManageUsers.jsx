// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";


const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [data , refetch ] = useUser(); 
    const handleAction = (action , user ) =>{
         axiosSecure.patch(`/action/${user?._id}?action=${action}`)
         .then(data =>{
            if(data.data.modifiedCount > 0 ){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user?.name} is ${action.split('make')[1]} from now !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                refetch();
            }
         })
    }


    return (
        <div className="overflow-x-auto mx-8 my-8">
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-lg font-bold">#</th>
                        <th className="text-lg font-bold">User Name</th>
                        <th className="text-lg font-bold">User Email</th>
                        <th className="text-lg font-bold">Make Instructor</th>
                        <th className="text-lg font-bold">Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((user, index) => <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => handleAction("makeInstructor" , user)} disabled={user.role === "instructor"} className="btn btn-outline btn-sm">Make Instructor</button></td>
                            <td><button onClick={() => handleAction("makeAdmin" , user)} disabled={user.role === "admin"} className="btn btn-outline btn-sm"> Make Admin</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;