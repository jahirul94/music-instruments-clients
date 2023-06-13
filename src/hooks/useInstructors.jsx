import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const {user , loading } = useAuth();
        const [axiosSecure] = useAxiosSecure();
        // using axios and react query 
        const {data: isInstructor , isLoading: isInstructorLoading} = useQuery({
            queryKey: ['isInstructor', user?.email],
            enabled: !loading && !!user?.email,
            queryFn: async () => {
                if (!loading && user?.email) {
                const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
                return res.data.instructor; }
            }
        })
        return [isInstructor, isInstructorLoading]

};
export default useInstructors;