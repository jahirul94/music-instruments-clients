import useTheme from "../hooks/useTheme";

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    const [theme] = useTheme();

    return (
        <div className={`${theme === "light" ? "text-black" : "text-slate-300"} rounded-lg card card-compact shadow-2xl bg-base-100 hover:scale-105 transition-transform duration-500`}>
            <figure><img src={image} className="h-80 w-full" alt="instructor pic" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name : {name}</h2>
                <h2 className="font-semibold">Instructor Email : {email} </h2>
            </div>
        </div>
    );
};

export default InstructorCard;