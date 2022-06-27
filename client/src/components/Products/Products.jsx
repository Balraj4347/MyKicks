import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux-actions/productAction";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, productsCount, products, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(loading, productsCount, products, error);
  return (
    <div>
      Products
      {!loading &&
        products.map((product) => {
          console.log(product);
          return (
            <>
              <hr />
              <Product {...product} key={product._id} />
            </>
          );
        })}
    </div>
  );
};

export default Products;
