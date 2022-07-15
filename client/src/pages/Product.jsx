import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../redux-actions/productAction";
const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const productId = params.id;
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  console.log(product, loading, error);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(productId));
    // eslint-disable-next-line
  }, [dispatch, productId, error]);

  return <div>Product</div>;
};

export default Product;
