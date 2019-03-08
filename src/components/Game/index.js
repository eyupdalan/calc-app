import "./game.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as questionActions from "../../redux/actions/questionActions";
import Question from "../question";
import Timer from "../timer";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Game extends Component {
	componentWillMount() {
		this.props.actions.createQuestion();
	}

	timerEndHandler=()=>{
		this.props.actions.checkAnswer(-1);
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
				<Timer time={this.props.question.time} decreaseTimer={this.props.actions.decreaseTimer} timerEndHandler={this.timerEndHandler}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(Game);