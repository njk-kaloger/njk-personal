import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import About from "./About";
import Contact from "./Contact";
import Example from "./Example";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/examples" component={Example} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
