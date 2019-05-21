import axios from "axios";
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

const instance = axios.create({
  baseURL: "http://info.iranluck.com/api/Customer",
  headers: {
    "Content-Type": "application/json",
    DeviceId: navigator.productSub,
    DeviceName: navigator.vendor,
    Token: token(),
    OS: navigator.platform
  }
});

export default instance;
