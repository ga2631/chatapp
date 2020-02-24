import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Message from "./Message";
import { withRouter } from "react-router-dom";
import _ from "lodash";

const Chat = props => {
  React.useEffect(() => {
    _.isEmpty(props.account) && props.history.replace("/");
  }, [props]);

  return (
    <Grid container>
      <Grid item style={{ height: "100vh" }} xs={12} md={3}>
        <Sidebar />
      </Grid>
      <Grid item style={{ height: "100vh" }} xs={12} md={9}>
        <Message />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  account: state.account
});

export default connect(mapStateToProps)(withRouter(Chat));
