import axios from "axios";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_BILLING_DETAILS,
} from "../redux-constants/cartConstants";

// add to cart
export const addItemsToCart =
  (id, quantity = 1) =>
  async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: data.product._id,
        name: data.product.name,
        brand: data.product.brand,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// empty cart
export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_CART });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// save shipping info
export const saveBillingDetails = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_BILLING_DETAILS,
    payload: data,
  });

  localStorage.setItem("billingDetails", JSON.stringify(data));
};
