import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [enrolledClasses, setEnrolledClasses] = useState([])
    useEffect(() => {
         axiosSecure.get(`/savePaymentInfo?email=${user?.email}`)
         .then(data => {
            setEnrolledClasses(data.data.result2);
        })
    }, [user , axiosSecure])
    return [enrolledClasses]
};

export default useEnrolledClass;