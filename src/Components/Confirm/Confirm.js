import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./Confirm.css";
import global from "../../global.css";
import Spinner from "../../UI/Spiner/Spinner";
import { sendConfirm } from "../../Store/Action/Confirm";

class Confirm extends Component {
  state = {
    type: null
  };
  componentDidMount = () => {
    const item = this.props.history.location.search.split("&");
    const code = item[0].substring(item[0].indexOf("=") + 1);
    const type = item[1].split("=")[1];
    this.setState({
      type: type
    });
    this.props.sendConfirm(code, type);
  };

  componentWillReceiveProps = props => {
    console.log(props.AuthorizeStatus , props.redirect , props.fail)
    if (this.state.type === "1") {
      if (props.AuthorizeStatus && !props.fail) {
        this.props.history.push("/account/Wallet");
      }
    } else {
      if (props.redirect && !props.fail) {
        this.props.history.push("/");
      }
    }
  };

  render() {
    return (
      <div className={classes.father}>
        <div className={global.Responsive}>
          <h2>ایمیل شما با موفقیت تایید شد</h2>
          <p>در حال دریافت اطلاعات حساب کاربری</p>
          <Spinner />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fail: state.AUTH.fail,
    redirect: state.AUTH.redirect,
    AuthorizeStatus: state.AUTH.AuthorizeStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendConfirm: (code, type) => dispatch(sendConfirm(code, type))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Confirm)
);
