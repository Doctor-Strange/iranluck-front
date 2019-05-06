import React, { Component } from "react";
import classes from "./Layout.css";
import Hoc from "../Hoc/Hoc";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Hoc>
        <header className={classes.header} />
        {/* <UserBox /> */}
        <main>{this.props.children}</main>
        <footer />
      </Hoc>
    );
  }
}

export default Layout;
