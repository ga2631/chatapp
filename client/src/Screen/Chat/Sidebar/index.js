import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { getOnline } from "../../../Redux/Actions/Online";

const Sidebar = props => {
  React.useEffect(() => {
    props.getOnline();
  }, [props]);

  return (
    <React.Fragment>
      <Typography variant="h3">Sidebar</Typography>
      <ul>
        {props.online.map((item, index) => (
          <li key={index}>{item.account.displayName}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  online: state.online
});

const mapDispatchToProps = dispatch => ({
  getOnline: () => dispatch(getOnline())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
