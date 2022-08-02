import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (e) => {
		this.setState({ searchfield: e.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});

		return (
			<div>
				<header
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<h1>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange} />
				</header>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
