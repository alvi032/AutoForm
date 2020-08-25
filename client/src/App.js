import React, { Component } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Grid from '@material-ui/core/Grid';
import StepWizard from "react-step-wizard";
import S1ZipCode from "./components/S1ZipCode";
import S2VehicleYear from "./components/S2VehicleYear";
import S3VehicleName from "./components/S3VehicleName";
import S4VehicleModel from "./components/S4VehicleModel";
import { Input, Button, Col, Row, Form, Typography } from 'antd';
import S5PrimaryUse from "./components/S5PrimaryUse";
import S6AnnualMileage from "./components/S6AnnualMileage";
import S7CoverageLevel from "./components/S7CoverageLevel";
import S8Ownership from "./components/S8Ownership";
import S9AddAnother from "./components/S9AddAnother";
import S10CurrentAutoInsurance from "./components/S10CurrentAutoInsurance";
import S11DrivingHistory from "./components/S11DrivingHistory";
import S12DriverData from "./components/S12DriverData";
import S13Education from "./components/S13Education";
import S14DateOfBirth from "./components/S14DateOfBirth";
import S15YourName from "./components/S15YourName";
import S16YourAddress from "./components/S16YourAddress";
import S17Media from "./components/S17Media";

class App extends Component {
	state = {
		postData: {
			// extra entries
			Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
			TYPE: "22",
			IP_Address: "",
			SRC: "quotehoundgoogleautoform",
			Pub_ID: 13,
			Sub_ID: 12,
			Trusted_Form_URL: "",
			User_Agent: "",
			Landing_Page: "quotehound.com",
			TCPA_Consent: "Yes",
			TCPA_Languagee:"By hitting submit below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates  or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling 1 888-316-1350 or emailing “STOP” to  optout@quotehound.com.  I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE" ,
			Format: "JSON",
			LeadiD_Token: "",
			Vehicle_1_Average_One_Way_Mileage: 0,
			Vehicle_1_Parking: "unknown",
			Vehicle_1_Average_Days_Per_Week_Used: 0,
			Vehicle_1_Desired_Collision_Coverage: "No Coverage",
			Vehicle_1_Desired_Comprehensive_Coverage: "No Coverage",
			Driver_1_License_Status: "unknown",
			Driver_1_Age_When_First_Licensed: 0,
			Driver_1_Occupation: "Student",
			Driver_1_Current_Residence: "Other",
			Driver_1_Tickets_Accidents_Claims_Past_3_Years: "unknown",
			Driver_1_Insured_Past_30_Days: "unknown",
			Driver_1_Continuously_Insured_Years: 1,
			Driver_1_Additional_Drivers: "No",
			Driver_1_Additional_Vehicles: "No",
			Driver_1_Bankruptcy_In_Past_5_Years: "unknown",
			Driver_1_DUI_DWI_In_The_Past_5_Years: "unknown",
			Driver_1_Reposessions_In_The_Past_5_Years: "unknown",
			// S1
			Driver_1_Zip: "",
			Driver_1_City: "",
			Driver_1_State: "",
			Driver_1_Licensed_State: "",
			// S2
			Vehicle_1_Year: 0,
			// S3
			Vehicle_1_Make: "",
			// S4
			Vehicle_1_Model: "",
			// S5
			Vehicle_1_Primary_Use: "unknown",
			// S6
			Vehicle_1_Annual_Mileage: 0,
			// S7
			Vehicle_1_Coverage_Type: "",
			// S8
			Vehicle_1_Ownership: "",
			// S9

			// S10
			// Current Insurance Carrier
			// Continuous Coverage
			// S11
			// Active Licence?
			// Ticket/Claim in Last 3 years?
			Driver_1_Filing_Required: "None",
			// S12
			// Homeowner
			Driver_1_Marital_Status: "Single",
			Driver_1_Gender: "",
			// S13
			Driver_1_Education: "",
			Driver_1_Credit_Rating: "unknown",
			// S14
			Driver_1_Birthdate: "",
			// S15
			Driver_1_First_Name: "",
			Driver_1_Last_Name: "",
			// S16
			Driver_1_Address: "",
			Driver_1_Email: "",
			Driver_1_Daytime_Phone: "",
		},
		postData2: {
			email: "",
			phone: "",
			address: "",
			zip: "",
			home_ownership: 0,
			vehicles: [
				// {
				// 	year: "",
				// 	model: "",
				// 	primary_purpose: "",
				// 	annual_mileage: "",
				// 	ownership: "",
				// },
			],
			drivers: [
				{
					driver: "",
					gender: "",
					marital_status: "",
					birth_date: "",
					education: "",
					credit_rating: "",
					sr_22: "No",
				},
			],
			current_company: "",
			continuous_coverage: "",
			coverage_type: "",
		},
		year: 0,
		name: "Ford",
		zipCodeCity: "",
		username: "",
		table: [],
		home_ownership: 0,
		sr_22: "No",
		current_company: "",
		continuous_coverage: "",
	};

