import React from "react";
import "../Styles/Paymentstyle.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckoutForm from "../components/Checkout/PaymentCheckoutForm";
import YourOrder from "../components/Checkout/YourOrder";
import successtick from "../assets/media/PaymentSucessTick.png";
const successMessage = () => {
  return (
    <div className='Payment-SucessFull-div'>
      <img
        src={successtick}
        alt={"SuccessFull Payment jpg"}
        draggable={false}
      />
      <p>Payment successful</p>
    </div>
  );
};

const Payment = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <>
      {paymentCompleted ? (
        successMessage()
      ) : (
        <div className='checkout-wrapper'>
          {stripeApiKey && (
            <Elements stripe={loadStripe(stripeApiKey)}>
              <PaymentCheckoutForm setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          )}
          <YourOrder cartItems={cartItems} />
        </div>
      )}
    </>
  );
};

export default Payment;
