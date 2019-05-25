import { WALLET_INFORMATION, FAIL } from "./ActionTypes";
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

export const savewalletInfoOnRedux = (data = null) => {
  return {
    type: WALLET_INFORMATION,
    wallet: data
  };
};

export const getWalletInformation = () => {
  return dispatch => {
    Customer({
      method: "get",
      headers: {
        Token: token()
      },
      url: "/GetUserWallet"
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
};

// export const saveOnLocalStorage = data => {
//   const message = JSON.stringify(data.data.Result);
//   const key = "IranLuckHashCode";
//   let encrypted = CryptoJS.AES.encrypt(message, key);
//   localStorage.setItem("wallet", encrypted.toString());
//   return dispatch => {
//     dispatch(savewalletInfoOnRedux(data));
//   };
// };

export const CacheWalletInfo = data => {
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  localStorage.setItem("cacheInfo", encrypted.toString());
  return dispatch => {
    dispatch(savewalletInfoOnRedux(data.data.Result));
  };
};
