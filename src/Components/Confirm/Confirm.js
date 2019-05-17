import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classes from "./Confirm.css";
import global from "../../global.css";
import Spinner from "../../UI/Spiner/Spinner";
import { sendConfirm } from "../../Store/Action/Confirm";

class Confirm extends Component {
  componentDidMount = () => {
    const data = this.props.history.location.search.slice(1);
    this.props.sendConfirm(data);
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

const mapDispatchToProps = dispatch => {
  return {
    sendConfirm: value => dispatch(sendConfirm(value))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Confirm)
);
