import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFeedback = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedback'],
        queryFn: async () => {
            const res = await axiosSecure.get("/feedback");
            return res.data;
        }
    });

    return [feedbacks]
}

export default useFeedback;