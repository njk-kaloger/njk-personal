import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../app";
import NotFound from "../not-found";
import About from "../about";
import Contact from "../contact";
import Example from "../example";

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
