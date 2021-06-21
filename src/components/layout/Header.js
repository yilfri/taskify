import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
	//Extract auth info.
	const authContext = useContext(AuthContext);
	const { user, authenticatedUser, logout } = authContext;

	useEffect(() => {
		authenticatedUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="app-header">
			{user ? (
				<p className="nombre-usuario">
					Hola <span>{user.name}</span>
				</p>
			) : null}

			<nav className="nav-principal">
				<button className="btn btn-blank cerrar-sesion" onClick={() => logout()}>
					Log Out
				</button>
			</nav>
		</div>
	);
};

export default Header;
