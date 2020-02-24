import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { join } from "../../Redux/Actions/Account";
import { connect } from "react-redux";
import _ from "lodash";

const Join = props => {
  const [account, setAccount] = React.useState();

  const handleChangeDisplayName = event => {
    setAccount({
      [event.target.name]: event.target.value
    });
  };

  const handleJoinChat = () => {
    props.join(account);
  };

  React.useEffect(() => {
    !_.isEmpty(props.account) && props.history.push("/chat");
  }, [props]);

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

const mapStateToProps = state => ({
  account: state.account
});

const mapDispatchToProps = dispatch => ({
  join: account => dispatch(join(account))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Join));
