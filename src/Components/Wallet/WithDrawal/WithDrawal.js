import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import classes from "./WithDrawal.css";

class WithDrawal extends Component {
  render() {
    return (
      <div className={classes.panelControl}>
        <h3>برداشت </h3>
        <div className={classes.withdrawal}>
          <div className={classes.InputFather}>
            <input
              type="number"
              step="1"
              placeholder="تعداد سکه"
              min="1"
              max="300"
            />
            <span>حداکثر تعداد سکه قابل برداشت در هر روز 300 عدد می باشد</span>
          </div>
          <p>عدد سکه پرفکت مانی از حساب کاربری kalam rehimi به آدرس کیف پول</p>
          <div className={classes.pandSpan}>
            <p>LKHLF67LKUGGH4HJ12390</p>
            <span>تایید شده</span>
          </div>
          <p>انتقال داده شود.</p>
          <form>
            <button type="submit">تایید</button>
          </form>
        </div>
        <div className={classes.teach}>
          <NavLink to="">+ تغییر آدرس کیف پول</NavLink>
          <NavLink to="">+ آموزش تسویه حساب</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(WithDrawal);
