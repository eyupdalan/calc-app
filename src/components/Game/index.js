import "./game.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";
import Menu from "../Menu";
import Question from "../Question";

class Game extends Component {
	componentDidMount() {
		this.timer = setInterval(this.props.actions.controlTimer, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	navigateGame() {
		if (this.props.game.status !== "running") {
			return (<Menu/>);
		}

		return (<Question/>)
	}

	renderInfo() {
		if (this.props.game.status === "running") {
			return;
		}

		if (this.props.game.status === "failure") {
			return <div className={"failure"}>FAILED!!!</div>
		}

		if (this.props.game.status === "initial" || this.props.game.status === "pause") {
			return <div> --- CALCULATION EXERCISES --- </div>
		}
	}

	render() {
		return (
			<div className={`game ${this.props.game.status}`}>
				<div className={"game-header"}>
					<div>Point: {this.props.game.point}</div>
					<div>Step: {this.props.game.step}</div>
					<div>{this.props.game.timer}</div>
				</div>
				<div className={"game-content"}>
					<div className={"game-info"}>
						{this.renderInfo()}
					</div>
					{this.navigateGame()}
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


export default connect(mapStateToProps, mapDispatchToProps)(Game);