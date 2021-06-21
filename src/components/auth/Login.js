import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
	// Alert Context.
	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	// Auth Context.
	const authContext = useContext(AuthContext);
	const { auth, message, loginUser } = authContext;

	// If password o user do not exist.
	useEffect(() => {
		if (auth) {
			props.history.push('/projects');
		}
		if (message) {
			showAlert(message.msg, message.category);
		}
		// eslint-disable-next-line
	}, [auth, message, props.history]);

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

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		// Validate not fields empty
		if (email.trim() === '' || password.trim() === '') {
			showAlert('All fields are required', 'alerta-error');
			return;
		}

		loginUser({ email, password });
	};
	return (
		<div className="form-usuario">
			{alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}
			<div className="contenedor-form sombra-dark">
				<h1>Sign In</h1>

				<form onSubmit={handleSubmitLogin}>
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
