import axios from "axios";
import { url } from "../../components/url";
import {
  GET_TASK_SUCCESS,
  POST_TASK_SUCCESS,
  TASK_PENDING,
  TASK_REJECT,
} from "./actionTypes";
//GET
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};
export const getTaskFn = () => (dispatch) => {
  dispatch({ type: TASK_PENDING });
  axios
    .get(`${url}/task/`)
    .then((res) => {
      dispatch({ type: GET_TASK_SUCCESS, tasks: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: TASK_REJECT });
    });
};
//POST
export const postTaskFn = (payload) => (dispatch) => {
  dispatch({ type: TASK_PENDING });
  axios
    .post(`${url}/task/create`, payload, { headers })
    .then((res) => {
      console.log("res-data", res.data);
      dispatch({ type: POST_TASK_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: TASK_REJECT });
    });
};
//UPDATE
export const updateTaskFn = () => (dispatch) => {};
//DELETE
export const deleteTaskFn = () => (dispatch) => {};
