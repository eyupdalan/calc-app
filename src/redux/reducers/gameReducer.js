import Game from "./Game";
import * as gameActions from "../actions/gameActions";

const MyGame = new Game();

export default (state = MyGame, action) => {
	switch (action.type) {
		case gameActions.START_GAME: {
			return Object.assign({}, MyGame.Start());
		}
		case gameActions.PAUSE_GAME: {
			return Object.assign({}, MyGame.Pause());
		}
		case gameActions.UNPAUSE_GAME: {
			return Object.assign({}, MyGame.Run());
		}
		case gameActions.CHECK_SELECTED_CHOICE: {
			return Object.assign({}, MyGame.CheckAnswer(action.choice));
		}
		case gameActions.CONTROL_TIMER:{
			return Object.assign({}, MyGame.ControlTimer());
		}
		default:
			return state;
	}
};