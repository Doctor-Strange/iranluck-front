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
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(
          alertMessenger(
            "برای ثبت نام مجددا تلاش کنید. در ارتباط با سرور خطایی رخ داده است."
          )
        );
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
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(
          alertMessenger(
            "برای ورود مجددا تلاش کنید. در ارتباط با سرور خطایی رخ داده است."
          )
        );
      });
  };
};

export const ChangePassRequest = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/ChangePassRequest",
      headers: {
        Token: token()
      },
      data: {
        EmailAddress: data
      }
    })
      .then(response => {
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(
          alertMessenger(
            "خطایی رخ داده است ! برای تغییر پسورد خود مجددا تلاش کنید"
          )
        );
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
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(alertMessenger("خطایی رخ داده است ! مجددا تلاش کنید."));
      });
  };
};

export const walletAddressRequest = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/CreateMoneyAddressRequest",
      headers: {
        Token: token()
      },
      data: {
        MoneyAddress: data.MoneyAddress,
        EmailAddress: data.EmailAddress
      }
    })
      .then(response => {
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(
          alertMessenger(
            "خطایی رخ داده است ! مجددا برای تغییر آدرس کیف پول خود تلاش کنید."
          )
        );
      });
  };
};

export const PanelChangePassword = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/PanelChangePassword ",
      headers: {
        Token: token()
      },
      data: {
        NewPassword: data.NewPassword,
        Password: data.Password
      }
    })
      .then(response => {
        dispatch(AuthRedux(false));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(alertMessenger("خطایی رخ داده است ! مجددا تلاش کنید."));
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
