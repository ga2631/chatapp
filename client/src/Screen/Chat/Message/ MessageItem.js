import React from "react";
import { Typography } from "@material-ui/core";

const MessageItem = props => {
  return (
    <div>
      <Typography variant="h5" component="p">
        {props.message.user}
      </Typography>
      <Typography variant="body2" component="p">
        {props.message.content}
      </Typography>
    </div>
  );
};

export default MessageItem;
