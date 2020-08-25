import React, { Component, useState } from "react";
import { Input, Button, message, Form } from "antd";
import ZipCodeData from "../Assets/zipcode-data.json";
import "./S1ZipCode.css";
import { data } from "jquery";

class S1ZipCode extends Component {
	onFinish = (value) => {
		var check = false;
		ZipCodeData.map(
			(data) =>
				(data.zip === value.zipcode.number || data.zip === Number(value.zipcode.number)) &&
				((check = true),
				this.props.zipCodeCity(data.city),
				this.props.Driver_1_Zip(Number(value.zipcode.number)),
				this.props.Driver_1_City(data.city),
				this.props.Driver_1_State(data.state_id),
				this.props.Driver_1_Licensed_State(data.state_id),
				this.props.nextStep())
		);
		if (check === false) {
			message.error("Please Enter A Valid Zipcode!");
		}
	};

	checkZipCode = (rule, value) => {
		var check = false;
		ZipCodeData.map((data) => (data.zip === value.number || data.zip === Number(value.number)) && (check = true));

		if (check === true) {
			return Promise.resolve();
		}
		return Promise.reject("Please Enter A Valid Zipcode!");
	};

	render() {
		return (
			<div className="container p-0">
				<h1 className="text-center main-heading">Quotehound Matches You To Start Saving You Money!</h1>
				<div className="main-content-inner-container mb-5">
					<div className="right-number">1/16</div>
					<div className="text-center box-width">
						<i className="fa fa-map-marker" style={{ fontSize: "36px" }}></i>
						<br />
						<h1 className="heading">Enter Your Zip Code</h1>
						<Form name="customized_form_controls" onFinish={this.onFinish}>
							<Form.Item
								name="zipcode"
								style={{ width: "100%" }}
								rules={[
									{
										validator: this.checkZipCode,
									},
								]}
							>
								<ZipCodeInput />
							</Form.Item>
							<Form.Item style={{ width: "100%" }}>
								<Button type="primary" htmlType="submit" style={{ width: "100%" }} size={"large"}>
									<h4 style={{ display: "inline", color: "white", fontWeight: "400" }}>
										Start Saving Today!
									</h4>
									&nbsp;&nbsp;&nbsp;
									<i className="fa fa-arrow-right" style={{ fontSize: "24px" }}></i>
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default S1ZipCode;

const ZipCodeInput = ({ value = {}, onChange }) => {
	const [number] = useState();

	const triggerChange = (changedValue) => {
		if (onChange) {
			onChange({
				number,
				...value,
				...changedValue,
			});
		}
	};

	const onNumberChange = (e) => {
		const newNumber = e.target.value;
		// if (Number.isNaN(number)) {
		// 	return;
		// }
		// if (!("number" in value)) {
		// 	setNumber(newNumber);
		// }
		triggerChange({
			number: newNumber,
		});
	};

	return (
		<Input
			className="text-center"
			type="text"
			maxLength="5"
			size="large"
			placeholder="Zip Code"
			value={value.number}
			onChange={onNumberChange}
			style={{
				width: "100%",
			}}
		/>
	);
};
