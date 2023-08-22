import { ADD_MONTH } from "./monthTypes";
import { REMOVE_MONTH } from "./monthTypes";
import { TODAYS_MONTH } from "./monthTypes";

export const addMonth = () => {
  return {
    type: ADD_MONTH,
  };
};

export const removeMonth = () => {
  return {
    type: REMOVE_MONTH,
  };
};

export const todaysMonth = () => {
  return {
    type: TODAYS_MONTH,
  };
};
