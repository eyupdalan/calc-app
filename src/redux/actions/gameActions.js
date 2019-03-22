export const START_GAME = "START_GAME";
export const PAUSE_GAME = "PAUSE_GAME";
export const UNPAUSE_GAME = "UNPAUSE_GAME";
export const CHECK_SELECTED_CHOICE="CHECK_SELECTED_CHOICE";
export const CONTROL_TIMER="CONTROL_TIMER";

export function startGame() {
	return {
		type: START_GAME
	}
}

export function pauseGame() {
	return {
		type: PAUSE_GAME
	}
}

export function unpauseGame() {
	return {
		type: UNPAUSE_GAME
	}
}

export function checkSelectedAnswer(choice) {
	return{
		type: CHECK_SELECTED_CHOICE,
		choice
	}
}
export function controlTimer() {
	return{
		type: CONTROL_TIMER
	}
}