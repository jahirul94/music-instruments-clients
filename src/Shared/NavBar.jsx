import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [theme, setTheme] = useTheme();

    // toggle start
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }


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
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to="/classes">Classes</NavLink></li>
        {user ? <> <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><button onClick={handleLogOut}>Logout</button></li></> :
            <li><NavLink to="/login">Login</NavLink></li>}
    </>
    return (
        <div className={`${theme === "light" ? "navbar bg-base-300 font-bold px-8 py-2 light" :
            "navbar bg-base-300 font-bold px-8 py-2 text-slate-300"} sticky top-0 z-50 font-[Roboto]`}>

            <div className="navbar-start">
                <div className="dropdown z-10">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg- bg-base-100 rounded-box w-52 text-black">
                        {navItem}
                    </ul>
                </div>

                <Link to="/"><img className="ms-4 w-24 h-12" src="https://i.ibb.co/4WGDd4s/379919962-674924747919702-4777339216054440254-n.png" alt="" /></Link>
                <Link to="/" className="ms-4 normal-case lg:text-2xl sm:text-lg">Rocking Music Instrument</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end me-4" >
                <div className="flex flex-col">
                    <div className="form-control mx-4">
                        <label className="swap swap-rotate">
                            <input onChange={handleToggle} checked={theme === "light" ? false : true} type="checkbox" />
                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            {/* sun icon */}
                            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        </label>
                    </div>
                </div>
                <img className="rounded-full lg:w-12 lg:h-12 sm:w-10 h-10" title={user?.displayName}
                    src={user?.photoURL ? user?.photoURL : "https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"} alt="" />
            </div>
        </div>
    );
};

export default NavBar;