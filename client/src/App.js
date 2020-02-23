import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { CssBaseline } from "@material-ui/core";
import socket from "./socketHelper";
import Chat from "./Screen/Chat";
import Join from "./Screen/Join";

const history = createBrowserHistory();

const App = props => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("onlineAccount", onlineAccount => {
      props.setOnline(onlineAccount);
    });
  }, [props]);

  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route exac path="/">
              <Join />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setOnline: online =>
    dispatch({
      type: "SET_ONLINE",
      payload: online
    })
});

export default connect(null, mapDispatchToProps)(App);
