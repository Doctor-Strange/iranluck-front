import {
  AUTHORIZED,
  FAIL,
  REDIRECT_TO_CONFIRM,
  WALLET_INFORMATION
} from "./ActionTypes";
import Customer from "../../Axios/Customer";
import { alertMessenger } from "./alertAction";
var CryptoJS = require("crypto-js");

export const AuthRedux = (status = false, data = null) => {
  if (data) {
    return {
      type: AUTHORIZED,
      AuthorizeStatus: status,
      AuthData: data
    };
  } else {
    return {
      type: AUTHORIZED,
      AuthorizeStatus: status,
      AuthData: data
    };
  }
};

export const savewalletInfoOnRedux = (data = null) => {
  return {
    type: WALLET_INFORMATION,
    wallet: data
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

export const sendConfirm = (code, Token, type, reduxToken) => {
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
          dispatch(CacheWalletInfo(response));
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
          Token: reduxToken.Token
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
  const info = data.data.Result;
  const message = JSON.stringify(info);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  localStorage.setItem("user", encrypted.toString());
  return dispatch => {
    dispatch(AuthRedux(true, info));
  };
};

export const CacheWalletInfo = data => {
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  sessionStorage.setItem("cacheInfo", encrypted.toString());
  return dispatch => {
    dispatch(savewalletInfoOnRedux(data.data.Result));
    dispatch(RedirectToConfirm(true));
  };
};
