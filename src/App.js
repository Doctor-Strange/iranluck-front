import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Layout from "./Layouts/layout";
import HomePage from "./Views/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
