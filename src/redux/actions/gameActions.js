export const START_GAME = "START_GAME";
export const PAUSE_GAME = "PAUSE_GAME";
export const UNPAUSE_GAME = "UNPAUSE_GAME";

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