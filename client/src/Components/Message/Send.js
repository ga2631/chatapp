import React from "react";
import { connect } from "react-redux";
import { Grid, IconButton, TextField, makeStyles } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import socket from "../../socketHelper";

const useStyle = makeStyles(() => {
  return {
    root: {
      position: "fixed",
      bottom: 0
    }
  };
});

const Send = props => {
  const classes = useStyle();

  const [message, setMessage] = React.useState("");

  const handleChangeMessage = event => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    socket.emit("sendMessage", {
      user: props.account.displayName,
      content: message
    });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        handleSendMessage();
      }}
    >
      <Grid container className={classes.root}>
        <Grid item>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            defaultValue={message}
            onChange={handleChangeMessage}
          />
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            component="span"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(Send);
