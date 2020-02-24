import { Account } from "../Actions/ActionType";

const AccountReducer = (state = {}, action) => {
  switch (action.type) {
    case Account.join:
      return action.payload;
    case Account.disjoin:
      return {};
    default:
      return state;
  }
};

export default AccountReducer;
