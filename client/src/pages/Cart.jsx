import "../Styles/Cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartList from "../components/Cart/CartList";
import EmptyCart from "../components/Cart/EmptyCart";
import PriceSideBar from "../components/Cart/PriceSideBar";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const proceedCheckoutHandler = () => {
    navigate("/checkout"); // check for login first
  };

  return (
    <div className='cart-wrapper'>
      {cartItems && cartItems.length === 0 && <EmptyCart />}

      {cartItems && cartItems.length > 0 && (
        <div className='cart-container'>
          <CartList cartItems={cartItems} />
          <div className='cart-items-price-list'>
            <PriceSideBar cartItems={cartItems} />
            <div className='proceed-Checkout-button'>
              <button onClick={proceedCheckoutHandler}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}

      <hr />
      <CartFooter />
    </div>
  );
};

const CartFooter = () => {
  return (
    <div className='cart-page-footer'>
      <div className='shipping'>
        <p>India-wide Shipping</p>
        <h6>Average time: 4-6 days</h6>
      </div>
      <div className='secure'>
        <p>100% Secure Checkout</p>
      </div>
    </div>
  );
};
export default Cart;
