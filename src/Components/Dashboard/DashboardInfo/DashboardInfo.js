import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./DashboardInfo.css";
import { connect } from "react-redux";
import { getWalletInformation } from "../../../Store/Action";
import Hoc from "../../../Hoc/Hoc";
import EditWalletAddress from "../EditWalletAddress/EditWalletAddress";

class DashboardInfo extends Component {
  componentDidMount = () => {
    if (localStorage["user"] || sessionStorage["user"]) {
      this.props.getWalletInformation();
    }
  };

  componentWillReceiveProps = props => {
  };
  render() {
    let { CoinCount, TotalAmount, WalletAddress } = this.props.wallet;

    return (
      <div className={classes.panelControl}>
        <h3>کیف پول</h3>
        <div className={classes.deposit}>
          <p>
            موجودی :<span>{TotalAmount}</span>عدد پرفکت مانی
          </p>
          <NavLink to="/account/Charge"> + شارژ کیف پول</NavLink>
        </div>
        <div className={classes.luckyCoin}>
          <p>
            سکه های شانس :<span>{CoinCount}</span>عدد
          </p>
        </div>
        {WalletAddress ? <p>آدرس کیف پول :</p> : null}
        <div className={classes.pandSpan}>
          {WalletAddress ? (
            <Hoc>
              <p>{WalletAddress}</p>
              <span>تایید شده</span>
            </Hoc>
          ) : (
            <EditWalletAddress>ثبت آدرس کیف پول</EditWalletAddress>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.WALLET.wallet
  };
};

const mapDispathToProps = dispatch => {
  return {
    getWalletInformation: () => dispatch(getWalletInformation())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(DashboardInfo)
);
