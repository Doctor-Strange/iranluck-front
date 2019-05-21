import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM } from "./ActionTypes";
import Customer from "../../Axios/Customer";
var CryptoJS = require("crypto-js");

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
        console.log(error.response.data.Message);
      });
  };
};

export const log_in_Req = (data, lifeCycle = "local") => {
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
        if (lifeCycle === "session") {
          dispatch(saveOnSessionStorage(response));
        } else {
          dispatch(saveOnLocalStorage(response));
        }
      })
      .catch(error => {
        dispatch(FailProgress(true));
        // console.log(error.response.data.Message);
      });
  };
};

export const ChangePassRequest = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/ChangePassRequest",
      data: {
        EmailAddress: data
      }
    })
      .then(response => {
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        // console.log(error.response.data.Message);
      });
  };
};

export const ChangePassSubmit = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/ChangePassword",
      data: {
        EncodedCoded: data.EncodedCoded,
        Password: data.Password
      }
    })
      .then(response => {
        dispatch(saveOnLocalStorage(response));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        // console.log(error.response.data.Message);
      });
  };
};

export const walletAddressRequest = data => {
  console.log(data);
  return dispatch => {
    Customer({
      method: "post",
      url: "/CreateMoneyAddressRequest",
      data: {
        MoneyAddress: data.MoneyAddress,
        EmailAddress: data.EmailAddress
      }
    })
      .then(response => {
        console.log(response);
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        console.log(error);
      })
      .catch(error => {
        dispatch(FailProgress(true));
        // console.log(error.response.data.Message);
      });
  };
};

export const saveOnLocalStorage = data => {
  sessionStorage.removeItem("user");
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  localStorage.setItem("user", encrypted.toString());
  return dispatch => {
    dispatch(AuthRedux(true));
  };
};

export const saveOnSessionStorage = data => {
  localStorage.removeItem("user");
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  sessionStorage.setItem("user", encrypted.toString());
  return dispatch => {
    dispatch(AuthRedux(true));
  };
};
