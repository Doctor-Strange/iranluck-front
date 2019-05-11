import React, { Component } from "react";
import classes from "./EditProfile.css";
import EditWalletAddress from "../../Components/EditWalletAddress/EditWalletAddress";

class EditProfile extends Component {
  render() {
    return (
      <div>
        <div className={classes.panelControl}>
          <h3>تغییر رمز</h3>
          <form>
            <input placeholder="رمز فعلی" required type="password" />
            <input placeholder="رمز جدید" required type="password" />
            <input placeholder="تکرار رمز جدید" required type="password" />
            <button type="submit">تایید</button>
          </form>
        </div>
        <EditWalletAddress>تغییر آدرس کیف پول</EditWalletAddress>;
      </div>
    );
  }
}

export default EditProfile;
