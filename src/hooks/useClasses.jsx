import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data : classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get("/AllClasses");
            return res.data;
        }
    });
    return [ classes , refetch]
}
export default useClasses;