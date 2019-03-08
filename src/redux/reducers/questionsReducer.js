import {CREATE_QUESTION, CHECK_ANSWER, DECREASE_TIMER} from "../actions/questionActions";

const gameState = {
	time: 5,
	step: 1,
	question: "",
	choices: [],
	correctAnswer: "",
	point: 0
};

const operations = ["+", "-", "*"];

export default (state = gameState, action) => {
	switch (action.type) {
		case CREATE_QUESTION: {
			const question = createQuestion();
			const newState = Object.assign({}, state);
			newState.question = question.question;
			newState.choices = question.choices;
			newState.correctAnswer = question.correctAnswer;
			newState.time = 5;
			return newState;
		}
		case CHECK_ANSWER: {
			state = checkAnswer(state, action.payload);
			return Object.assign({}, state);
		}
		case DECREASE_TIMER: {
			let newState = Object.assign({}, state);
			if(newState.time===0){
				newState = checkAnswer(newState, -1);
			}
			else {
				newState.time--;
			}
			return newState;
		}
		default:
			return state;
	}
}

function createQuestion() {
	const selectedOperationIndex = Math.floor(Math.random() * 3);
	const selectedOperation = operations[selectedOperationIndex];

	let firstParameter = Math.floor(Math.random() * 9) + 1;
	let secondParameter = Math.floor(Math.random() * 9) + 1;
	while (firstParameter === secondParameter) {
		secondParameter = Math.floor(Math.random() * 9) + 1;
	}

	let answer = 0;
	if (selectedOperation === "+") {
		answer = firstParameter + secondParameter;
	} else if (selectedOperation === "-") {
		if (firstParameter < secondParameter) {
			let tempFirstParameter = firstParameter;
			firstParameter = secondParameter;
			secondParameter = tempFirstParameter;
		}

		answer = firstParameter - secondParameter;
	} else if (selectedOperation === "*") {
		answer = firstParameter * secondParameter;
	}

	const questionString = firstParameter.toString() + selectedOperation + secondParameter.toString();
	const choices = getShuffledArray([firstParameter.toString() + secondParameter.toString(), secondParameter.toString() + firstParameter.toString(), answer]);

	return {
		question: questionString,
		correctAnswer: answer,
		choices: choices
	}
}

function checkAnswer(state, choice) {
	state.step++;
	if (state.correctAnswer === choice) {
		state.point += 10;
	} else {
		state.point -= 10;
	}

	const question = createQuestion();
	state.question = question.question;
	state.choices = question.choices;
	state.correctAnswer = question.correctAnswer;
	state.time = 5;
	return state;
}

const getShuffledArray = arr => {
	if (arr.length === 1) {
		return arr
	}
	const rand = Math.floor(Math.random() * arr.length);
	return [arr[rand], ...getShuffledArray(arr.filter((_, i) => i !== rand))];
};
