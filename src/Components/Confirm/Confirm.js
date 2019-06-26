import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./Confirm.css";
import global from "../../global.css";
import Spinner from "../../UI/Spiner/Spinner";
import { sendConfirm, RedirectToConfirm } from "../../Store/Action/Confirm";
import Hoc from "../../Hoc/Hoc";

class Confirm extends Component {
  state = {
    type: null,
    Cancel: false
  };

  componentDidMount = () => {
    const params = this.props.match.params;
    const code = params.code;
    const Token = params.token;
    const type = params.type;
    if (Number(params.type) === 4) {
      this.setState({
        Cancel: true
      });
    } else if (Number(params.type) !== 3) {
      this.setState({
        type: type
      });
      this.props.sendConfirm(code, Token, type);
    }
  };

  componentWillReceiveProps = props => {
    const params = this.props.match.params;
    if (
      !props.fail &&
      props.AuthorizeStatus &&
      Number(this.props.match.params.type) === 3
    ) {
      const code = params.code;
      const type = params.type;
      this.props.sendConfirm(code, null, type, props.AuthData);
    }
    if (this.state.type === "1") {
      if (props.AuthorizeStatus && !props.fail) {
        this.props.history.push("/account/Wallet");
      }
    } else {
      if (props.redirect && !props.fail) {
        this.props.history.push("/");
        props.RedirectToConfirm();
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
    AuthorizeStatus: state.AUTH.AuthorizeStatus,
    AuthData: state.AUTH.AuthData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendConfirm: (code, Token, type, reduxToken) =>
      dispatch(sendConfirm(code, Token, type, reduxToken)),
    RedirectToConfirm: () => dispatch(RedirectToConfirm())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Confirm)
);
