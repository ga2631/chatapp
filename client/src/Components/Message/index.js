import React from "react";
import { Box } from "@material-ui/core"
import Messages from "./Messages";
import Send from "./Send";

const Message = () => {
  return (
    <React.Fragment>
      <Messages />
      <Send />
    </React.Fragment>
  )
}

export default Message