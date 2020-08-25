import React, { Component } from "react";

class S8Ownership extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Ownership(e.target.lastChild.data);
		this.props.maintainTable();
		this.props.vehicleForPostData2(e.target.lastChild.data);
	};

	render() {
		return (
			<div className="container p-0 main-content-container4 mb-5">
				<div className="right-number">8/16</div>
				<p
					className="pt-4 pl-3"
					onClick={this.props.previousStep}
					style={{ float: "left", fontWeight: "bold", cursor: "pointer" }}
				>
					<i className="fa fa-arrow-left" style={{ fontSize: "20px" }}></i> &nbsp; BACK
				</p>
				<br />
				<div
					className="container pt-0 main-content-container4"
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center">
						<h1 className="heading">
							Ownership Of Your <span style={{ textTransform: "capitalize" }}>{this.props.name}</span>?
						</h1>
						<div className="row">
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Leased
								</button>
							</div>
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Financed
								</button>
							</div>
							<div className="text-center  p-2 col-md-4">
								<button
									className="btn btn-outline-primary"
									style={{ width: "150px", height: "70px" }}
									onClick={this.moveNext}
								>
									Owned
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default S8Ownership;
