import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {
	//Extract auth info.
	const authContext = useContext(AuthContext);
	const { user, authenticatedUser } = authContext;

	useEffect(() => {
		authenticatedUser();
	}, []);

	return (
		<div className="app-header">
			{user ? (
				<p className="nombre-usuario">
					Hola <span>{user.name}</span>
				</p>
			) : null}

			<nav className="nav-principal">
				<a href="#!">Log Out</a>
			</nav>
		</div>
	);
};

export default Header;
