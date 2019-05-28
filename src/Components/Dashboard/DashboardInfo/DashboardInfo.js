import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./DashboardInfo.css";
import { connect } from "react-redux";
import Hoc from "../../../Hoc/Hoc";
import EditWalletAddress from "../EditWalletAddress/EditWalletAddress";
import Loader from "../../../UI/Loader";

class DashboardInfo extends Component {
  render() {
    let { CoinCount, TotalAmount, WalletAddress } = this.props.wallet;
    let element = this.props.wallet ? (
      <Hoc>
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
      </Hoc>
    ) : (
      <Hoc>
        <Loader
          styleProps={{
            width: "15px",
            height: "15px",
            margin: "0 5px",
            display: "block",
            border: "2px solid transparent",
            borderTop: "2px solid #0099ff"
          }}
        />
      </Hoc>
    );
    return (
      <div className={classes.panelControl}>
        <h3>کیف پول</h3>
        {element}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wallet: state.WALLET.wallet
  };
};

export default withRouter(connect(mapStateToProps)(DashboardInfo));
