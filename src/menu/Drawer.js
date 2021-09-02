import React, { useState, useEffect } from "react";
//CUSTOMER COMPONENTS
import Bar from "./AppBar";
import ListItems from "../components/router/ListItems";
//DRAWER
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Container from "@material-ui/core/Container";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#dbc8ff",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));
const Drawers = (props) => {
  //items drawers
  const list = props.Items;
  const icons = props.icons;

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(list);
  }, [list]);
  //drawer handle
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = (status) => {
    setOpen(status);
  };

  return (
    <div>
      <Bar handle={handleDrawerOpen} />
      <Container maxWidth="lg" disableGutters="true">
        <Drawer
          variant="temporary"
          elevation={16}
          anchor="left"
          open={open}
          onOpen={() => {
            handleDrawerOpen(false);
          }}
          onClose={() => {
            handleDrawerOpen(true);
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton sx={{ mb: 2 }}>
              <CloseIcon
                onClick={() => {
                  handleDrawerOpen(false);
                }}
              />
            </IconButton>
          </div>
          <Divider />
          <ListItems Items={list} close={handleDrawerOpen} icons={icons} />
        </Drawer>
      </Container>
    </div>
  );
};

export default Drawers;
