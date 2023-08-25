import { combineReducers } from "redux";
import monthReducer from "./month/monthReducer";
import eventReducer from "./event/eventReducer";

const rootReducer = combineReducers({
    month: monthReducer,
    event: eventReducer,
})

export default rootReducer;