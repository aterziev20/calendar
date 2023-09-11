import { ADD_EVENT, REMOVE_EVENT } from "./eventTypes";

const initialState = {
  events: loadEventsFromLocalStorage(),
};

function saveEventsToLocalStorage(events) {
  localStorage.setItem("events", JSON.stringify(events));
}

function loadEventsFromLocalStorage() {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : [];
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const newEvents = [...state.events, action.payload];
      saveEventsToLocalStorage(newEvents);
      return {
        ...state,
        events: newEvents,
      };
    case REMOVE_EVENT:
      const updatedEvents = state.events.filter(
        (event) => event.id !== action.payload
      );
      saveEventsToLocalStorage(updatedEvents);
      return {
        ...state,
        events: updatedEvents,
      };
    default:
      return state;
  }
};

export default eventReducer;
