import React from "react";
import { Typography } from "@material-ui/core";
import socket from "../../socketHelper";

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
      <div>
        {messages.map((message, index) => (
          <ol key={index}>
            <p>{message.user}</p>
            <p>{message.content}</p>
          </ol>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Messages;
