import { combineReducers } from "redux";
import AccountReducer from "./Account";

const RootReducer = combineReducers({
  account: AccountReducer
});

export default RootReducer;
