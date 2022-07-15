import React from "react";
import "../Styles/Product.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../redux-actions/productAction";
import ImageDisplayer from "../components/ProductDetails/ImageDisplayer";
import ProductText from "../components/ProductDetails/ProductText";
const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const productId = params.id;
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  // console.log(product, loading, error);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(productId));
  }, [dispatch, productId, error]);

  return (
    <div className='product-main-wrapper'>
      <div className='product-cat-name-header'>
        <span>
          {product.category} &nbsp; {" / "} &nbsp;
          <span style={{ color: "gray" }}>{product.name}</span>
        </span>
      </div>
      <div className='product-details-wrapper'>
        <div className='product-images-section'>
          {product.images ? (
            <ImageDisplayer images={product.images} id={productId} />
          ) : (
            <span>loading...</span>
          )}
        </div>
        <div className='product-text-section'>
          {product ? <ProductText {...product} /> : <span>loading...</span>}
        </div>
      </div>
    </div>
  );
};

export default Product;
