import React from "react";
import { useNavigate } from "react-router-dom";
const PriceSideBar = ({ cartItems }) => {
  const navigate = useNavigate();
  const placeOrderHandler = () => {
    navigate("/checkout"); // check for login first
  };

  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className='cart-items-price-list'>
        <table className='cart-price-table'>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>
                <span>₹ {subtotal.toLocaleString()}</span>
              </td>
            </tr>
            <hr />
            <tr>
              <th>Shipping Charges</th>
              <td>
                <span>₹ {subtotal > 10000 ? `FREE` : `500`}</span>
              </td>
            </tr>
            <hr />
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
            <hr />
          </tbody>
        </table>
        <div className='place-order-button'>
          <button onClick={placeOrderHandler}>PLACE ORDER</button>
        </div>
      </div>
    </>
  );
};

export default PriceSideBar;
