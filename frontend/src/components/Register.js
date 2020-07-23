import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Register extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			Name: '',
			DOB:'',
			email: '',
			Username:'',
			Passport_No: '',
			Display_Img:'',
			profile: []
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}
	
	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState = {
			Name: '',
			DOB:'',
			email: '',
			Username:'',
			Passport_No: '',
			Display_Img:''
		};
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>

					<div className="name">
						<input
							type="text"
							placeholder="Full Name"
							name="Name"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>
					<div className="DOB">
						<input
							type="date"
							placeholder="DOB"
							name="DOB"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>

					<div className="email">
						<input
							type="email"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={this.update}
						/>
					</div>
					<div className="Phone_no">
						<input
							type="text"
							placeholder="Phone No"
							name="Username"
							value={this.state.fullname}
							onChange={this.update}
						/>
					</div>
					<div className="Passport No">
						<input
							type="text"
							placeholder="Passport NO"
							name="Passport_No"
							value={this.state.password}
							onChange={this.update}
						/>
					</div>


					<input type="submit" value="Login" />
				</form>
			
				<Router>
				<Link to="/">Login Here</Link>
				</Router>
			</div>
		);
	}
}

export default Register;