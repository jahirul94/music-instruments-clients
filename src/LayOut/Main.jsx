import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";
import Slider from "../Pages/Home/Slider/Slider";

const Main = () => {
    const location = useLocation();

    return (
        <div>
            <NavBar></NavBar>
            {location.pathname === "/" && <Slider></Slider>}
            <div className="lg:w-11/12 mx-auto"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;