import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, clearErrors } from "../../redux-actions/productAction";
import ProductCard from "./ProductCard";
import { useLocation, useParams } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const keyword = params.keyword;

  const [price, setPrice] = useState([0, 30000]);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [brand, setBrand] = useState("");
  const [ratings, setRatings] = useState(0);

  const clearFilters = () => {
    setPrice([0, 30000]);
    setCategory("");
    setGender("");
    setBrand("");
    setRatings(0);
  };

  const { loading, productsCount, filteredProductCount, products, error } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword, category, price, ratings));
  }, [dispatch]);
  // console.log(loading, productsCount, products, error);
  return (
    <>
      <div className='products-container'>
        <div className='products-filter-sidebar'>
          <div className='products-filter-header'>
            <p>FILTER</p>
          </div>
          {/* Gender Filter Section */}
          <div className='products-filter-choice-section'>
            <p>Filter By Gender</p>
            <div className='formBox'>
              <FormControl>
                <RadioGroup
                  aria-labelledby='gender-radio-buttons-group'
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name='category-radio-buttons'
                  value={gender}
                >
                  {genders.map((el, i) => (
                    <FormControlLabel
                      key={i}
                      value={el === "Unisex" ? "" : el}
                      control={<Radio size='small' />}
                      label={
                        <span id='filterLabel' key={i}>
                          {el}
                        </span>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* Gender Filter Section */}
          {/* Category Filter section */}
          <div className='products-filter-choice-section'>
            <p>Filter By Category</p>
            <div className='formBox'>
              <FormControl>
                <RadioGroup
                  aria-labelledby='category-radio-buttons-group'
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  name='category-radio-buttons'
                  value={category}
                >
                  {categories.map((el, i) => (
                    <FormControlLabel
                      key={i}
                      value={el}
                      control={<Radio size='small' />}
                      label={
                        <span id='filterLabel' key={i}>
                          {el}
                        </span>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* Category Filter section */}
          {/* Brand Filter Section */}
          <div className='products-filter-choice-section'>
            <p>Filter By Brand</p>
            <div className='formBox'>
              <FormControl>
                <RadioGroup
                  aria-labelledby='category-radio-buttons-group'
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  name='brand-radio-buttons'
                  value={brand}
                >
                  {brands.map((el, i) => (
                    <FormControlLabel
                      key={i}
                      value={el}
                      control={<Radio size='small' />}
                      label={
                        <span id='filterLabel' key={i}>
                          {el}
                        </span>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* Brand Filter Section */}
        </div>
        <div className='products-main-content'>
          <section className='products-sort-dropdown'></section>
          <section className='products-product-list'></section>
        </div>
      </div>
    </>
  );
};

const genders = ["Unisex", "Male", "Female"];
const categories = ["Footwear", "Accessories"];
const brands = [
  "Adidas",
  "adidas originals",
  "Asics",
  "Converse",
  "Crocs",
  "Fila",
  "New Balance",
  "Nike",
  "Puma",
  "Reebok",
  "Sneaker Freaker",
  "Sneaker Lab",
  "Superkicks",
  "Vans",
  "Ylati",
];

export default Products;
