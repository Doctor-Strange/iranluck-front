import { ALERT_MESSENGER } from "../Action/ActionTypes";

const initialState = {
  SMS: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_MESSENGER:
      return {
        ...state,
        SMS: action.SMS
      };
    default:
      return state;
  }
};
export default reducer;
