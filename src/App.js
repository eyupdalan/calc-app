import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// import Menu from "./components/Menu";
// import Game from "./components/Game";

import Game from "./components/Game2";

class App extends Component {
	render() {
		return (
			<Provider store={configureStore()}>
				<Game/>
				{/*<Router>*/}
					{/*<div className="App">*/}
						{/*<Route path="/" exact component={Menu}/>*/}
						{/*<Route path="/game/" component={Game}/>*/}
					{/*</div>*/}
				{/*</Router>*/}
			</Provider>
		);
	}
}

export default App;
