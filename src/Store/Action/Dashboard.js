import { WALLET_INFORMATION, FAIL } from "./ActionTypes";
import Customer from "../../Axios/Customer";
import { alertMessenger } from "./alertAction";

var CryptoJS = require("crypto-js");
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

export const getWalletInformation = token => {
  return dispatch => {
    Customer({
      method: "get",
      headers: {
        Token: token
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
          alertMessenger("Please try again later. There is a problem right now.")
        );
      });
  };
};

export const getWalletInformationFromStorage = () => {
  const key = "IranLuckHashCode";
  let storage = sessionStorage.getItem("cacheInfo");
  let decrypted = CryptoJS.AES.decrypt(storage, key);
  const Data = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  return dispatch => {
    dispatch(savewalletInfoOnRedux(Data));
  };
};

export const CacheWalletInfo = data => {
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  sessionStorage.setItem("cacheInfo", encrypted.toString());
  return dispatch => {
    dispatch(savewalletInfoOnRedux(data.data.Result));
  };
};
