import React, { Component } from "react";
import classes from "./Layout.css";
import Hoc from "../Hoc/Hoc";
import Footer from "../Views/Footer/Footer";
import UserBox from "../Containers/userAccount/userAccount";
import BackDraw from "../UI/BackDraw/BackDraw";
import Taaj from "../Components/Taaj/Taaj";
import Menu from "../Containers/Menu/menu";

class Layout extends Component {
  state = {
    DrawelClose: true,
    ResToggleminu: false
  };

  OnDrawelClick = () => {
    this.setState(pre => {
      return {
        DrawelClose: !pre.DrawelClose,
        ResToggleminu: false
      };
    });
  };

  onmenuToggle = (arg = true) => {
    arg
      ? this.setState(pre => {
          return {
            ResToggleminu: !pre.ResToggleminu
          };
        })
      : this.setState({
          ResToggleminu: false
        });
  };

  render() {
    return (
      <Hoc>
        {this.state.DrawelClose ? null : (
          <Hoc>
            <BackDraw
              DrawelClose={this.state.DrawelClose}
              OnDrawelClick={this.OnDrawelClick}
            />
            <UserBox OnDrawelClick={this.OnDrawelClick} />
          </Hoc>
        )}
        <Taaj />
        <header id="#TOP" className={classes.header}>
          <div onClick={this.onmenuToggle} className={classes.ToggleIcon}>
            <div />
            <div />
            <div />
          </div>
          <nav>
            <Menu
              OnDrawelClick={this.OnDrawelClick}
              menuToggle={this.state.ResToggleminu}
              OnItemClick={() => this.onmenuToggle(false)}
            />
          </nav>
          <BackDraw
            DrawelClose={!this.state.ResToggleminu}
            OnDrawelClick={() => this.onmenuToggle(true)}
          />
        </header>
        <main>{this.props.children}</main>
        <Footer />
      </Hoc>
    );
  }
}

export default Layout;
