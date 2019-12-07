import { FAIL, REDIRECT_TO_CONFIRM, BOOK_PURCHASE } from "./ActionTypes";
import Customer from "../../Axios/Customer";
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
        Token: value.Token
      },
      data: {
        PaymentAmount: value.PaymentAmount
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
          alertMessenger("Please try again later. There is a problem right now.")
        );
      });
  };
};
