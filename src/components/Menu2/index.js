import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as gameActions from "../../redux/actions/gameActions";


class Menu extends Component {
	start = () => {
		this.props.actions.startGame();
	};

	continue = () => {
		this.props.actions.unpauseGame();
	};

	renderMenu() {
		if (this.props.game.status === "initial" || this.props.game.status === "failure") {
			return (
				<div onClick={this.start}>
					Start
				</div>
			);
		}

		if (this.props.game.status === "pause") {
			return (<div>
					<div onClick={this.continue}>
						Continue
					</div>
					<div onClick={this.start}>
						Restart
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<div>Menu {JSON.stringify(this.props.game)}</div>
				<div>
					{this.renderMenu()}
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


export default connect(mapStateToProps, mapDispatchToProps)(Menu);