import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [reload, setReload] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const url = `https://music-instrument-server-navy.vercel.app/studentClasses?email=${user?.email}`
    useEffect(() => {
           axiosSecure.get(url)
            .then(data => {
                setCartItems(data.data)
            })
    }, [url, reload , axiosSecure])
    return [cartItems, reload , setReload]
};

export default useCart;