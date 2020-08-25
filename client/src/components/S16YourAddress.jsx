import React, { Component } from "react";
import axios from "axios";
import { Input, Form, Button } from "antd";
import "./S2VehicleYear.css";

class S15YourName extends Component {
	state = {
		username: "",
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ username: newProps.username });
	};
	onFinish = (values) => {
		console.log("Success:", values);
		this.props.Driver_1_Address(values.streetAddress);
		this.props.Driver_1_Email(values.email);
		this.props.Driver_1_Daytime_Phone(values.phoneNumber);
		console.log("Post Data 1 = ");
		console.log(this.props.postData);
		console.log("Post Data 2 = ");
		console.log(this.props.copyValuesToPostData2());

		axios
			.post("https://leads.quotehound.com/genericPostlead.php", null, {
				params: this.props.postData,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				if (err) throw err;
			});
		this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<div className="container pt-0 content-container main-content-container3 mb-5">
				<div className="right-number">16/16</div>
				<div
					className="container pt-0 main-content-container4 pb-5 "
					style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
					<div>
						<h1 className="text-center heading">
							<span style={{ textTransform: "capitalize" }}>{this.state.username}</span>, You Qualify for
							Major Discounts!
						</h1>
						<br />
						<Form
							name="addressForm"
							initialValues={{
								remember: true,
							}}
							onFinish={this.onFinish}
							onFinishFailed={this.onFinishFailed}
						>
							<h5>Street Address</h5>
							<Form.Item
								name="streetAddress"
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please enter street address!",
									},
								]}
							>
								<Input size="large" type="text" placeholder="Street Address" />
							</Form.Item>
							<h5>Email</h5>
							<Form.Item
								name="email"
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please enter email!",
									},
									{
										type: "email",
									},
								]}
							>
								<Input size="large" placeholder="Email" />
							</Form.Item>
							<h5>Phone Number</h5>
							<Form.Item
								name="phoneNumber"
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please enter phone number!",
									},
								]}
							>
								<Input size="large" type="number" placeholder="Phone Number" />
							</Form.Item>
							<p className="tcpa">
								By hitting submit below, I provide my express written consent to the following.
								Telemarketing calls, text messages, emails, and postal mail from this Web site, our
								marketing and re-marketing network, and up to eight insurance companies or their
								affiliates  or representatives at the phone number (including wireless number), email
								address, and postal address provided by me. Telemarketing calls, text messages, emails,
								and postal mail (including wireless number), email address, and postal address provided
								by me. Calls and text messages transmitting insurance quotes, or seeking related
								additional information from me, using an Automated Telephone Dialing System or
								prerecorded or artificial voices. Electronic video monitoring and recordation of my
								activities on this Site; and I acknowledge that I may revoke my consent at any time by
								Calling
								<a href="tel:1883161350">1 888-316-1350 </a> or emailing “STOP” to  
								<a href="mailto:optout@quotehound.com"> optout@quotehound.com</a>.  
								<b>I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE</b>
							</p>
							<Form.Item style={{ width: "100%" }}>
								<Button type="primary" htmlType="submit" style={{ width: "100%" }} size={"large"}>
									<h4 style={{ display: "inline", color: "white", fontWeight: "400" }}>Complete</h4>
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

export default S15YourName;
