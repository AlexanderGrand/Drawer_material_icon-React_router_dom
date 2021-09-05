import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Drawers from "../../menu/Drawer";
import Routing from "./Routing";
//pages
import Page1 from "../../pages/Page1";
import Page2 from "../../pages/Page2";
import Welcome from "../../pages/Welcome";
//Icons
import PieChartIcon from "@material-ui/icons/PieChart";
import SearchIcon from "@material-ui/icons/Search";
import WebIcon from "@material-ui/icons/Web";

//Personalizar JSON
const Navigate = (props) => {
  let navigate = {
    pages: ["Welcome", "Page1", "Page2"], //Nombres de pagina
    icons: [<WebIcon />, <PieChartIcon />, <SearchIcon />],
    component: [
      <Welcome {...props} />,
      <Page1 {...props} />,
      <Page2 {...props} />,
    ],
  };

  return (
    <>
      <Router>
        <Drawers Items={navigate.pages} icons={navigate.icons} />
        <Routing
          nav={[{ page: navigate.pages, component: navigate.component }]}
        />
      </Router>
    </>
  );
};

export default Navigate;
