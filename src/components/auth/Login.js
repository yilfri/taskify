import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	// State
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	// Destructuring State.
	const { email, password } = user;

	// Handle Event
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};
	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Sign In</h1>

				<form>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" value={email} id="email" onChange={handleChange} />
					</div>

					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							id="password"
							onChange={handleChange}
						/>
					</div>

					<div className="campo-form">
						<input type="submit" className="btn btn-primario btn-block" value="Login" />
					</div>
				</form>

				<Link to={'/new-account'} className="enlace-cuenta">
					Create Account
				</Link>
			</div>
		</div>
	);
};

export default Login;
