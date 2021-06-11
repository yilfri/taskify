import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
	// State
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirm: ''
	});

	// Destructuring State.
	const { name, email, password, confirm } = user;

	// Handle Events
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
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							value={name}
							id="name"
							placeholder="Your name"
							onChange={handleChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={email}
							id="email"
							placeholder="Your email"
							onChange={handleChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							id="password"
							placeholder="Min 6 characters"
							onChange={handleChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="confirm">Confirm Password</label>
						<input
							type="password"
							name="confirm"
							value={confirm}
							id="confirm"
							placeholder="Repeat your password"
							onChange={handleChange}
						/>
					</div>

					<div className="campo-form">
						<input type="submit" className="btn btn-primario btn-block" value="Register" />
					</div>
				</form>

				<Link to={'/'} className="enlace-cuenta">
					Back to Login
				</Link>
			</div>
		</div>
	);
};

export default NewAccount;
