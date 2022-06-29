import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  CLEAR_ERRORS,
} from "../redux-constants/productConstants";

export const productsReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        productsCount: payload.productsCount,
        filteredProductCount: payload.filteredProductCount,
        products: payload.products,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
