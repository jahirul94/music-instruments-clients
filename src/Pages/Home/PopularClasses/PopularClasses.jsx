import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";

const PopularClasses = () => {
    const { data } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/popularClasses");
            return res.data;
        }
    })
    // console.log(data);
    return (
        <div>
            <SectionHeader heading="Our Popular Classes" subHeading="Explore Our Popular Classes"></SectionHeader>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 px-4">
                {
                    data?.map(sd => <div key={sd._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={sd.image} className="h-96 w-full" alt="class pic" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name : {sd.className}</h2>
                            <h2 className="text-lg font-semibold">Instructor : {sd.instructorName} </h2>
                            <h2 className="text-lg font-semibold">Available Seats : {sd.availableSeats} </h2>
                            <h2 className="text-lg font-semibold">Price : ${sd.price}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;