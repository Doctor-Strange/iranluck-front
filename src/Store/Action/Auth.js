import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM,OPEN_LOGIN_MODAL } from "./ActionTypes";
import Customer from "../../Axios/Customer";
import { alertMessenger } from "./alertAction";
var CryptoJS = require("crypto-js");


export const OpenlogInModal = (value = false) => {
  return {
    type: OPEN_LOGIN_MODAL,
    open_it: value
  };
};


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
      .then(() => {
        dispatch(RedirectToConfirm(true));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        dispatch(alertMessenger(error.response.data.Message));
      })
      .catch(() => {
        dispatch(
          alertMessenger(
            "Please try again later. There is a problem right now."
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
            "Please try again later. There is a problem right now."
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
            "Please try again later. There is a problem right now."
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
        dispatch(alertMessenger("Please try again later. There is a problem right now."));
      });
  };
};

export const walletAddressRequest = data => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/CreateMoneyAddressRequest",
      headers: {
        Token: data.Token
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
            "Please try again later. There is a problem right now."
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
        Token: data.Token
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
        dispatch(alertMessenger("Please try again later. There is a problem right now."));
      });
  };
};

export const getDataFromStorage = () => {
  return dispatch => {
    //get user information from Storage
    const key = "IranLuckHashCode";
    let storage = localStorage.getItem("user");
    let decrypted = CryptoJS.AES.decrypt(storage, key);
    const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    dispatch(AuthRedux(true, Data));
  };
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

export const saveOnSessionStorage = data => {
  const info = data.data.Result;
  localStorage.removeItem("user");
  const message = JSON.stringify(info);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  sessionStorage.setItem("user", encrypted.toString());
  return dispatch => {
    dispatch(AuthRedux(true, info));
  };
};
