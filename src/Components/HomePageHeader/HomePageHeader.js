import React from "react";
import global from "../../global.css";
import classes from "./HomePageHeader.css";

const HomePageHeader = props => {
  return (
    <div className={classes.background}>
      <div className={[global.Responsive, classes.bannerPart].join(" ")}>
        <h1>ایران لاک</h1>
        <h2>بزرگترین وبسایت رسمی فروش بلیط های لاتاری در ایران</h2>
        <h3>جایزه بزرگ 100.000.000 تومانی !</h3>
      </div>
    </div>
  );
};

export default HomePageHeader;
