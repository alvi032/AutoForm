import React, { Component } from "react";
import "./S2VehicleYear.css";

class S5PrimaryUse extends Component {
	state = {};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Primary_Use(e.target.lastChild.data);
	};
	render() {
		return (
			<div className="container pt-0 main-content-container2 mb-5">
				<div className="right-number">5/16</div>
				<p
					className="pt-4 pl-1"
					onClick={this.props.previousStep}
					style={{ float: "left", fontWeight: "bold", cursor: "pointer" }}
				>
					<i className="fa fa-arrow-left" style={{ fontSize: "20px" }}></i> &nbsp; BACK
				</p>
				<div className="text-center box-width " style={{width:'max-content'}}>
					<h1 className="heading">
						Primary Use of your <span style={{ textTransform: "capitalize" }}>{this.props.name}</span>
					</h1>
					<div className="row">
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								onClick={(e) => this.moveNext(e)}
							>
								Commute
							</button>
						</div>
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								onClick={(e) => this.moveNext(e)}
							>
								Pleasure
							</button>
						</div>
						<div className="text-center col-md-4 p-2">
							<button
								className="btn btn-outline-primary"
								style={{ width: "150px", height: "70px" }}
								onClick={(e) => this.moveNext(e)}
							>
								Business
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default S5PrimaryUse;
