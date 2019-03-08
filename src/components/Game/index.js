import "./game.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import * as questionActions from "../../redux/actions/questionActions";
import Question from "../question";
import Timer from "../timer";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Game extends Component {
	componentWillMount() {
		this.props.actions.createQuestion();
	}

	componentWillUnmount() {
		this.props.actions.resetGame();
	}

	timerEndHandler = () => {
		if (this.props.question.time===0) {
			this.props.history.push("/");
			return;
		}

		this.props.actions.decreaseTimer();
	};

	render() {
		return (
			<div className={"game"}>
				<div className={"game-stat"}>
					<Button variant="primary" className={"game-stat-button"}>
						Point <Badge variant="light">{this.props.question.point}</Badge>
					</Button>
					<Button variant="primary" className={"game-stat-button"}>
						Step <Badge variant="light">{this.props.question.step}</Badge>
					</Button>
				</div>
				<Timer time={this.props.question.time} decreaseTimer={this.timerEndHandler}/>
				<Question question={this.props.question.question}
						  choices={this.props.question.choices} onClickChoice={this.props.actions.checkAnswer}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	question: state.questionsReducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		...questionActions
	}, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Game));