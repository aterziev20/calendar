import { ADD_EVENT } from "./eventTypes";
import { REMOVE_EVENT } from "./eventTypes";

import eventData from "../../eventData.json";

const initialState = {
  events: eventData,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case REMOVE_EVENT:
      const updatedEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      return {
        ...state,
        events: updatedEvents,
      };
    default:
      return state;
  }
};

export default eventReducer;
