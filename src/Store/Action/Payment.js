import { FAIL, REDIRECT_TO_CONFIRM, BOOK_PURCHASE } from "./ActionTypes";
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

export const BookPurchase = (value = false) => {
  return {
    type: BOOK_PURCHASE,
    booked: value
  };
};

export const InsertPayment = value => {
  return dispatch => {
    Customer({
      method: "post",
      url: "/InsertPayment",
      headers: {
        Token: token()
      },
      data: {
        PaymentAmount: value
      }
    })
      .then(response => {
        dispatch(BookPurchase(response.data.Result));
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
};
