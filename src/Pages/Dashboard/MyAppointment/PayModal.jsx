/* eslint-disable react/prop-types */
import { Tooltip } from "@chakra-ui/react";
import { MdPayments } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
// import { useState } from "react";


//add add publishable kay
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const PayModal = ({ id, time, price }) => {

    // eslint-disable-next-line no-unused-vars
    // const [isStripe, setIsStripe] = useState(stripePromise);

    const { user } = useAuth();

    // const itemsIs = import.meta.env.VITE_PAYMENT_GATEWAY_PK


    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <Tooltip hasArrow label='Pay Now' placement='left' bg='#003D8D'>
                    <button
                        className="bg-[#003D8D] p-3 rounded-full text-lg text-white" onClick={() => document.getElementById(id).showModal()}>
                        <MdPayments />
                    </button>
                </Tooltip>
                <dialog id={id} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="bg-[#003D8D] text-white font-medium px-2 py-1 rounded-full absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-medium text-red-400 text-md">Hello, {user?.displayName}</h3>
                        <div className="mt-6 space-y-3">
                            <h1 className="text-xl font-medium text-gray-800">Please Pay for Tech Cleaning</h1>
                            <p className="text-[#646464] font-normal">Your Appointment:  <span className="ml-2">{time}</span></p>
                            <h1 className="text-xl font-medium text-gray-800">Please Pay Price: ${price}</h1>
                            <div>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default PayModal;