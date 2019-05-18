import React, { Component } from "react";
import classes from "./menuItems.css";
import Hoc from "../../../Hoc/Hoc";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { AuthRedux } from "../../../Store/Action";

class MenuItems extends Component {
  onItemClick = () => {
    this.props.OnItemClick();
  };

  LOGOUT = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    this.props.AuthRedux();
  };

  render() {
    const { AuthorizeStatus } = this.props;
    const Items = AuthorizeStatus ? (
      <Hoc>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Wallet">موجودی کیف پول</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/Charge">شارژ</NavLink>
        </li>
        <li onClick={this.onItemClick}>
          <NavLink to="/account/WithDrawal">برداشت</NavLink>
        </li>
        <li onClick={this.LOGOUT} className={classes.LogBtn}>
          خروج
        </li>
      </Hoc>
    ) : (
      <li onClick={this.props.OnDrawelClick} className={classes.LogBtn}>
        ورود / ثبت نام
      </li>
    );
    return <ul className={classes.menulist}>{Items}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AuthRedux: () => dispatch(AuthRedux())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MenuItems)
);
