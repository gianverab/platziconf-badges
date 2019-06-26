import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./Layout";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route path="/badges/new" component={BadgeNew} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
