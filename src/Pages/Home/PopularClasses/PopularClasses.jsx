import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const PopularClasses = () => {
    const { data } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios.get("https://music-instrument-server-navy.vercel.app/popularClasses");
            return res.data;
        }
    })


    // start 
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    // end 
    return (
        <div>
            <SectionHeader heading="Our Popular Classes" subHeading="Explore Our Popular Classes"></SectionHeader>
            <motion.ul variants={container} className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 px-4">
                {
                    data?.map(sd => <motion.li key={sd._id} className="border border-slate-600 rounded-lg card card-compact bg-[#592bc5] shadow-2xl text-white" variants={item}  initial="hidden"
                    animate="visible">
                        <figure><img src={sd.image} className="h-96 w-full" alt="class pic" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name : {sd.className}</h2>
                            <h2 className="text-lg font-semibold">Instructor : {sd.instructorName} </h2>
                            <h2 className="text-lg font-semibold">Available Seats : {sd.availableSeats} </h2>
                            <h2 className="text-lg font-semibold">Price : ${sd.price}</h2>
                            <Link to="/classes"><button className="btn btn-primary w-full">Buy Now</button></Link>
                        </div>
                    </motion.li>)
                }
            </motion.ul>
        </div>
    );
};

export default PopularClasses;