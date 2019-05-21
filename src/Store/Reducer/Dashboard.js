import { WALLET_INFORMATION } from "../Action/ActionTypes";

const initialState = {
  wallet: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_INFORMATION:
      return {
        ...state,
        wallet: action.wallet
      };
    default:
      return state;
  }
};

export default reducer;
