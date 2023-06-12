import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import './CheckOut.css'

const CheckOut = ({ price , cartItem }) => {
    // console.log("from checkout" , cartItem);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    // step-2 
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            // console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError("")
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }
 
        setProcessing(false)
        if(paymentIntent.status === "succeeded"){
            // console.log('payment intent', paymentIntent)
            setTransactionId(paymentIntent.id);
            const savedDoc = {
                email : user?.email ,
                transactionId : paymentIntent.id ,
                price :cartItem.price ,
                image : cartItem.image,
                status : "pending",
                date : new Date(),
                quantity : 1 ,
                itemId : cartItem._id,
                itemName : cartItem.className,
                instructorName : cartItem.instructorName,
                instructorEmail : cartItem.instructorEmail,

            }
            const savedInstructors = {
                instructorEmail : cartItem.instructorEmail,
            }

            axiosSecure.post("/savePaymentInfo" , savedDoc )
            .then(data => {
                // console.log(data);
            })
            axiosSecure.post('/updateInstructors' , savedInstructors)
            .then(data =>{
                // console.log(data);
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='"btn btn-primary btn-sm rounded-lg mt-4' type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 pt-5 px-6'>{cardError}</p>
            }
            {
                transactionId && <p className="text-green-700 text-lg mt-4 ms-4">You're Payment complete with Successfully . You're Transaction id is : {transactionId}</p>
            }
        </>
    );
};

export default CheckOut;