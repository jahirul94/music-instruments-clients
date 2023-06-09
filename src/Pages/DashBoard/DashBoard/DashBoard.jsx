import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInstructors from "../../../hooks/useInstructors";

const DashBoard = () => {
    const [isAdmin] = useAdmin() ;
    const [isInstructor] = useInstructors();
    

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                   <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                 {
                  isAdmin && <><li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
                  <li><Link to="/dashboard/manageUsers">Manage Users</Link></li></> ||
                  
                   isInstructor && <> <li><Link to="/dashboard/addAClass">Add a Class</Link></li>
                   <li><Link to="/dashboard/instructorClasses">My Classes </Link></li></> ||

                   <><li><Link to="/dashboard/studentdashboard">My Selected Classes</Link></li>
                     <li><Link>My Enrolled Classes</Link></li></>
                 } 
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;