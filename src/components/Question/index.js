import "./question.css";
import "../Menu/menu.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";


class Question extends Component {
	pause = () => {
		this.props.actions.pauseGame();
	};

	onSelectChoice = (choice) => {
		return () => this.props.actions.checkSelectedAnswer(choice);
	};

	renderChoices() {
		return this.props.game.question.choices.map(choice => {
			return <div key={choice} onClick={this.onSelectChoice(choice)}>{choice}</div>
		});
	}

	render() {
		return (
			<div className={"question"}>
				<div className={"question-text"}>
					{this.props.game.question.question}
				</div>
				<div className={"question-choices"}>
					{this.renderChoices()}
				</div>
				<div onClick={this.pause} className={"menu-item"}>
					Pause
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	game: state.gameReducer
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({
		...gameActions
	}, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Question);