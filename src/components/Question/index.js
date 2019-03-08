import "./question.css";
import React, {Component} from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Question extends Component {
	static propTypes = {
		question: PropTypes.string,
		choices: PropTypes.array,
		onClickChoice: PropTypes.func
	};

	static defaultProps = {
		question: "",
		choices: []
	};

	createOnClickFunction = (choice) => {
		return () => {
			this.props.onClickChoice(choice);
		}
	};

	renderChoices() {
		return this.props.choices.map(choice => {
			return (
				<div className={"choice"} key={choice}>
					<Button variant="outline-dark" size={"lg"} className={"choice-button"}
							onClick={this.createOnClickFunction(choice)}>
						{choice}
					</Button>
				</div>
			);
		})
	}

	render() {
		return (
			<Card className={"question-card"}>
				<div className={"question"}>
					{this.props.question}
				</div>
				<hr/>
				<div className={"choices"}>
					{this.renderChoices()}
				</div>
			</Card>
		);
	}
}