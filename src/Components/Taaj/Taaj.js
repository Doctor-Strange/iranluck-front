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
            rel="noopener noreferrer"
            target="-_blank"
            href="https://t.me/iranlucksupport"
          >
            پشتیبانی تلگرام: iranlucksupport@
          </a>
        </div>
        <div className={classes.DIV}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/IranLuck"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
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
