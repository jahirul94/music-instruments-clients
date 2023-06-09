import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructors from "../../../hooks/useInstructors";
import { FaAd, FaArrowRight, FaBookOpen, FaBookReader, FaBookmark, FaHome, FaUserFriends, FaUsers } from "react-icons/fa";

const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#572db9] text-white pt-20">
                    {
                        isAdmin && <><li><Link className="text-lg" to="/dashboard/manageClasses"><FaBookReader></FaBookReader> Manage Classes</Link></li>
                            <li><Link className="text-lg" to="/dashboard/manageUsers"><FaUserFriends></FaUserFriends> Manage Users</Link></li></> ||

                        isInstructor && <> <li><Link className="text-lg" to="/dashboard/addAClass"><FaAd></FaAd> Add a Class</Link></li>
                            <li><Link className="text-lg" to="/dashboard/instructorClasses"><FaBookReader></FaBookReader> My Classes </Link></li></> ||

                        <><li><Link className="text-lg" to="/dashboard/studentdashboard"><FaBookmark></FaBookmark> My Selected Classes</Link></li>
                            <li><Link className="text-lg"><FaArrowRight></FaArrowRight> My Enrolled Classes</Link></li></>
                    }
                    <div className="divider"></div>
                    <li><Link className="text-lg" to="/"><FaHome></FaHome> Home</Link></li>
                    <li><Link className="text-lg" to="/classes"><FaBookOpen></FaBookOpen> All Classes</Link></li>
                    <li><Link className="text-lg" to="/instructors"><FaUsers></FaUsers> Instructors</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;