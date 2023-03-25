import { createStore, combineReducers } from "redux";
import { navReducer } from "./reducers/navReducer";

const reducer = combineReducers({
  navReducer: navReducer,
});

const store = createStore(reducer);

export default store;
