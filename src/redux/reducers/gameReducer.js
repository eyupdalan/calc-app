import Game from "./Game";
import * as gameActions from "../actions/gameActions";

const MyGame = new Game();

export default (state = MyGame, action) => {
	switch (action.type) {
		case gameActions.START_GAME: {
			return Object.assign({}, MyGame.CreateQuestion());
		}
		case gameActions.PAUSE_GAME: {
			return Object.assign({}, MyGame.Pause());
		}
		case gameActions.UNPAUSE_GAME: {
			return Object.assign({}, MyGame.Run());
		}
		default:
			return state;
	}
};