import { BOOK_PURCHASE } from "../Action/ActionTypes";

const initialState = {
  booked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_PURCHASE:
      return {
        ...state,
        booked: action.booked
      };
    default:
      return state;
  }
};

export default reducer;
