import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
}));
const Bar = (prop) => {
  const handle = prop.handle;
  const classes = useStyles();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              arial-label="menu"
              color="inherit"
              onClick={() => {
                handle(true);
              }}
              sx={{
                mr: 2,
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"></Typography>
            Menu
          </Toolbar>
        </AppBar>
      </Box>

      <div className={classes.offset}></div>
    </>
  );
};

export default Bar;
