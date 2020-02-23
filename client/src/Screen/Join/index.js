import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import Socket from "../../socketHelper";

const Join = props => {
  const [account, setAccount] = React.useState();

  const handleChangeDisplayName = event => {
    setAccount({
      [event.target.name]: event.target.value
    });
  };

  const handleJoinChat = () => {
    Socket.emit("join", account, isJoined => {
      if (isJoined) {
        props.history.push("/chat");
      }
    });
  };

  return (
    <Box>
      <Typography variant="h3" component="h1">
        Login
      </Typography>
      <form>
        <TextField
          id="input-username"
          variant="outlined"
          fullWidth
          defaultValue={account ? account.displayName : ""}
          onChange={handleChangeDisplayName}
          name="displayName"
        />
        <Button color="primary" component="span" onClick={handleJoinChat}>
          Join
        </Button>
      </form>
    </Box>
  );
};

export default withRouter(Join);
