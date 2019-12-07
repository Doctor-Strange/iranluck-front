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
            deposit :<span>{TotalAmount}</span>Perfect Money
          </p>
          <NavLink to="/account/Charge"> + Deposit</NavLink>
        </div>
        <div className={classes.luckyCoin}>
          <p>
            Your Lucky Coins :<span>{CoinCount}</span>
          </p>
        </div>
        {WalletAddress ? <p>Your Perfect Money Wallet address :</p> : null}
        <div className={classes.pandSpan}>
          {WalletAddress ? (
            <Hoc>
              <p>{WalletAddress}</p>
              <span>Confirmed</span>
            </Hoc>
          ) : (
            <EditWalletAddress>Enter your Perfect Money Wallet address</EditWalletAddress>
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
        <h3>Wallet</h3>
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
