# Drawer con Material-UI y React-Router-Dom

Implementa un menu hamburguesa con material-ui ya pre configurado, y trabajando en conjunto con React router dom. Listo para ser personalizado con nuestra podrias pages.

Primeramente importa el componente Navigate. y editar el JSON con el mismo nombre.

https://alexandergrand.github.io/react-router-dom/

```JSX
import "./App.css";
import Navigate from "./components/router/Navigate";

function App() {
  return (
    <div>
      <Navigate />
    </div>
  );
}

```

Dentro del componente Navigate, edite el JSON Navigate importando sus propias pages, icons de Material Icons y nombres de pagina.

```JSX
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
    pages: ["Welcome", "Page1", "Page2"],//Nombres de pagina
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
```
