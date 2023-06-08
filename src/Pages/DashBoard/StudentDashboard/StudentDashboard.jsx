import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const StudentDashboard = () => {
     const {user} = useAuth();
     const [cartItems , setCartItems] = useState([])
     useEffect(()=>{
         fetch(`http://localhost:5000/classes?email=${user?.email}`)
         .then(res => res.json())
         .then(data => console.log(data))
     },[user])
    return (
        <div>
             
            
        </div>
    );
};

export default StudentDashboard;