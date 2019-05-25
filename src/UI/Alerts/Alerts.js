import React, { Component } from 'react';
import { connect } from "react-redux";
import { alertMessenger } from "../../Store/Action";
import classes from './Alerts.css';
import icon from '../../Assets/alert.png';

class Alerty extends Component {

    state = {
        message: null
    }

    componentWillReceiveProps = props => {
        if (props.SMS) {
            setTimeout(() => {
                this.props.alertMessenger(null)
            },
                3000
            );
        }
        this.setState({
            message: props.SMS
        })
    }

    render() {
        return (
            this.props.SMS
                ? <div className={[classes.AlertyBox, this.props.SMS ? classes.ShowAlert : null].join(" ")}>
                    <img src={icon} alt="alert" />
                    <span>{this.props.SMS}</span>
                </div>
                : null
        )
    }
}

const mapStateToPrpos = state => {
    return {
        SMS: state.ALERT.SMS
    }
}

const mapDispatchToProps = dispatch => {
    return {
        alertMessenger: SMS => dispatch(alertMessenger(SMS))
    }
}

export default connect(mapStateToPrpos, mapDispatchToProps)(Alerty)
