import React, { Component } from "react";

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) return <p>Dogodila se greska</p>;
		return this.props.children;
	}
}

export default ErrorBoundry;
