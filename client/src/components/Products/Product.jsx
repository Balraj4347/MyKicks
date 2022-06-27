import React from "react";

const Product = ({ brand, description, name, images, price }) => {
  return (
    <div>
      <p>{brand}</p>
      <p>{name}</p>
      <p>{description}</p>
      {/* <p>{images}</p> */}
      <p>{price}</p>
    </div>
  );
};

export default Product;
