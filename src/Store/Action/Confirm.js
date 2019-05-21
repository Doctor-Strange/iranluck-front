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

export const sendConfirm = (code, type) => {
  if (type === "1") {
    return dispatch => {
      Customer({
        method: "post",
        url: "/ConfirmEmail",
        data: {
          EncodedCoded: code
        }
      })
        .then(response => {
          dispatch(saveOnLocalStorage(response));
        })
        .catch(error => {
          dispatch(FailProgress(true));
          console.log(error.response.data.Message);
        });
    };
  } else {
    return dispatch => {
      Customer({
        method: "post",
        url: "/CreateMoneyAddress",
        data: {
          EncodedCode: code
        }
      })
        .then(response => {
          dispatch(RedirectToConfirm(response));
        })
        .catch(error => {
          dispatch(FailProgress(true));
          console.log(error.response.data.Message);
        });
    };
  }
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
