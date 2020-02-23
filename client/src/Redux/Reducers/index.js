import { combineReducers } from "redux";
import AccountReducer from "./Account";
import OnlineReducer from "./Online";

const RootReducer = combineReducers({
  account: AccountReducer,
  online: OnlineReducer
});

export default RootReducer;
