import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./Footer.css";
import global from "../../global.css";
import logo from "../../Assets/WhiteLOGO.png";
import instagram from "../../Assets/instagramicon.png";
import telegramIcon from "../../Assets/telegramIcon.png";
import gototop from "../../Assets/gototop.png";

const Footer = props => {
  return (
    <footer>
      <div className={global.Responsive}>
        <div className={classes.ToTop}>
          <a href="#TOP">
            <img src={gototop} alt="go to Top" />
          </a>
        </div>
        <div>
          <div className={classes.shaperContainer}>
            <div className={classes.rectangel1} />
            <div className={classes.rectangel2} />
            <div className={classes.rectangel3} />
          </div>
        </div>
        <div className={classes.branding}>
          <img src={logo} alt="لوگو ایران لاک" />
          <h2>IRAN LUCK</h2>
        </div>
        <div className={classes.sortSection}>
          <section className={classes.aboutirnLuck}>
            <h3>Iran Luck</h3>
            <p>
              We are the first online lottery base on Digital currency in the
              world. You can play fair and square and earn prizes.
            </p>
            <p>
              <strong>You Can Win, here is your chance.</strong>
            </p>
            <a
              target="-_blank"
              rel="noopener noreferrer"
              href="https://t.me/iranlucksupport"
            >
              Telegram support: <strong>iranlucksupport@</strong>
            </a>
          </section>
          <section className={classes.linkirnLuck}>
            <h3>Quick access</h3>
            <ul>
              {/* <li>
                <NavLink to="">سوالات متداول</NavLink>
              </li> */}
              <li>
                <NavLink onClick={GotoTop} to="/account">
                  My account
                </NavLink>
              </li>
              <li>
                <NavLink onClick={GotoTop} to="/Laws/PrivacyPolicy">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink onClick={GotoTop} to="/Learn">
                  + How create Perfect Money Account?
                </NavLink>
              </li>
            </ul>
          </section>
          <section className={classes.Socialiranluck}>
            <h3>Our Social Medias</h3>
            <p>Follow us</p>
            <a
              href="https://www.instagram.com/iranluck"
              className={classes.instaBTN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="آیکون اینستاگرام" />
              Follow
            </a>
            <a
              href="https://t.me/IranLuck"
              className={classes.telegramBTN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramIcon} alt="آیکون تلگرام" />
              Follow
            </a>
          </section>
        </div>
        <div className={classes.signature}>
          <img src={logo} alt="لوگو ایران لاک" />
          <p>Copyright © 2019 IranLuck.Com All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

const GotoTop = () => {
  window.scrollTo(0, 0);
};

export default withRouter(Footer);
