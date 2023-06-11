import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";

const PopularInstructor = () => {
    const { data: instructors = [] } = useQuery({
        queryKey: ["instructors"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/popularInstructors")
            return res.data;
        }
    })
    return (
        <div>
            <SectionHeader heading="Our Popular Instructors" subHeading="Explore Our Popular Instructor for Choose You're Best Classes"></SectionHeader>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 px-4">
                {
                    instructors?.map(instructor => <div key={instructor._id} className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={instructor.image} className="max-h-80 w-full" alt="class pic" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Instructor Name : {instructor.name}</h2>
                        <h2 className="text-lg font-semibold">Instructor Email : {instructor.email} </h2>                     
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;