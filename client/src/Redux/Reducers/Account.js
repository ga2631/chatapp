let Account = {};

const AccountReducer = (state = Account, action) => {
  switch (action.type) {
    case "JOIN":
      return action.payload;
    default:
      return state;
  }
};

export default AccountReducer