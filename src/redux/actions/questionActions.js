export const CREATE_QUESTION = "CREATE_QUESTION";
export const CHECK_ANSWER = "CHECK_ANSWER";
export const DECREASE_TIMER = "DECREASE_TIMER";
export const RESET_GAME = "RESET_GAME";

export function createQuestion() {
	return {
		type: CREATE_QUESTION
	}
}

export function checkAnswer(choice) {
	return {
		type: CHECK_ANSWER,
		payload: choice
	}
}

export function decreaseTimer() {
	return {
		type: DECREASE_TIMER
	}
}

export function resetGame() {
	return {
		type: RESET_GAME
	}
}