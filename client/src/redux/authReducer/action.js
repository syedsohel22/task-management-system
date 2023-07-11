import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTRATION_FAILURE,
  REGISTRATION_PENDING,
  REGISTRATION_SUCCESS,
} from "./actionType";

import { url } from "../../components/url.js";
console.log(url);
export const loginFunc = (data) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`${url}/user/login`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const registerFunc = (data) => (dispatch) => {
  dispatch({ type: REGISTRATION_PENDING });
  axios
    .post(`${url}/user/register`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: REGISTRATION_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE });
    });
};
