import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";
import usePageTItle from "../../../hooks/usePageTItle";
import useTheme from "../../../hooks/useTheme";


const ManageUsers = () => {
    usePageTItle("Manage Users")
    const [axiosSecure] = useAxiosSecure();
    const [theme] = useTheme();

    const [data, refetch] = useUser();
    const handleAction = (action, user) => {
        axiosSecure.patch(`/action/${user?._id}?action=${action}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
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
        <div className={`${theme === "light" ? "text-black" : "text-slate-300"} overflow-x-auto mx-8 my-8`}>
            <table className="table">
                <thead>
                    <tr className={`${theme === "light" ? "text-black" : "text-slate-300"}`}>
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
                            <td><button onClick={() => handleAction("makeInstructor", user)} disabled={user.role === "instructor"} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline btn-sm`}>Make Instructor</button></td>
                            <td><button onClick={() => handleAction("makeAdmin", user)} disabled={user.role === "admin"} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline btn-sm`}> Make Admin</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;