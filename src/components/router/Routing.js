import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

const Routing = (props) => {
  const modules = props.nav;

  const [component, setComponent] = useState([]);
  useEffect(() => {
    setComponent(modules);
    console.log(modules.length);
  }, [modules]);

  return (
    <>
      <Switch>
        {component.length > 0 ? (
          <Route
            exact
            path={"/"}
            render={(props) => component[0].component[0]}
          />
        ) : (
          ""
        )}

        {component.length > 0
          ? component.map((object, key) => {
              let pages = object.page,
                cp = object.component;
              return pages.map((value, index) => {
                return (
                  <Route
                    exact
                    path={"/" + value.toLowerCase()}
                    render={(props) => cp[index]}
                  />
                );
              });
            })
          : ""}
      </Switch>
    </>
  );
};

export default Routing;
