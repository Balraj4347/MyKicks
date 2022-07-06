import React from "react";

const PriceSideBar = ({ cartItems }) => {
  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <table className='cart-price-table'>
        <tbody>
          <tr>
            <th>Subtotal</th>
            <td>
              <span>₹ {subtotal.toLocaleString()}</span>
            </td>
          </tr>
          <tr>
            <th>Shipping Charges</th>
            <td>
              <span>₹ {subtotal > 10000 ? `FREE` : `500`}</span>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <span>
                ₹{" "}
                {subtotal > 10000
                  ? subtotal.toLocaleString()
                  : (subtotal + 500).toLocaleString()}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PriceSideBar;
