import React, { Component } from "react";
import classes from "./ticketBook.css";

class TicketBook extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <h3>
          تعداد بلیط <span>( با خرید هر 10 بلیط، 1 بلیط رایگان بگیرید ) </span>:
        </h3>
        <form className={classes.Form}>
          <input type="number" placeholder="تعداد" step="1" min="1" max="1000"/>
          <button type="submit">خرید</button>
        </form>
      </div>
    );
  }
}

export default TicketBook;
