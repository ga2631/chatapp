import React from "react";
import { Grid, IconButton, TextField, makeStyles } from "@material-ui/core"
import SendIcon from '@material-ui/icons/Send';

const useStyle = makeStyles(theme => {
  return ({
    root: {
      position: "fixed",
      bottom: 0,
    }
  })
})

const Send = (props) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <TextField id="outlined-basic" variant="outlined" fullWidth />
      </Grid>
      <Grid item>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Send;