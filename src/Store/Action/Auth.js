import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM } from "./ActionTypes";
import Customer from "../../Axios/Customer";

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

export const RedirectToConfirm = (value = false) => {
  return {
    type: REDIRECT_TO_CONFIRM,
    redirect: value
  };
};

export const sign_Up_Req = data => {
  //type = 1 Site , type =2 Google
  return dispatch => {
    Customer({
      method: "post",
      url: "/Signup",
      data: {
        Email: data.Email,
        Password: data.Password,
        ParentRefNumber: data.ParentRefNumber
      }
    })
      .then(response => {
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        console.log(error);
      });
  };
};

export const log_in_Req = data => {
  //type = Site  log in from Site , type =2 log in with Google account
  return dispatch => {
    Customer({
      method: "post",
      url: "/Login",
      data: {
        Email: data.Email,
        Password: data.Password,
        Type: data.Type
      }
    })
      .then(response => {
        dispatch(AuthRedux(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        console.log(error);
      });
  };
};
