import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./utils/routes/routing";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {routes.map((prop, key) => {
        return (
          <Route
            key={prop.path}
            exact={prop.exact}
            path={prop.path}
            component={prop.component}
          />
        );
      })}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
