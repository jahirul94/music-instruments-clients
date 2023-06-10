import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth();
    const [reload, setReload] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const url = `http://localhost:5000/studentClasses?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [url, reload])
    return [cartItems, reload , setReload]
};

export default useCart;