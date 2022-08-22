import React from "react";

const PriceSideBar = ({ cartItems }) => {
  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const amount = subtotal;

  return (
    <>
      <div className='cart-price-section-header'>
        <span>Description</span>
        <span>Amount</span>
      </div>
      <div className='cart-price-section'>
        <div>
          <span>Subtotal: </span>
          <span>
            {"₹"}
            {subtotal.toLocaleString()}
          </span>
        </div>
        <div>
          <span>Shipping Charges:</span>
          <span> {amount > 10000 ? `FREE` : `₹ 500`}</span>
        </div>
        <hr />
        <div>
          <span>Total: </span>
          <span>
            {"₹"}
            {amount > 10000
              ? subtotal.toLocaleString()
              : (amount + 500).toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default PriceSideBar;
