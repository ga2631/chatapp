let Account = {};

const AccountReducer = (state = Account, action) => {
  switch (action.type) {
    case "JOIN":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default AccountReducer