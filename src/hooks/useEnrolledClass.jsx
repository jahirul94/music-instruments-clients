import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
    // TODO: result 2 problem 
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [paymentDetails, setPaymentDetails] = useState([]);
    useEffect(() => {
        if (user) {
            axiosSecure.get(`/savePaymentInfo?email=${user?.email}`)
                .then(data => {
                    setPaymentDetails(data.data);
                })
        }
    }, [user, axiosSecure])
    return [paymentDetails]
};

export default useEnrolledClass;