import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux-actions/cartActions";

const ProductCard = ({
  _id,
  brand,
  description,
  name,
  images,
  price,
  ratings,
}) => {
  const dispatch = useDispatch();

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
      <Link to={`product/${_id}`}>
        <div className='image-container'>
          <img src={images[0].url} alt={name + " IMAGE "} />
        </div>
      </Link>
      <div className='product-card-desc'>
        <div className='brandName-container'>
          <span>{brand}</span>
        </div>
        <Link to={`product/${_id}`}>
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
        {itemInCart ? (
          <IconButton onClick={removeaFromCartHandler}>
            <DoneOutlineIcon />
          </IconButton>
        ) : (
          <IconButton onClick={addToCartHandler}>
            <AddShoppingCartIcon />
          </IconButton>
        )}
      </span>
    </div>
  );
};

export default ProductCard;
