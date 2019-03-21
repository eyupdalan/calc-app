const OPERATIONS = ["+", "-", "*"];

const DefaultQuestion = {
	question: "",
	choices: [],
	answer: null
};

export class Question {
	question = null;
	choices = [];
	answer = null;
	operation = null;
	firstParameter = null;
	secondParameter = null;

	constructor(question, choices, answer) {
		if (question !== null && question !== undefined) {
			this.question = question;
		}
		if (choices !== null && choices !== undefined) {
			this.choices = choices;
		}
		if (answer !== null && answer !== undefined) {
			this.answer = answer;
		}
	}

	CreateQuestion() {
		debugger;
		this._setOperation();
		this._generateNumbers();
		this._setCorrectAnswer();
		this._setQuestionString();
		this._generateFakeAnswers();
		this.choices.push(this.answer);
		this.choices = this._shuffleChoices(this.choices);
		return new Question(this.question, this.choices, this.answer);
	}

	_setOperation() {
		const index = Math.floor(Math.random() * 100000) % 3;
		this.operation = OPERATIONS[index];
	}

	_generateNumbers() {
		this.firstParameter = Math.floor(Math.random() * 9) + 1;
		this.secondParameter = Math.floor(Math.random() * 9) + 1;
		while (this.firstParameter === this.secondParameter) {
			this.secondParameter = Math.floor(Math.random() * 9) + 1;
		}

		if (this.operation === "-" && this.firstParameter < this.secondParameter) {
			let tempFirstParameter = this.firstParameter;
			this.firstParameter = this.secondParameter;
			this.secondParameter = tempFirstParameter;
		}
	}

	_setCorrectAnswer() {
		switch (this.operation) {
			case "+":
				this.answer = this.firstParameter + this.secondParameter;
				break;
			case "-":
				this.answer = this.firstParameter - this.secondParameter;
				break;
			case "*":
				this.answer = this.firstParameter * this.secondParameter;
				break;
			default:
				break;
		}
	}

	_setQuestionString() {
		this.question = `${this.firstParameter} ${this.operation} ${this.secondParameter} = ?`;
	}

	_generateFakeAnswers() {
		debugger;
		while (this.choices.length < 2) {
			const random = Math.floor(Math.random() * 100000) % 3;
			let newValue;
			switch (random) {
				case 0:
					newValue = this._generateFakeAnswerWithOverflow();
					break;
				case 1:
					newValue = this._generateFakeAnswerWithFewness();
					break;
				case 2:
					newValue = this._generateFakeAnswerWithStringConcat();
					break;
				default:
					break;
			}
			if (!this.choices.includes(newValue) && newValue !== this.answer) {
				this.choices.push(newValue)
			}
		}
	}

	_generateFakeAnswerWithOverflow() {
		const random = Math.floor(Math.random() * 100000) % 3;
		return (this.answer + random);
	}

	_generateFakeAnswerWithFewness() {
		if (this.answer === 0) {
			return this._generateFakeAnswerWithOverflow();
		}

		let randomMode = 3;
		if (this.answer <= 3) {
			randomMode = this.answer - 1;
		}
		const random = Math.floor(Math.random() * 100000) % randomMode;
		return (this.answer - random);
	}

	_generateFakeAnswerWithStringConcat() {
		const random = Math.floor(Math.random() * 100000) % 2;
		if (random) {
			return parseInt(`${this.firstParameter}${this.secondParameter}`);
		}
		return parseInt(`${this.secondParameter}${this.firstParameter}`);
	}

	_shuffleChoices(choices) {
		if (choices.length === 1) {
			return choices;
		}
		const rand = Math.floor(Math.random() * this.choices.length);
		return [choices[rand], ...this._shuffleChoices(choices.filter((_, i) => i !== rand))];
	}
}

export default class Game {
	question = DefaultQuestion;
	timer = 5;
	step = 0;
	point = 0;
	status = "initial"; //"running", "pause", "failure";

	CreateQuestion() {
		this.step += 1;
		this.question = new Question().CreateQuestion();
		return this.Run();
	}

	CheckAnswer(userChoice) {
		if (this.question.answer === userChoice) {
			this._increasePoint();
			return true;
		}
		this._decreasePoint();
		return false;
	}

	_increasePoint() {
		this.point += 10;
	}

	_decreasePoint() {
		this.point -= 10;
	}

	DecreaseTimer() {
		this.timer -= 1;
		return this;
	}

	ControlTimer() {
		if (this.timer === 0) {
			return this.ResetTime().Failure();
		}
		return this.DecreaseTimer();
	}

	ResetTime() {
		this.timer = 5;
		return this;
	}

	Pause() {
		this.status = "pause";
		return this;
	}

	Run() {
		this.status = "running";
		return this;
	}

	Failure() {
		this.status = "failure";
		return this;
	}

	Reset() {
		this.question = DefaultQuestion;
		this.timer = 5;
		this.step = 0;
		this.point = 0;
		this.status = "initial"; //"running", "pause", "failure"
		return this;
	}
}
