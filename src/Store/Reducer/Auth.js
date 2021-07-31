import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM,OPEN_LOGIN_MODAL } from "../Action/ActionTypes";

const initialState = {
  AuthorizeStatus: false,
  AuthData: null,
  redirect: false,
  fail: false,
  open_it:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        open_it: action.open_it
      };
    case AUTHORIZED:
      return {
        ...state,
        AuthorizeStatus: action.AuthorizeStatus,
        AuthData: action.AuthData
      };
    case FAIL:
      return {
        ...state,
        fail: action.fail
      };
    case REDIRECT_TO_CONFIRM:
      return {
        ...state,
        redirect: action.redirect
      };
    default:
      return state;
  }
};

export default reducer;
