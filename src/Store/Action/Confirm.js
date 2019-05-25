import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM } from "./ActionTypes";
import Customer from "../../Axios/Customer";
import { alertMessenger } from "./alertAction";
var CryptoJS = require("crypto-js");
const token = () => {
  if (localStorage["user"]) {
    //get user information from Storage
    const key = "IranLuckHashCode";
    let storage = localStorage.getItem("user");
    let decrypted = CryptoJS.AES.decrypt(storage, key);
    const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return Data.Token;
  }
  if (sessionStorage["user"]) {
    //get user information from Storage
    const key = "IranLuckHashCode";
    let storage = sessionStorage.getItem("user");
    let decrypted = CryptoJS.AES.decrypt(storage, key);
    const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return Data.Token;
  }
  return "";
};
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

export const sendConfirm = (code, Token, type) => {
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
          dispatch(alertMessenger(error.response.data.Message));
        })
        .catch(() => {
          dispatch(
            alertMessenger("خطایی رخ داده است ! مجددا صفحه را بازیابی کنید.")
          );
        });
    };
  }
  if (type === "2") {
    return dispatch => {
      Customer({
        method: "post",
        url: "/CreateMoneyAddress",
        headers: {
          Token: Token
        },
        data: {
          EncodedCode: code
        }
      })
        .then(response => {
          dispatch(RedirectToConfirm(response));
        })
        .catch(error => {
          dispatch(FailProgress(true));
          dispatch(alertMessenger(error.response.data.Message));
        })
        .catch(() => {
          dispatch(
            alertMessenger("خطایی رخ داده است ! مجددا صفحه را بازیابی کنید.")
          );
        });
    };
  }
  if (type === "3") {
    return dispatch => {
      Customer({
        method: "post",
        url: "/ChangePaymentstatus",
        headers: {
          Token: token()
        },
        data: {
          ID: code,
          Status: "true"
        }
      })
        .then(response => {
          dispatch(RedirectToConfirm(response));
        })
        .catch(error => {
          dispatch(FailProgress(true));
          dispatch(alertMessenger(error.response.data.Message));
        })
        .catch(() => {
          dispatch(
            alertMessenger("خطایی رخ داده است ! مجددا صفحه را بازیابی کنید.")
          );
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
