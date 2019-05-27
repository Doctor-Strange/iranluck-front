import { FAIL, REDIRECT_TO_CONFIRM } from "./ActionTypes";

import Games from "../../Axios/Games";

import { alertMessenger } from "./alertAction";

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

export const GetTicket = data => {
  return dispatch => {
    Games({
      method: "post",
      url: "/GetTicket",
      headers: {
        Token: data.Token
      },
      data: {
        Count: data.Count,
        Email: data.Email
      }
    })
      .then(response => {
        console.log(response);
        dispatch(RedirectToConfirm(true));
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
