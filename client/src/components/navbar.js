import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  spacing: {
    marginBottom: 30,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.spacing}>
      <Toolbar>
        <Typography variant="h5">Muir Washer & Dryer Status</Typography>
      </Toolbar>
    </AppBar>
  );
}
// TODO styling of Navbar to make it look better

export default NavBar;
