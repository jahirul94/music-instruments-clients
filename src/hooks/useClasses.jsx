import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch, isLoading: isClassesLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get("/AllClasses");
            return res.data;
        }
    });
    return [classes, refetch, isClassesLoading]
}
export default useClasses;