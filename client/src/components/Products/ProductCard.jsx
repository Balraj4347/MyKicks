import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoNotStepSharpIcon from "@mui/icons-material/DoNotStepSharp";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux-actions/cartActions";

const ProductCard = ({ _id, brand, name, images, price, ratings, stock }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const dispatch = useDispatch();

  const thisCardimg = {
    backgroundImage: isHover
      ? typeof images[1] !== "undefined"
        ? `url(${images[1].url})`
        : `url(${images[0].url})`
      : `url(${images[0].url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `center center`,
    height: "100%",
    width: "100%",
    transition: `all 0.5s cubic-bezier(0.11, 0.11, 1, 1.42) 0s`,
  };
  const { cartItems } = useSelector((state) => state.cart);
  const itemInCart = cartItems.some((i) => i.productId === _id);
  const addToCartHandler = () => {
    dispatch(addItemsToCart(_id));
    //  enqueueSnackbar("Product Added To Cart", { variant: "success" });
  };

  const removeaFromCartHandler = () => {
    dispatch(removeItemsFromCart(_id));
    //  enqueueSnackbar("Product Added To Cart", { variant: "success" });
  };

  return (
    <div className='product-card-container'>
      <Link to={`/product/${_id}`}>
        <div
          className='image-container'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={thisCardimg} />
        </div>
      </Link>
      <div className='product-card-desc'>
        <div className='brandName-container'>
          <span>{brand}</span>
        </div>
        <Link to={`/product/${_id}`}>
          <div className='productName-container'>
            <span>{name}</span>
          </div>
        </Link>
        <div className='price-rating-div'>
          <div className='price-container'>
            <span>₹ {price.toLocaleString()}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{ratings.toFixed(1)} </span>
            <StarIcon sx={{ fontSize: "19px", marginLeft: "5px" }} />
          </div>
        </div>
      </div>
      <span className='add-cart-icon'>
        {stock !== 0 ? (
          itemInCart ? (
            <IconButton onClick={removeaFromCartHandler}>
              <DoneOutlineIcon />
            </IconButton>
          ) : (
            <IconButton onClick={addToCartHandler}>
              <AddShoppingCartIcon />
            </IconButton>
          )
        ) : (
          <>
            <DoNotStepSharpIcon />
            <p>out of stock</p>
          </>
        )}
      </span>
    </div>
  );
};

export default ProductCard;
