import { Online } from "../Actions/ActionType";

const OnlineReducer = (state = [], action) => {
  switch (action.type) {
    case Online.setOnline:
      return action.payload;
    default:
      return state;
  }
};

export default OnlineReducer;
