import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
        const {user} = useAuth();
        const [axiosSecure] = useAxiosSecure();
        // using axios and react query 
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
            queryKey: ['isAdmin', user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                return res.data.admin;
            }
        })
        return [isAdmin, isAdminLoading]

};

export default useAdmin;