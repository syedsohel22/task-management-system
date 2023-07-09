import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

import url from "../../components/url.js";
console.log(url);
export const loginFunc = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`${url}`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const registerFunc = () => (dispatch) => {};
