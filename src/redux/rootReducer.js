import { combineReducers } from "redux";
import monthReducer from "./month/monthReducer";

const rootReducer = combineReducers({
    month: monthReducer
})

export default rootReducer;