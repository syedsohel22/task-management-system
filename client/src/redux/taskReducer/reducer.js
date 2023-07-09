import {
  DELETE_TASK_SUCCESS,
  GET_TASK_SUCCESS,
  POST_TASK_SUCCESS,
  TASK_PENDING,
  TASK_REJECT,
  UPDATE_TASK_SUCCESS,
} from "./actionTypes";

const initalstate = {
  isLoading: false,
  isError: false,
  tasks: [],
};

export const reducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case TASK_PENDING:
      return { ...state, isError: false, isLoading: true };

    case TASK_REJECT:
      return { ...state, isError: true, isLoading: false };

    case GET_TASK_SUCCESS:
      return { ...state, isError: false, isLoading: false, tasks: payload };

    case POST_TASK_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    case UPDATE_TASK_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    case DELETE_TASK_SUCCESS:
      return { ...state, isError: false, isLoading: false };

    default:
      return state;
  }
};
