import React from "react";
import emptycartimg from "../../assets/media/emptycart.png";
// import { emptyCart } from "../../redux-actions/cartActions";
const EmptyCart = () => {
  return (
    <div>
      <img
        draggable={false}
        src={emptycartimg}
        alt='Empty Cart'
        style={{ width: "60vw", maxWidth: "508px", borderRadius: "20%" }}
      />
      <p style={{ fontFamily: "monospace", fontSize: "17px" }}>
        The Cart`s Empty.{" "}
      </p>
      <p style={{ fontFamily: "monospace", fontSize: "17px" }}>
        Thats not good !!
      </p>
    </div>
  );
};

export default EmptyCart;
