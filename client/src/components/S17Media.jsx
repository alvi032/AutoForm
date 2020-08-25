import React, { Component } from "react";



class S17Media extends Component {

	state = {
		username: "",
	};
 
	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};

	render() {
		return (
			
			<div className="container pt-0 main-content-container">
				<h1 className="center"> You Have Beeen Matched With These Companies With Special Savings!</h1>
                <div id="target"></div>
            </div>
		);
	}
}

export default S17Media;
