import React from "react";
import axios from "axios";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, newOrder } from "../../redux-actions/orderAction";
import { emptyCart } from "../../redux-actions/cartActions";
import { useEffect, useState, useRef } from "react";

const PaymentCheckoutForm = ({ setPaymentCompleted }) => {
  const [payDisable, setPayDisable] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { error } = useSelector((state) => state.newOrder);
  const { billingDetails, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const order = {
    shippingInfo: billingDetails,
    orderItems: cartItems,
    totalPrice,
  };
  const paymentData = {
    amount: Math.round(totalPrice),
    shippingCharges: totalPrice > 10000 ? 0 : 500,
    email: user.email,
    phoneNo: billingDetails.phoneNo,
  };
  const stripe = useStripe();
  const elements = useElements();
  const paymentBtn = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    paymentBtn.current.disabled = true;
    setPayDisable(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/payment/process",
        paymentData,
        config
      );

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: billingDetails.address,
              city: billingDetails.city,
              country: "IN",
              state: billingDetails.state,
              postal_code: billingDetails.pincode,
            },
          },
        },
      });
      if (result.error) {
        paymentBtn.current.disabled = false;
        setPayDisable(false);
        enqueueSnackbar(result.error.message, { variant: "error" });
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          enqueueSnackbar("Payment Successfull", { variant: "success" });
          dispatch(newOrder(order));
          dispatch(emptyCart());

          //   navigate("/order/success");
          setPaymentCompleted(true);
        } else {
          enqueueSnackbar("Processing Payment Failed!", { variant: "error" });
        }
      }
    } catch (error) {
      paymentBtn.current.disabled = false;
      setPayDisable(false);
      enqueueSnackbar(error, { variant: "error" });
    }
  };
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, error]);
  return (
    <div className='payment-stripe-wrapper'>
      {/* stripe form */}
      <h4>ENTER CARD DETAILS TO MAKE PAYMENT</h4>
      <form
        onSubmit={(e) => submitHandler(e)}
        autoComplete='off'
        className='payment-checkout-form'
      >
        <div>
          <p>CARD NUMBER :</p>
          <CardNumberElement />
        </div>
        <div>
          <p>CARD EXPIRY :</p>
          <CardExpiryElement />
        </div>
        <div>
          <p>CARD CVC :</p>
          <CardCvcElement />
        </div>
        <button
          ref={paymentBtn}
          type='submit'
          disabled={payDisable ? true : false}
          className={
            payDisable
              ? `disabledbtn payment-form-submit-btn`
              : `payment-form-submit-btn`
          }
        >
          {payDisable ? `Processing..` : `Pay ₹${totalPrice.toLocaleString()}`}
        </button>
      </form>

      {/* stripe form */}
    </div>
  );
};

export default PaymentCheckoutForm;
