import React from "react";
import PriceSideBar from "../Cart/PriceSideBar";

const YourOrder = ({ cartItems }) => {
  return (
    <>
      <div className='order-table-checkout'>
        <div className='yourOrder'>Your Order</div>
        {cartItems &&
          cartItems.map((item) => (
            <div
              key={item.productId}
              className='product-cartCard-wrapper'
              style={{ justifyContent: "flex-start" }}
            >
              <div className='product-image'>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    height: "70px",
                    width: "80px",
                  }}
                />
              </div>
              <div className='product-name' style={{ paddingLeft: "20px" }}>
                <p style={{ width: "fit-content" }}>
                  {item.name.length > 25
                    ? `${item.name.substring(0, 25)}...`
                    : item.name}{" "}
                  <span style={{ color: "grey" }}> * {item.quantity}</span>
                </p>
              </div>
              {
                <div style={{ marginLeft: "auto", paddingRight: "50px" }}>
                  <p>₹ {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              }
            </div>
          ))}
        <div className='cart-items'></div>
        <PriceSideBar cartItems={cartItems} />
      </div>
    </>
  );
};

export default YourOrder;
