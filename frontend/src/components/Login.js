import React, { Component } from 'react';
import { Link,  BrowserRouter as Router } from 'react-router-dom';
import Welcome from './Welcome';
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}
	handleSubmitClick = (e) =>{
		
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<button type="submit" value="Login" />
				</form>
				<Router>
				<Link to="/register">Create an account</Link>
				<Link to="/welcome">Welcome</Link>
				</Router>
			</div>
		);
	}
}

export default Login;