	componentDidMount = () => {
		// var LeadiDscript = document.getElementById('LeadiDscript_campaign');
		// console.log(LeadiDscript)
	}

	maintainTable = () => {
		this.setState({
			table: [
				...this.state.table,
				{ name: this.state.name, model: this.state.postData.Vehicle_1_Model, year: this.state.year },
			],
		});
	};

	deleteTableItem = (value) => {
		this.setState({ table: value });
	};

	vehicleForPostData2 = (ownershipValue) => {
		const tempData = this.state.postData2;
		tempData.vehicles.push({
			year: this.state.postData.Vehicle_1_Year,
			model: this.state.postData.Vehicle_1_Model,
			primary_purpose: this.state.postData.Vehicle_1_Primary_Use,
			annual_mileage: this.state.postData.Vehicle_1_Annual_Mileage,
			ownership: ownershipValue,
		});

		this.setState({ postData2: tempData });
	};

	deleteVehicleForPostData2 = (value) => {
		this.setState({ postData2: value });
	};

	copyValuesToPostData2 = () => {
		var tempArray = {
			email: this.state.postData.Driver_1_Email,
			phone: this.state.postData.Driver_1_Daytime_Phone,
			address: this.state.postData.Driver_1_Address,
			zip: this.state.postData.Driver_1_Zip,
			home_ownership: this.state.home_ownership,
			vehicles: this.state.postData2.vehicles,
			drivers: [
				{
					driver: this.state.postData.Driver_1_First_Name + " " + this.state.postData.Driver_1_Last_Name,
					gender: this.state.postData.Driver_1_Gender,
					marital_status: this.state.postData.Driver_1_Marital_Status,
					birth_date: this.state.postData.Driver_1_Birthdate,
					education: this.state.postData.Driver_1_Education,
					credit_rating: this.state.postData.Driver_1_Credit_Rating,
					sr_22: this.state.sr_22,
				},
			],
			current_company: this.state.current_company,
			continuous_coverage: this.state.continuous_coverage,
			coverage_type: this.state.postData.coverage_type,
		};
		this.setState({ postData2: tempArray });
		  window.MediaAlphaExchange = {
			"placement_id": "1WNbWprsUtu4bb-7VkTVgf2l57oZew",
			"version": "17",
			"type": "ad_unit",
			"ua_class": "auto",
			"data": tempArray
			
		};
		window.MediaAlphaExchange__load('target');
		return this.state.postData2;
	};

	zipCodeCity = (value) => {
		this.setState({ zipCodeCity: value });
	};

	username = (value) => {
		this.setState({ username: value });
	};

	yearForVehicleName = (value) => {
		this.setState({ year: value });
	};

	nameForVehicalModel = (value) => {
		this.setState({ name: value });
	};

	homeOwnershipForPostData2 = (value) => {
		this.setState({ home_ownership: value });
	};
	sr22ForPostData2 = (value) => {
		this.setState({ sr_22: value });
	};
	currentCompanyForPostData2 = (value) => {
		this.setState({ current_company: value });
	};
	continuousCoverageForPostData2 = (value) => {
		this.setState({ continuous_coverage: value });
	};

