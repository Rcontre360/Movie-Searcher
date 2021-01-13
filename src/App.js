import React from "react";

import "./css/main.css";

import MainSearch from "./components/search";
import {Navbar} from "./components/navbar";

class App extends React.Component{

	render(){
		return(
		<React.Fragment>
			<Navbar/>
			<MainSearch/>
		</React.Fragment>
		);
	}

};


export  default App;