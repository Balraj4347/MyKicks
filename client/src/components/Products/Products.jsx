import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, clearErrors } from "../../redux-actions/productAction";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Loader from "../../utils/Loader";

const Products = () => {
  const dispatch = useDispatch();
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

    dispatch(getProducts());
  };

  const applyFilter = () => {
    dispatch(getProducts(keyword, gender, price, ratings, brand, category));
  };

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };
  //loading, productsCount, filteredProductCount, products, error
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getProducts(keyword));
  }, [dispatch, keyword, error]);

  return (
    <>
      <div className='products-container'>
        {/* Side Filter Bar */}
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
          {/* Price Slider Filter */}
          <div className='products-filter-choice-section'>
            <p>Filter By Price</p>
            <div className='formBox'>
              <div className='slider-value-display'>
                <span className='text-box'>₹{price[0].toLocaleString()}</span>
                <span style={{ padding: "0px 10px" }}>to</span>
                <span className='text-box'>₹{price[1].toLocaleString()}</span>
              </div>
              <div className='form-slider-box'>
                <Slider
                  value={price}
                  sx={{
                    color: "black",
                  }}
                  onChange={priceHandler}
                  getAriaLabel={() => "Price range slider"}
                  min={0}
                  max={30000}
                />
              </div>
            </div>
          </div>

          {/* Price Slider Filter */}
          {/* Apply Filter Button */}
          <div className='filter-apply-btn'>
            <Button
              variant='filled'
              size='small'
              endIcon={<FilterAltIcon />}
              sx={{
                color: "white",
                backgroundColor: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#2b2b2bd4",
                },
                "&:active": {
                  backgroundColor: "gray",
                  color: "black",
                },
              }}
              onClick={applyFilter}
            >
              Apply
            </Button>
          </div>
          {/* Apply Filter Button */}
          {/* resest Filter Button */}
          <div>
            <Button size='small' onClick={clearFilters} disableRipple>
              Reset Filters
            </Button>
          </div>
          {/* resest Filter Button */}
        </div>
        {/* Side Filter Bar */}
        {/* main products cards */}
        <div className='products-main-content '>
          {!loading && products.length === 0 && (
            <div style={{ margin: "10vh 0px" }}>
              <img
                draggable='false'
                src='https://static.thenounproject.com/png/1400397-200.png'
                alt='not found icon'
              />
              <h3>Sorry, no Product found! Matching Your Filter Preferences</h3>
              <p className='text-xl text-center text-primary-grey'>
                Try Other Filter Preferences
              </p>
            </div>
          )}

          {loading ? (
            <span>
              <Loader />
            </span>
          ) : (
            <div className='products-main-container '>
              <div className='products-cards-wrapper '>
                {products?.map((product) => (
                  <ProductCard {...product} key={product._id} />
                ))}
              </div>
            </div>
          )}

          {/* <section className='products-sort-dropdown'></section>
          <section className='products-product-list'></section> */}
        </div>
        {/* main products cards */}
      </div>
    </>
  );
};

const genders = ["Unisex", "Men", "Women"];
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
  "Sneaker Labs",
  "Superkicks",
  "Vans",
  "Ylati",
];

export default Products;
