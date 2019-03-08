import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";


class Menu extends Component {
	onClickStart = () => {
		this.props.history.push("/game");
	};

	render() {
		return (
			<Card>
				<Button variant="success" onClick={this.onClickStart}>
					Start
				</Button>
			</Card>
		);
	}
}

export default withRouter(Menu);