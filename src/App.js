import React, {Component} from 'react';
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";

import './App.css';

import Game from "./components/Game";

class App extends Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<Game/>
			</Provider>
		);
	}
}

export default App;
