import React from 'react';

const Header = () => {
	return (
		<div className="app-header">
			<p className="nombre-usuario">
				Hola <span>José Lugo</span>
			</p>

			<nav className="nav-principal">
				<a href="#!">Log Out</a>
			</nav>
		</div>
	);
};

export default Header;
