import { ADD_MONTH, REMOVE_MONTH, TODAYS_MONTH } from "./monthTypes";

const initialState = {
  numberOfMonth: new Date().getMonth() + 1,
  numberOfYear: new Date().getFullYear(),
};

const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH:
      if (state.numberOfMonth === 12) {
        return {
          ...state,
          numberOfMonth: 1,
          numberOfYear: state.numberOfMonth === 12 ? state.numberOfYear + 1 : state.numberOfYear,
        };
      } else {
        return {
          ...state,
          numberOfMonth: state.numberOfMonth + 1,
        };
      }
    case REMOVE_MONTH:
      if (state.numberOfMonth === 1) {
        return {
          ...state,
          numberOfMonth: 12,
          numberOfYear: state.numberOfMonth === 1 ? state.numberOfYear - 1 : state.numberOfYear,
        };
      } else {
        return {
          ...state,
          numberOfMonth: state.numberOfMonth - 1,
        };
      }
    case TODAYS_MONTH:
      return {
        ...state,
        numberOfMonth: new Date().getMonth() + 1,
        numberOfYear: new Date().getFullYear(),
      };
    default:
      return state;
  }
};

export default monthReducer;
