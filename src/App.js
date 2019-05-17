import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./Layouts/layout";
import HomePage from "./Views/HomePage/HomePage";
import Hoc from "./Hoc/Hoc";
import Dashboard from "./Views/Dashboard/Dashboard";
import EventPage from "./Components/EventPage/EventPage";
import Confirm from "./Components/Confirm/Confirm";
import Laws from "./Views/Laws/Laws";
import Learn from "./Views/learn/Learn";

class App extends Component {
  componentDidMount = () => {};
  render() {
    let route = <Route path="/account" component={Dashboard} />;
    if (!this.props.AuthorizeStatus) {
      route = <Redirect to="/" />;
    }
    return (
      <Hoc>
        <Layout>
          <Switch>
            <Route path="/Learn" component={Learn} />
            <Route path="/EventPage" component={EventPage} />
            <Route path="/Confirm" component={Confirm} />
            <Route path="/Laws" component={Laws} />
            <Route exact path="/" component={HomePage} />
            {route}
          </Switch>
        </Layout>
      </Hoc>
    );
  }
}

const mapStateTpProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus
  };
};

export default connect(mapStateTpProps)(App);
