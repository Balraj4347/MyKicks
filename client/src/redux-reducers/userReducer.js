import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CLEAR_ERRORS,
} from "../redux-constants/userConstants";

export const userReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
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
