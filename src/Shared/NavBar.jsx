import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
    const { user, logOut } = useAuth();
    // console.log(user);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out !'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Done!',
                            'Your Account Logout Successfully.',
                            'success'
                        )
                     })
                    .catch((err) => { console.log(err.message) })
            }
        })
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {user ? <li><button onClick={handleLogOut}>Logout</button></li> :
            <li><Link to="/login">Login</Link></li>}
    </>
    return (
        <div className="navbar bg-[#572db9] text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Rocking Music Instrument</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-14 h-14 rounded-[50%]" title={user?.displayName} src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default NavBar;