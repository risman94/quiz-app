import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

const renderApp = () => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exatc path="/" component={Home} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("app")
  );
};

renderApp();
