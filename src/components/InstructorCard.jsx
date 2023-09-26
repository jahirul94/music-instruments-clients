import useTheme from "../hooks/useTheme";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    const [theme] = useTheme();

    return (
        <div className={`${theme === "light" ? "text-black" : "text-slate-300"} rounded-lg card card-compact shadow-2xl bg-base-100`}>
            <figure><img src={image} className="h-80 w-full hover:scale-125 transition-transform duration-500" alt="instructor pic" /></figure>
            <div className="card-body pb-4">
                <div>
                    <h2 className="text-2xl font-bold font-[poppins]">Name : {name}</h2>
                    <div className="flex space-x-1 py-1">
                        <span className="font-semibold text-lg">Email : </span>
                        <h2 className="font-semibold text-lg pb-2"> {email}</h2>
                    </div>
                </div>
                <div className="flex space-x-8 py-2 px-2">
                    <FaFacebook title="facebook" className="social-icon"></FaFacebook>
                    <FaWhatsapp title="Whatsapp" className="social-icon"></FaWhatsapp>
                    <FaLinkedin title="Linkedin" className="social-icon"></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;