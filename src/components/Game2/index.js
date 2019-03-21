import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";
import Menu from "../Menu2";
import Question from "../Question2";

class Game extends Component {
	navigateGame() {
		if (this.props.game.status !== "running") {
			return (<Menu/>);
		}

		return (<Question/>)
	}

	render() {
		return (
			<div>
				<div>{JSON.stringify(this.props.game)}</div>
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