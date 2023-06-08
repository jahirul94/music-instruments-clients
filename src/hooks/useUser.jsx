import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/allUsers");
            return res.data;
        }
    });
    return [data, refetch]
}

export default useUser;