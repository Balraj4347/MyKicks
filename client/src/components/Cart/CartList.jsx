import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className='Slider-bar'>Slider</div>
      <div className='cart-container'>
        <div className='cart-items-list-container'>
          {cartItems &&
            cartItems.map((item) => (
              <CartItem {...item} inCart={true} key={item.productId} />
            ))}
          <div className='cart-item-list'>?</div>
        </div>
        {/* <div className='cart-items-price-list'>
          <p>Cart price list</p>
          <div className='place-order-button'>
            <button onClick={placeOrderHandler}>PLACE ORDER</button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CartList;
