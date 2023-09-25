import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";



const PopularClasses = () => {
    const [theme] = useTheme();
    const { data } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios.get("https://music-instrument-server-navy.vercel.app/popularClasses");
            return res.data;
        }
    })

    return (
        <div>
            <SectionHeader heading="Our Popular Classes" subHeading="Explore Popular Classes"></SectionHeader>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
                {
                    data?.map(sd => <div key={sd._id} className={`${theme === "light" ? "text-black" : "text-white"} rounded-lg card card-compact bg-base-100 shadow-2xl hover:scale-105 transition-transform duration-500`}>
                        <figure><img src={sd.image} className="h-96 w-full" alt="class pic" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name : {sd.className}</h2>
                            <h2 className="text-lg font-semibold">Instructor : {sd.instructorName} </h2>
                            <h2 className="text-lg font-semibold">Available Seats : {sd.availableSeats} </h2>
                            <h2 className="text-lg font-semibold">Price : ${sd.price}</h2>
                            <Link to="/classes"><button className={`${theme === "light" ? "btn btn-outline w-full" : "btn btn-outline w-full text-white"}`}>Buy Now</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;