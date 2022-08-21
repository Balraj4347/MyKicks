import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../redux-actions/cartActions";
const ProductText = ({ brand, description, name, price, stock, _id }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { cartItems } = useSelector((state) => state.cart);
  const itemInCart = cartItems.some((i) => i.productId === _id);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(_id, quantity));
  };
  //   console.log(brand, category, description, gender, name, price, stock, _id);
  return (
    <div className='product-text-wrapper'>
      <p className='brandname'>{brand}</p>
      <h2 className='productname'>{name}</h2>
      {price ? <p className='price'>₹ {price.toLocaleString()}</p> : <></>}

      <div className='desc-container'>
        <p>{description}</p>
      </div>
      <hr />
      <div className='ordersection'>
        {stock === 0 ? (
          <p style={{ color: "red" }}>╳ Out Of Stock</p>
        ) : (
          <p style={{ color: "green" }}>✔️ In Stock</p>
        )}

        <div className='productpage-Cart-opt'>
          {itemInCart ? (
            <span className='add-button'>Added to Cart</span>
          ) : (
            <>
              <input
                type='number'
                min='1'
                max={stock}
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />

              <button className='add-button' onClick={addToCartHandler}>
                ADD TO CART
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductText;
