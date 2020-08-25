import React, { Component } from "react";

class S7CoverageLevel extends Component {
	state = {};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Coverage_Type(e.target.lastChild.data);
	};

	render() {
		return (
			<div className="container p-0 main-content-container4 mb-5">
				<div className="right-number">7/16</div>
				<p
					className="pt-4 pl-3"
					onClick={this.props.previousStep}
					style={{ float: "left", fontWeight: "bold", cursor: "pointer" }}
				>
					<i className="fa fa-arrow-left" style={{ fontSize: "20px" }}></i> &nbsp; BACK
				</p>
				<br />
				<div
					className="container pt-0 main-content-container4 pb-5"
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center">
						<h1 className="heading">Desired Coverage Level</h1>
						<div className="row">
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Superior
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Standard
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Basic
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									State minimum
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default S7CoverageLevel;
