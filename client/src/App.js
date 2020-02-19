import React, { useEffect } from 'react';
import './App.css';
import socket from "./socketHelper";
import { CssBaseline, Grid } from "@material-ui/core"
import Sidebar from './Components/Sidebar';
import Message from './Components/Message';

const App = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server")
    })
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Grid container>
        <Grid item style={{ height: "100vh" }} xs={12} md={3}>
          <Sidebar />
        </Grid>
        <Grid item style={{ height: "100vh" }} xs={12} md={9}>
          <Message />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
