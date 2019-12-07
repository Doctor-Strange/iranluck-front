import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./CountDown.css";
import Games from "../../../Axios/Games";
import { alertMessenger } from "../../../Store/Action";

let time = setInterval(() => {});

class Countdown extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    // rest of your code
  }
  state = {
    days: 6,
    hours: 0,
    minute: 0,
    second: 0,
    StopCount: false
  };

  componentDidMount = () => {
    this._isMounted = true;
    Games({
      method: "post",
      url: "/GetDateCounter",
      params: {
        Type: 1
      }
    })
      .then(response => {
        const Time = response.data.Result.Counterstring.split("-");
        if (this._isMounted) {
          this.setState({
            days: Time[0],
            hours: Time[1],
            minute: Time[2],
            second: Time[3]
          });
        }
      })
      .catch(error => {
        this.props.alertMessenger(error.response.data.Message);
      })
      .catch(() => {
        this.props.alertMessenger(
          "There is a problem in Count Down, please reload the page. "
        );
      });
    this.secondCountDown();
  };

  secondCountDown = () => {
    time = setInterval(() => {
      this.setState(
        pre => {
          return { second: pre.second - 1 };
        },
        () => {
          if (this.state.second <= 0) {
            this.setState({ second: 59 });
            this.minuteCountDown();
          }
        }
      );
    }, 1000);
  };

  minuteCountDown = () => {
    this.setState(
      pre => {
        return { minute: pre.minute - 1 };
      },
      () => {
        if (this.state.minute < 0) {
          this.setState({ minute: 59 });
          this.hoursCountDown();
        }
      }
    );
  };

  hoursCountDown = () => {
    this.setState(
      pre => {
        return { hours: pre.hours - 1 };
      },
      () => {
        if (this.state.hours < 0) {
          this.setState({ hours: 23 });
          this.DaysCountDown();
        }
      }
    );
  };

  DaysCountDown = () => {
    this.setState(
      pre => {
        return { days: pre.days - 1 };
      },
      () => {
        if (this.state.days < 0) {
          clearInterval(time);
          this.setState({ StopCount: true });
        }
      }
    );
  };

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(time);
  };

  render() {
    return (
      <div className={classes.container}>
        <h2>WEEKLY JACKPOT</h2>
        <div className={classes.counterBox}>
          <div>
            <p>{this.state.days}</p>
            <span>Day</span>
          </div>
          <div>
            <p>{this.state.hours}</p>
            <span>Hour</span>
          </div>
          <div>
            <p>{this.state.minute}</p>
            <span>Minute</span>
          </div>
          <div>
            <p>{this.state.second}</p>
            <span>Second</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    alertMessenger: sms => dispatch(alertMessenger(sms))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Countdown);
