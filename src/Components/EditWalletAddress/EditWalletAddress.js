import React, { Component } from "react";
import classes from "./EditWalletAddress.css";

class EditWalletAddress extends Component {
  render() {
    return (
      <div className={classes.panelControl} id ="WalletAddress">
        <div className={classes.passwordPart}>
          <h3>{this.props.children}</h3>
          <form>
            <input placeholder="آدرس کیف پول" required type="text" />
            <button type="submit">تایید</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditWalletAddress;
