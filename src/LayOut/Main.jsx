import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <div className="px-10 bg-[#572db9]">
            <NavBar></NavBar>
              <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;