	render() {
		return (
			<div
				className="container-fluid m-0"
				style={{ minHeight: "100vh", backgroundColor: "#f7f7f7", overflow: "hidden" }}
			>
				<div>
					<img src={require("./Assets/logo.png")} className="m-4" width="200px" alt="" />
					<br />
				</div>
				<StepWizard initialStep={1}>
					<S1ZipCode
						zipCodeCity={this.zipCodeCity}
						Driver_1_Zip={(value) =>{
							console.log(document.getElementById('leadid_token').value)
							console.log(document.getElementsByTagName('script')[0].src)
							this.setState({ postData: { ...this.state.postData, Driver_1_Zip: value, LeadiD_Token: document.getElementById('leadid_token').value, Trusted_Form_URL: document.getElementsByTagName('script')[0].src } })
						}
							
						}
						Driver_1_City={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_City: value } })
						}
						Driver_1_State={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_State: value } })
						}
						Driver_1_Licensed_State={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Licensed_State: value } })
						}
					/>
					<S2VehicleYear
						yearForVehicleName={this.yearForVehicleName}
						zipCodeCity={this.state.zipCodeCity}
						Vehicle_1_Year={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Year: value } })
						}
					/>
					<S3VehicleName
						year={this.state.year}
						nameForVehicalModel={this.nameForVehicalModel}
						Vehicle_1_Make={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Make: value } })
						}
					/>
					<S4VehicleModel
						searchModel={{ year: this.state.year, make: this.state.name }}
						Vehicle_1_Model={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Model: value } })
						}
					/>
					<S5PrimaryUse
						name={this.state.name}
						Vehicle_1_Primary_Use={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Primary_Use: value } })
						}
					/>
					<S6AnnualMileage
						Vehicle_1_Annual_Mileage={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Annual_Mileage: value } })
						}
					/>
					<S7CoverageLevel
						Vehicle_1_Coverage_Type={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Coverage_Type: value } })
						}
					/>
					<S8Ownership
						name={this.state.name}
						maintainTable={this.maintainTable}
						vehicleForPostData2={this.vehicleForPostData2}
						Vehicle_1_Ownership={(value) =>
							this.setState({ postData: { ...this.state.postData, Vehicle_1_Ownership: value } })
						}
					/>
					<S9AddAnother
						table={this.state.table}
						deleteTableItem={this.deleteTableItem}
						postData2={this.state.postData2}
						deleteVehicleForPostData2={this.deleteVehicleForPostData2}
					/>
					<S10CurrentAutoInsurance
						currentCompanyForPostData2={this.currentCompanyForPostData2}
						continuousCoverageForPostData2={this.continuousCoverageForPostData2}
					/>

					<S11DrivingHistory
						sr22ForPostData2={this.sr22ForPostData2}
						Driver_1_Filing_Required={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Filing_Required: value } })
						}
					/>
					<S12DriverData
						homeOwnershipForPostData2={this.homeOwnershipForPostData2}
						Driver_1_Gender={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Gender: value } })
						}
						Driver_1_Marital_Status={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Marital_Status: value } })
						}
					/>
					<S13Education
						Driver_1_Education={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Education: value } })
						}
						Driver_1_Credit_Rating={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Credit_Rating: value } })
						}
					/>
					<S14DateOfBirth
						Driver_1_Birthdate={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Birthdate: value } })
						}
					/>
					<S15YourName
						username={this.username}
						Driver_1_First_Name={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_First_Name: value } })
						}
						Driver_1_Last_Name={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Last_Name: value } })
						}
					/>
					<S16YourAddress
						username={this.state.username}
						postData={this.state.postData}
						copyValuesToPostData2={this.copyValuesToPostData2}
						Driver_1_Address={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Address: value } })
						}
						Driver_1_Email={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Email: value } })
						}
						Driver_1_Daytime_Phone={(value) =>
							this.setState({ postData: { ...this.state.postData, Driver_1_Daytime_Phone: value } })
						}
					/>
					<S17Media postData2={this.state.postData2}/>
				</StepWizard>
				<Grid container xs={12} align='center' style={{justifyContent:'center'}}>
					<Grid container xs={8} style={{justifyContent:'center'}}>
						<Grid item xs={12}>
							<Typography style={{fontWeight:700,lineHeight:1.5}}>Providers Include:</Typography>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="60%" height="60%" object-fit="fit" src={require('./Assets/1.png')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="60%" height="60%" object-fit="fit" src={require('./Assets/2.png')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="60%" height="60%" object-fit="fit"  src={require('./Assets/3.png')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="50%" height="50%" object-fit="fit"  src={require('./Assets/4.png')}/>
						</Grid>
						<Grid item lg={2} xs={12} style={{marginTop:'1rem'}}>
							<img width="60%" height="60%" object-fit="fit"  src={require('./Assets/5.png')}/>
						</Grid>
					</Grid>
					<Grid container xs={10} style={{paddingBottom:'1rem',marginTop:'1rem'}}>
						<Grid item lg={3} xs={12} style={{alignSelf:'flex-end'}}>
							<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)'}}>@ 2020 Quotehound</Typography>
						</Grid>
						<Grid item lg={6} xs={0}/>
						<Grid container lg={3} xs={12}>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)',fontWeight:600}}><a href="https://quotehound.com/" style={{color:'rgb(166,166,166)',fontWeight:'400'}}>Privacy Policy</a></Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)'}}><a href="https://quotehound.com/privacy-policy" style={{color:'rgb(166,166,166)',fontWeight:'400'}}>Privacy Policy</a></Typography>
							</Grid>
							<Grid item lg={4} xs={12} style={{alignSelf:'center',marginTop:'1rem'}}>
								<Typography style={{fontSize:'12px',color:'rgb(166, 166, 166)',fontWeight:600}}><a href="https://quotehound.com/terms-conditions" style={{color:'rgb(166,166,166)',fontWeight:'400'}}>Privacy Policy</a></Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default App;
