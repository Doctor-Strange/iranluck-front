import { WALLET_INFORMATION, FAIL } from "./ActionTypes";
import Customer from "../../Axios/Customer";
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

export const getWalletInformation = () => {
  return dispatch => {
    Customer({
      method: "get",
      url: "/GetUserWallet",
    })
      .then(response => {
        // dispatch(saveOnLocalStorage(response));
        dispatch(savewalletInfoOnRedux(response.data.Result));
      })
      .catch(error => {
        dispatch(FailProgress(true));
        // console.log(error.response.data.Message);
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

export const saveOnSessionStorage = data => {
  localStorage.removeItem("user");
  const message = JSON.stringify(data.data.Result);
  const key = "IranLuckHashCode";
  let encrypted = CryptoJS.AES.encrypt(message, key);
  sessionStorage.setItem("user", encrypted.toString());
  return;
  //   dispatch => {
  //     dispatch(AuthRedux(true));
  //   };
};
