import { AUTHORIZED, FAIL, REDIRECT_TO_CONFIRM } from "../Action/ActionTypes";

const initialState = {
  AuthorizeStatus: false,
  AuthData: null,
  redirect: false,
  fail: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
