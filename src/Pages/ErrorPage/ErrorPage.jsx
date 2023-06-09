import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg)`}}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div>
                <div className="ms-56 -mt-12">
                    <Link to="/"><button className="btn btn-outline"><FaArrowLeft></FaArrowLeft>Go back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;