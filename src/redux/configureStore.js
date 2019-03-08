import {createStore} from "redux";
import mainReducer from "./mainReducer";

export default function configureStore() {
	return createStore(mainReducer);
}
