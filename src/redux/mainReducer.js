import {combineReducers} from "redux";
import questionsReducer from "./reducers/questionsReducer";
import gameReducer from "./reducers/gameReducer";

export default combineReducers({
	questionsReducer,
	gameReducer
});
