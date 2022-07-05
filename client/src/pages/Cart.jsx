import "../Styles/Cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import CartList from "../components/Cart/CartList";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  //   const placeOrderHandler = () => {
  //     navigate("/checkout");
  //   };
  return (
    <div className='cart-wrapper'>
      {cartItems && cartItems.length === 0 && (
        //   <EmptyCart />
        <p>emptyCart</p>
      )}
      {cartItems && cartItems.length > 0 && <CartList />}
      <hr />
      <div className='cart-page-footer'>
        <div className='shipping'>
          <p>India-wide Shipping</p>
          <h6>Average time: 4-6 days</h6>
        </div>
        <div className='secure'>
          <p>100% Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
