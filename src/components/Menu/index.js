import "./menu.css";
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
				<div onClick={this.start} className={"menu-item"}>
					Start
				</div>
			);
		}

		if (this.props.game.status === "pause") {
			return [
				<div onClick={this.continue} className={"menu-item"}>
					Continue
				</div>,
				<div onClick={this.start} className={"menu-item"}>
					Restart
				</div>
			];
		}
	}

	render() {
		return (
			<div className={"menu"}>
				{this.renderMenu()}
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