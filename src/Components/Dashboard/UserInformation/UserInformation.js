import React, { Component } from "react";

import { connect } from "react-redux";
import classes from "./UserInformation.css";
import userIcon from "../../../Assets/user/userIcon.png";
import Hoc from "../../../Hoc/Hoc";

class UserInformation extends Component {
  state = { Email: null, walletAddress: null };

  componentWillMount = () => {
    this.setState({
      Email: this.props.AuthData.Email,
      walletAddress: this.props.wallet.WalletAddress
    });
  };

  render() {
    return (
      <div className={classes.panelControl}>
        <div>
          <img src={userIcon} alt="آیکون کاربری" />
          <p className={classes.title}>ایمیل تایید شده</p>
          <p className={classes.userName}>{this.state.Email}</p>
          {this.state.walletAddress ? (
            <Hoc>
              <p className={classes.title}>آدرس کیف پول تایید شده</p>
              <p className={classes.userName}>{this.state.walletAddress}</p>
            </Hoc>
          ) : (
            <p className={classes.title}>آدرس کیف پول ثبت نشده است</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AuthData: state.AUTH.AuthData,
    wallet: state.WALLET.wallet
  };
};

export default connect(mapStateToProps)(UserInformation);
