import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Layout from "./Layouts/layout";
import HomePage from "./Views/HomePage/HomePage";
import Hoc from "./Hoc/Hoc";
import Dashboard from "./Views/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Hoc>
        <Layout>
          <Switch>
            <Route path="/account" component={Dashboard} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Layout>
      </Hoc>
    );
  }
}

export default App;
