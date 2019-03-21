import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";


class Question extends Component {
	pause = () => {
		this.props.actions.pauseGame();
	};

	render() {
		return (
			<div>
				<div>Question {JSON.stringify(this.props.game)}</div>
				<div onClick={this.pause}>
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