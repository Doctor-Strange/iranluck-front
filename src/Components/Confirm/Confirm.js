import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./Confirm.css";
import global from "../../global.css";
import Spinner from "../../UI/Spiner/Spinner";
import { sendConfirm } from "../../Store/Action/Confirm";
import Hoc from "../../Hoc/Hoc";

class Confirm extends Component {
  state = {
    type: null,
    Cancel: false
  };
  componentDidMount = () => {
    const item = this.props.history.location.search.split("&");
    const hash = item[0].substring(item[0].indexOf("=") + 1);
    const type = item[1].split("=")[1];
    const slp = hash.split("Join");
    const code = slp[0];
    const Token = slp[1];    
    if (Number(type) === 4) {
      this.setState({
        Cancel: true
      });
    } else {
      this.setState({
        type: type
      });
      this.props.sendConfirm(code, Token, type);
    }
  };

  componentWillReceiveProps = props => {
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
    const failpayment = (
      <Hoc>
        <p className={classes.Fail}>پرداخت ناموفق</p>
        <div className={classes.teach}>
          <NavLink to="/">صفحه اصلی</NavLink>
        </div>
        <div className={classes.panelControl}>
          <h3>آموزش ها</h3>
          <div className={classes.teach}>
            <NavLink to="/Learn">+ آموزش ساخت حساب پرفکت مانی</NavLink>
            <NavLink to="/Learn/CreateWallet">
              + آموزش ساخت کیف پول دیجیتال
            </NavLink>
            <NavLink to="/Learn/BuyPerfectMoney">
              + آموزش خرید پرفکت مانی
            </NavLink>
            <NavLink to="/">+ آموزش شارژ حساب</NavLink>
            <NavLink to="/Learn/WithDrawal">+ آموزش تسویه حساب</NavLink>
            <NavLink to="/Learn/Walletaddress">+ تغییر آدرس کیف پول</NavLink>
          </div>
        </div>
      </Hoc>
    );
    return (
      <div className={classes.father}>
        <div className={global.Responsive}>
          {this.state.Cancel ? (
            failpayment
          ) : (
            <Hoc>
              <h2>ایمیل شما با موفقیت تایید شد</h2>
              <p>در حال دریافت اطلاعات حساب کاربری</p>
              <Spinner />
            </Hoc>
          )}
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
    sendConfirm: (code, Token, type) => dispatch(sendConfirm(code, Token, type))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Confirm)
);
