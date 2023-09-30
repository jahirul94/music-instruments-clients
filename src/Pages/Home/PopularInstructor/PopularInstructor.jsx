import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";
import { useState } from "react";
import InstructorCard from "../../../components/InstructorCard";
import useTheme from "../../../hooks/useTheme";


const PopularInstructor = () => {
    const [data, setData] = useState([])
    const [theme] = useTheme();

    const { data: instructors = [] } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
            const res = await axios.get("https://music-instrument-server-navy.vercel.app/popularInstructors")
            setData(res.data?.slice(0, 3))
            return res.data;
        }
    })

    return (
        <div>
            <SectionHeader heading="Our Popular Instructors" subHeading="Explore Our Popular Instructor"></SectionHeader>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
                {
                    data?.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
            <div className="flex justify-center my-8">
                {data?.length === 3 ? <button onClick={() => setData(instructors)} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline w-3/4 md:w-1/4 font-[Roboto]`}>See More</button> : <button onClick={() => setData(instructors?.slice(0, 3))} className={`${theme === "light" ? "text-black" : "text-slate-300"} btn btn-outline w-3/4 md:w-1/4 font-[Roboto]`}>See Less</button>}
            </div>
        </div>
    );
};

export default PopularInstructor;