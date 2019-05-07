import React from "react";
import classes from "./Taaj.css";
import global from "../../global.css";
import instagram from "../../Assets/instagramicon.png";
import telegram from "../../Assets/telegramIcon.png";

const Taaj = props => {
  return (
    <div className={classes.father}>
      <div className={global.Responsive}>
        <div className={classes.DIV}>
          <a
            target="_blank"
            rel="noopener"
            target="-_blank"
            rel="noopener"
            href="https://t.me/irnsupport"
          >
            پشتیبانی تلگرام: IRNsupport@
          </a>
        </div>
        <div className={classes.DIV}>
          <a target="_blank" rel="noopener" href="https://t.me/IranLuck">
            <img src={telegram} alt="telegram" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/iranluck"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Taaj;
