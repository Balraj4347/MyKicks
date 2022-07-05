import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cartItems }) => {
  return (
    <>
      <div className='cart-items-list-container'>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem {...item} inCart={true} key={item.productId} />
          ))}
      </div>
    </>
  );
};

export default CartList;
