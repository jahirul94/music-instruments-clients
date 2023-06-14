import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/students/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;