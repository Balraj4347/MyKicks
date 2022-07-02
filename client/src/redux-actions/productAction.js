import axios from "axios";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
} from "../redux-constants/productConstants";

//GETTING ALL PRODUCTS -- FILTER
export const getProducts =
  (keyword = "", gender, price = [0, 30000], ratings = 0, brand, category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });

      let url = `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      if (category) {
        url = url + `&category=${category}`;
      }
      if (gender) {
        url = url + `&gender=${gender}`;
      }
      if (brand) {
        url = url + `&brand=${brand}`;
      }

      const { data } = await axios.get(url);

      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// TO CLEAR ALL ERRORS
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
