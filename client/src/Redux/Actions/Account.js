import { Account } from "./ActionType";
import socket from "../../socketHelper";

export const actJoin = account => ({
  type: Account.join,
  payload: account
});

export const join = account => {
  return dispatch => {
    socket.emit("join", account, data => {
      dispatch(actJoin(data));
    });
  };
};