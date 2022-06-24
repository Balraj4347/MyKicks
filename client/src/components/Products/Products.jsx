import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux-actions/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(productData);
  return <div>Products</div>;
};

export default Products;
