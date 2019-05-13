import React, { Component } from "react";
import classes from "./TicketPopUp.css";

class TicketPopUp extends Component {
  state = { switch: null, ticketNum: null };

  newTicket = (arg = null) => {
    arg
      ? this.setState({
          switch: "new"
        })
      : this.setState({
          switch: "history"
        });
  };

  render() {
    return (
      <div>
        <div className={classes.Box}>
        <div>
            </div>>
          </div>
      </div>
    );
  }
}

export default TicketPopUp;
