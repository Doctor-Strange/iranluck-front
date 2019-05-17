import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM } from "./ActionTypes";
import Customer from "../../Axios/Customer";
import { log_in_Req } from "./Auth";

export const AuthRedux = (status = false) => {
  return {
    type: AUTHORIZED,
    AuthorizeStatus: status
  };
};

export const FailProgress = (value = false) => {
  return {
    type: FAIL,
    fail: value
  };
};

export const sendConfirm = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/ConfirmEmail ",
      data: {
        EncodedCoded: data
      }
    })
      .then(response => {
        console.log(response);
        return;
        dispatch(AuthRedux(true));
        dispatch(log_in_Req(response));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        console.log(error);
      });
  };
};
