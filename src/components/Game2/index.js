import "./game.css";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";
import Menu from "../Menu2";
import Question from "../Question2";

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

	render() {
		return (
			<div className={this.props.game.status}>
				<div>Game status: {this.props.game.status}</div>
				<hr/>
				<div>
					<span>Point: {this.props.game.point}</span>
					<span>  |  </span>
					<span>Step: {this.props.game.step}</span>
				</div>
				<hr/>
				<div>
					{this.props.game.timer}
				</div>
				<hr/>
				<div>
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