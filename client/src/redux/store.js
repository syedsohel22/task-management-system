import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as taskReducer } from "./taskReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
const rootreducer = combineReducers({
  taskReducer,
  authReducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
