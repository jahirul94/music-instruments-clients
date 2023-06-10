import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payment = () => {
    const [cartItems] = useCart();
    const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0)
    const totalAmount = parseFloat(totalPrice.toFixed(2))
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)
    return (
        <div>
            <div className="text-center mt-14 mb-8 space-y-2">
                <h2 className="text-2xl font-bold">Pay your's payment</h2>
                <p className="text-lg font-semibold">Total Price : ${totalPrice}</p>
            </div>
            <Elements stripe={stripePromise}>
                 <CheckOut price = {totalAmount}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;