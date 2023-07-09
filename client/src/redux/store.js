import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reduer as taskReducer } from "./taskReducer/reducer";
import { reduer as authReducer } from "./authReducer/reducer";
const rootreducer = combineReducers({
  taskReducer,
  authReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
