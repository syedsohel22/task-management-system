import axios from "axios";
import { url } from "../../components/url";
//GET
export const getTaskFn = () => (dispatch) => {
  axios.get(`${url}`).then((res) => {
    dispatch()
  });
};
//POST
export const postTaskFn = () => (dispatch) => {};
//UPDATE
export const updateTaskFn = () => (dispatch) => {};
//DELETE
export const deleteTaskFn = () => (dispatch) => {};
