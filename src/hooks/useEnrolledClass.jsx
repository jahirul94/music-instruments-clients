import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
    // TODO: result 2 problem
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const [paymentDetails , setPaymentDetails ] = useState([]);
    useEffect(() => {
         axiosSecure.get(`/savePaymentInfo?email=${user?.email}`)
         .then(data => {
            setPaymentDetails(data.data.result);
            setEnrolledClasses(data.data.result2);
            // console.log("result 1" ,data.data.result);
            // console.log("result 2",data.data.result2);
        })
    }, [user , axiosSecure])
    return [enrolledClasses , paymentDetails]
};

export default useEnrolledClass;