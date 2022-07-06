import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_BILLING_DETAILS,
} from "../redux-constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], billingDetails: {} },
  { type, payload }
) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const isItemExist = state.cartItems.find(
        (el) => el.productId === item.productId
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.productId === isItemExist.productId ? item : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.productId !== payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    case SAVE_BILLING_DETAILS:
      return {
        ...state,
        billingDetails: payload,
      };
    default:
      return state;
  }
};
