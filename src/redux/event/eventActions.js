import { ADD_EVENT } from "./eventTypes";
import { REMOVE_EVENT } from "./eventTypes";

export const addEvent = (eventPayload) => {
  return {
    type: ADD_EVENT,
    payload: eventPayload,
  };
};

export const removeEvent = (eventId) => {
  return {
    type: REMOVE_EVENT,
    payload: eventId,
  };
};
