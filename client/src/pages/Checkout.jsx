import { useSelector } from "react-redux";
import "../Styles/Checkout.css";
import BillingForm from "../components/Checkout/BillingForm";
import YourOrder from "../components/Checkout/YourOrder";
const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { billingDetails } = useSelector((state) => state.cart);

  return (
    <>
      <div className='checkout-wrapper'>
        <BillingForm billingDetails={billingDetails} />
        <YourOrder cartItems={cartItems} />
      </div>
    </>
  );
};

export default Checkout;
