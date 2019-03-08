import "./timer.css";
import React, {Component} from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default class Timer extends Component {
	static propTypes={
		time: PropTypes.number,
		decreaseTimer:PropTypes.func,
		timerEndHandler:PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.timer = setInterval(this.props.decreaseTimer, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div className={"game-timer"}>
				<Button variant="danger" className={"timer-button"}>
					<Badge variant="light">{this.props.time}</Badge>
				</Button>
			</div>
		);
	}
}