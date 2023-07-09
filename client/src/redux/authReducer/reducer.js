import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionType";

const intiState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = intiState, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
