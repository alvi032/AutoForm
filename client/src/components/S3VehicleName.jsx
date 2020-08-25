import React, { Component } from "react";
import { Select } from "antd";
import axios from 'axios'

const { Option } = Select;

class S3VehicleName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: "",
		};
	}

	UNSAFE_componentWillReceiveProps = (newprops) => {

		if(newprops.year > 0){
			axios.post('/getmake', {year: newprops.year})
				.then(res => {
					this.setState({ names: res.data });
				})
				.catch(err => console.log(err))
		}
	};

	createVehicleNameBoxes = () => {
		const arr = [];
		for (var i = 0; i < 16; i++) {
			arr.push(
				<div key={i} className="col-4 p-2">
					<button
						value={this.state.names[i]}
						className="btn btn-outline-primary btn-font"
						style={{ width: "100%", height: "80px", textTransform: "capitalize" }}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.names[i]}
					</button>
				</div>
			);
		}
		return arr;
	};

	createVehicleNameSelect = () => {
		const arr = [];

		for (var i = 16; i < this.state.names.length; i++) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						className="select-bg"
						style={{ border: "none", width: "100%", height: "100%" }}
						value={this.state.names[i]}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Make(e.target.value);
		this.props.nameForVehicalModel(e.target.value);
	};
	render() {
		return (
			<div className="container pt-0 content-container main-content-container3 mb-5">
				<div className="right-number">3/16</div>
				<p
					className="pt-4 pl-1"
					onClick={this.props.previousStep}
					style={{ float: "left", fontWeight: "bold", cursor: "pointer" }}
				>
					<i className="fa fa-arrow-left" style={{ fontSize: "20px" }}></i> &nbsp; BACK
				</p>
				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div className="text-center vehicle-model-padding">
						<h1 className="heading">Vehicle Make</h1>
						<div className="row">{this.state.names.length !== 0 && this.createVehicleNameBoxes()}</div>
						<br />
						{this.state.names.length !== 0 && (
							<Select
								// style={{ width: "400px" }}
								size="large"
								placeholder="Other Makes"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toUpperCase()) >= 0
								}
							>
								{this.createVehicleNameSelect()}
							</Select>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default S3VehicleName;
