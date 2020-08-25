import React, { Component } from "react";

class S6AnnualMileage extends Component {
	state = {};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Annual_Mileage(e.target.lastChild.data);
	};

	render() {
		return (
			<div className="container p-0 main-content-container3 mb-5">
				<div className="right-number">6/16</div>
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
						<h1 className="heading">Annual Mileage</h1>
						<div className="row">
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									Under 5,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									5,001 - 10,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									10,001 - 15,000
								</button>
							</div>
							<div className="text-center p-2 col-md-3">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={(e) => this.moveNext(e)}
								>
									15,000+
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default S6AnnualMileage;
