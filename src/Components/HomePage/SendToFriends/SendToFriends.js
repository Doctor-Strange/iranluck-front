import React from "react";
import classes from "./SendToFriends.css";
import global from "../../../global.css";
import netWorkIcon from "../../../Assets/netWorkIcon.png";
import telegram from "../../../Assets/telegram.png";
import instagram from "../../../Assets/instagram.png";
import facebook from "../../../Assets/facebook.png";
import whatsapp from "../../../Assets/whatsapp.png";
import twitter from "../../../Assets/twitter.png";

const SendToFriends = props => {
  return (
    <div className={[global.Responsive, classes.father].join(" ")}>
      <div>
        <div className={global.Drop} />
      </div>
      <h2>معرفی به دوستان</h2>
      <h3>
        ایران لاک را به دوستانتان معرفی کنید، اگر دوستان شما برنده شوند، شما هم
        نصف قیمت برنده شده را هدیه خواهید گرفت.
      </h3>
      <form>
        <label className={classes.OfferToFriends}>
          <input type="text" value="https://iranluck.com" />
          <img className={classes.Icon} src={netWorkIcon} alt="icon link" />
          <button type="submit">کپی</button>
        </label>
      </form>
      <div className={classes.SocilaContainer}>
        <a target="_blank" without rel="noopener noreferrer" href="https://facebook.com/">
          <img
            className={classes.SocialIcon}
            src={facebook}
            alt="Social media"
          />
        </a>
        <a target="_blank" without rel="noopener noreferrer" href="https://twitter.com/intent/tweet?text=https://temp.iranluck.com/?ref=234324">
          <img
            className={classes.SocialIcon}
            src={twitter}
            alt="Social media"
          />
        </a>
        <a target="_blank" without rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=whatsappphonenumber&text=https://temp.iranluck.com">
          <img
            className={classes.SocialIcon}
            src={whatsapp}
            alt="Social media"
          />
        </a>
        <a target="_blank" without rel="noopener noreferrer" href="https://telegram.me/share/url?url=https://temp.iranluck.com&text=این لینک به وسیله دوستتان برای شما ارسال شده است.با ثبت نام در سایت برنده شوید">
          <img
            className={classes.SocialIcon}
            src={telegram}
            alt="Social media"
          />
        </a>
        <a target="_blank" without rel="noopener noreferrer" href="http://instagram.com/_u/iranLuck/">
          <img
            className={classes.SocialIcon}
            src={instagram}
            alt="Social media"
          />
        </a>
      </div>
    </div>
  );
};

export default SendToFriends;
