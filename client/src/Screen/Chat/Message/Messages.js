import React from "react";
import { Typography } from "@material-ui/core";
import socket from "../../../socketHelper";
import MessageItem from "./ MessageItem";

const Messages = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    socket.on("receiveMessage", message => {
      setMessages([...messages, message]);
    });

    socket.on("joined", account => {
      setMessages([
        ...messages,
        {
          user: "Admin",
          content: `${account.displayName} has joined`
        }
      ]);
    });
  }, [messages]);

  return (
    <React.Fragment>
      <Typography variant="h3" component="h1">
        CHAT APP
      </Typography>
      <React.Fragment>
        {messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Messages;
