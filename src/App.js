import React, { useEffect } from "react";
import mainRoutes from "./routes/MainRoute";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Weather app";
  }, []);
  return (
    <>
      <BrowserRouter>
        <Switch>
          {mainRoutes.map(({ path, exact, Component }, i) => {
            return (
              <Route
                key={i}
                path={path}
                exact={exact}
                render={(props) => <Component {...props} />}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
