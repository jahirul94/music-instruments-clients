import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData, useLocation } from "react-router-dom";

const Payment = () => {
    const location = useLocation();
    const itemId = location.state.id ;
    const cartItems = useLoaderData();
    const cartItem = cartItems.find(i => i._id === itemId)
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div>
            <div className="text-center mt-14 mb-8 space-y-2">
                <h2 className="text-2xl font-bold">Pay your's payment</h2>
                <p className="text-lg font-semibold">Total Price : ${cartItem.price}</p>
            </div>
            <Elements stripe={stripePromise}>
                 <CheckOut price = {cartItem.price} cartItem ={cartItem}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;