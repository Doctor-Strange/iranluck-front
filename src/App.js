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
import ChangePassword from "./Components/ChangePassword/ChangePassword";

class App extends Component {

  render() {
    let route = <Route path="/account" component={Dashboard} />;
    if (!this.props.AuthorizeStatus) {
      route = <Route exact path="/" component={HomePage} />;
    }
    return (
      <Hoc>
        <Layout>
          <Switch>
            <Route path="/Learn" component={Learn} />
            <Route path="/EventPage" component={EventPage} />
            <Route path="/Confirm/:code/:token/:type" component={Confirm} />
            <Route path="/Laws" component={Laws} />
            <Route path="/ChangePassword/:code" component={ChangePassword} />
            {route}
            <Route exact path="/" component={HomePage} />
            {this.props.AuthorizeStatus ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/:id" component={HomePage} />
            )}
            <Redirect to="/" />;
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
