import "../Styles/Cart.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const placeOrderHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className='cart-wrapper'>
      {cartItems && cartItems.length === 0 && (
        //   <EmptyCart />
        <p>emptyCart</p>
      )}
      {cartItems && cartItems.length > 0 && (
        <>
          <div className='Slider-bar'>Slider</div>
          <div className='cart-container'>
            <div className='cart-items-list-container'>
              <p>Cart items list</p>
              {console.log(cartItems)}
              {cartItems &&
                cartItems.map((item) => (
                  <CartItem {...item} inCart={true} key={item.productId} />
                ))}
              <div className='cart-item-list'>?</div>
            </div>
            <div className='cart-items-price-list'>
              <p>Cart price list</p>
              <div className='place-order-button'>
                <button onClick={placeOrderHandler}>PLACE ORDER</button>
              </div>
            </div>
          </div>
        </>
      )}
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
