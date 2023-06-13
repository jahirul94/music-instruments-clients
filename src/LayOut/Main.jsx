import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div className="bg-[#572db9]">
            <NavBar></NavBar>
            <div className="px-10"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;