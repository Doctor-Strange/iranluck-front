import React, { Component } from "react";

import { connect } from "react-redux";
import classes from "./SendToFriends.css";
import global from "../../../global.css";
import netWorkIcon from "../../../Assets/netWorkIcon.png";
import telegram from "../../../Assets/telegram.png";
import instagram from "../../../Assets/instagram.png";
import facebook from "../../../Assets/facebook.png";
import whatsapp from "../../../Assets/whatsapp.png";
import twitter from "../../../Assets/twitter.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
// var CryptoJS = require("crypto-js");

let time = setInterval(() => {});

class SendToFriends extends Component {
  state = {
    clicked: false,
    UserRefId: ""
  };

  onCopyClick = () => {
    this.setState(
      {
        clicked: true
      },
      () => {
        time = setInterval(() => {
          this.setState({
            clicked: false
          });
        }, 1000);
      }
    );
  };

  componentWillUnmount = () => {
    clearInterval(time);
  };

  componentWillReceiveProps = props => {
    this.pathAdder(props);
  };

  componentDidMount = () => {
    this.pathAdder(this.props);
  };

  pathAdder = props => {
    if (props.AuthorizeStatus) {
      this.setState({
        UserRefId: "/" + props.AuthData.OwnRefNumber
      });
    } else {
      this.setState({
        UserRefId: ""
      });
    }
  };

  render() {
    return (
      <div className={[global.Responsive, classes.father].join(" ")}>
        <div>
          <div className={global.Drop} />
        </div>
        <h2>معرفی به دوستان</h2>
        <h3>
          ایران لاک را به دوستانتان معرفی کنید، اگر دوستان شما برنده شوند، شما
          هم نصف قیمت برنده شده را هدیه خواهید گرفت.
        </h3>
        <label className={classes.OfferToFriends}>
          <input
            onChange={() => {}}
            type="text"
            value={`http://www.iranluck.com${this.state.UserRefId}`}
          />
          <img className={classes.Icon} src={netWorkIcon} alt="icon link" />
          <CopyToClipboard
            text={`http://www.iranluck.com${this.state.UserRefId}`}
          >
            <button onClick={this.onCopyClick}>
              کپی
              <span className={this.state.clicked ? classes.toolTip : null}>
                کپی شد
              </span>
            </button>
          </CopyToClipboard>
        </label>
        <div className={classes.SocilaContainer}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/"
          >
            <img
              className={classes.SocialIcon}
              src={facebook}
              alt="Social media"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=http://www.iranluck.com${
              this.state.UserRefId
            }`}
          >
            <img
              className={classes.SocialIcon}
              src={twitter}
              alt="Social media"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://api.whatsapp.com/send?phone=whatsappphonenumber&text=http://www.iranluck.com${
              this.state.UserRefId
            }`}
          >
            <img
              className={classes.SocialIcon}
              src={whatsapp}
              alt="Social media"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://telegram.me/share/url?url=http://www.iranluck.com${
              this.state.UserRefId
            }&text=شما به وبسایت ایران لاک ، بزرگترین مرکز خرید و توزیع بلیط های لاتاری در ایران دعوت شده اید ، برای شرکت در قرعه کشی بر روی لینک بالا کلیک کنید`}
          >
            <img
              className={classes.SocialIcon}
              src={telegram}
              alt="Social media"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://instagram.com/_u/iranLuck/"
          >
            <img
              className={classes.SocialIcon}
              src={instagram}
              alt="Social media"
            />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AuthorizeStatus: state.AUTH.AuthorizeStatus,
    AuthData: state.AUTH.AuthData
  };
};

export default connect(mapStateToProps)(SendToFriends);
