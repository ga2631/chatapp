import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

const Sidebar = props => {
  return (
    <React.Fragment>
      <Typography variant="h3">Sidebar</Typography>
      <ul>
        {props.online.map((item, index) => (
          <li key={index}>{item.displayName}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  online: state.online
});

export default connect(mapStateToProps)(Sidebar);
