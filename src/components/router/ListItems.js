import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListItems = (props) => {
  const list = props.Items;
  const close = props.close;
  const icons = props.icons;
  const [items, setItems] = useState([]);
  const [ic, setIC] = useState([]);
  useEffect(() => {
    setItems(list);
    setIC(icons);
  }, [icons, list]);

  const styles = {
    sideNav: {
      marginTop: "-60px",
      zIndex: 3,
      marginLeft: "0px",
      position: "fixed",
    },
    link: {
      color: "black",
      textDecoration: "none",
    },
  };
  return (
    <>
      <List onClick={() => close(false)}>
        {items !== [] ? (
          items.map((text, index) => (
            <Link to={"/" + text.toLowerCase()} style={styles.link}>
              <ListItem>
                <ListItemIcon>
                  {ic.map((value, key) => {
                    if (key == index) {
                      return value;
                    }
                  })}
                </ListItemIcon>

                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))
        ) : (
          <List></List>
        )}
      </List>
    </>
  );
};
export default ListItems;
