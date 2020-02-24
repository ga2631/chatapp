import { Online } from "./ActionType";
import socket from "../../socketHelper";

export const actGetOnline = account => ({
  type: Online.setOnline,
  payload: account
});

export const getOnline = () => {
  return dispatch => {
    socket.on("onlineAccount", onlineAccount => {
      dispatch(actGetOnline(onlineAccount));
    });
  };
};
