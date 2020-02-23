let Online = [];

const OnlineReducer = (state = Online, action) => {
  switch (action.type) {
    case "SET_ONLINE":
      return action.payload;
    default:
      return state;
  }
};

export default OnlineReducer