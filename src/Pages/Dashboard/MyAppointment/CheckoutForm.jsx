/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../../Hooks/useAuth';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useNavigate } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctors';
// import Swal from 'sweetalert2';
import toast from "react-hot-toast";



// eslint-disable-next-line no-unused-vars
const CheckoutForm = ({ price, id, serviceName, time, servicesId, paymentIntent }) => {

    const [isError, setIsError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    // const [transactionId, setTransactionId] = useState('');
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [refetch] = useDoctors();


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setIsError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setIsError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        

        if (confirmError) {
            console.log('conform error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                // setTransactionId(paymentIntent.id)

                //now payment save the database
                const payment = {
                    email: user?.email,
                    price: price,
                    transactionId: paymentIntent.id,
                    appointmentTime: time,
                    appointmentId: id,
                    servicesId: servicesId,
                    serviceName: serviceName,
                    status: 'pending',
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data.paymentResult.insertedId);
                refetch();
                if (res.data.paymentResult.acknowledged ){
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: "Thank You payment with successful",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                    toast('Your Payment is Successful')
                    navigate('/dashboard/myHistory')
                }

            }
        }

    }

    return (
        <div className={``}>
            <p className='py-3  text-center text-red-500'>{isError}</p>
            <form onSubmit={handleSubmit} className="max-w-lg h-full mx-auto p-6 bg-white shadow-md rounded">
                <h2 className="text-xl font-bold mb-4">Payment Now</h2>
                <div className="mb-4">
                    <CardElement className="px-3 py-4 border border-gray-300 rounded" />
                </div>
                <button
                    type="submit"
                    disabled={!stripe}
                    className="w-full py-3 text-lg font-medium  hover:bg-[#ff9b70] bg-[#F7A582] text-white rounded "
                >
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;