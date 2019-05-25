import { ALERT_MESSENGER } from './ActionTypes';

export const alertMessenger = (SMS = null) => {
    return {
        type: ALERT_MESSENGER,
        SMS: SMS
    }
}