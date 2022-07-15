import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productDetailsReducer,
} from "./redux-reducers/productReducer";
import { cartReducer } from "./redux-reducers/cartReducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  productDetails: productDetailsReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    billingDetails: localStorage.getItem("billingDetails")
      ? JSON.parse(localStorage.getItem("billingDetails"))
      : {},
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
