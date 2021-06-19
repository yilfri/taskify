import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';

const NewAccount = () => {
	// Context.
	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	// State
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirm: ''
	});

	// Destructuring State.
	const { name, email, password, confirm } = user;

	// Handle Event
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate form not empty
		if (
			name.trim() === '' ||
			email.trim() === '' ||
			password.trim() === '' ||
			confirm.trim() === ''
		) {
			showAlert('All fields are required', 'alerta-error');
			return;
		}
	};
	return (
		<div className="form-usuario">
			{alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
			<div className="contenedor-form sombra-dark">
				<h1>Sign In</h1>

				<form onSubmit={handleSubmit}>
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
