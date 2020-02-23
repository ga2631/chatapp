import React from "react"
import { Grid } from "@material-ui/core"
import Sidebar from '../../Components/Sidebar';
import Message from '../../Components/Message';

const Chat = () => {
  return (
    <Grid container>
      <Grid item style={{ height: "100vh" }} xs={12} md={3}>
        <Sidebar />
      </Grid>
      <Grid item style={{ height: "100vh" }} xs={12} md={9}>
        <Message />
      </Grid>
    </Grid>
  )
}

export default Chat