import React, { useEffect, useContext, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
	const authContext = useContext(authContext);
	const { authenticatedUser } = authContext;

	return (
		<Route
			{...props}
			render={(props) => (!authenticatedUser ? <Redirect to="/" /> : <Component {...props} />)}
		/>
	);
};

export default PrivateRoute;
