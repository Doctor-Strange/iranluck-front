import React, { Component } from "react";
import classes from "./CountDown.css";
import Games from "../../../Axios/Games";

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
        console.log(error);
      })
      .catch(error => {
        console.log(error.response.data.Message);
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
        <h2>فرصت خرید بلیط را از دست ندهید</h2>
        <div className={classes.counterBox}>
          <div>
            <p>{this.state.days}</p>
            <span>روز</span>
          </div>
          <div>
            <p>{this.state.hours}</p>
            <span>ساعت</span>
          </div>
          <div>
            <p>{this.state.minute}</p>
            <span>دقیقه</span>
          </div>
          <div>
            <p>{this.state.second}</p>
            <span>ثانیه</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Countdown;
