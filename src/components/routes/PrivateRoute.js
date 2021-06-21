import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
	const authContext = useContext(AuthContext);
	const { auth, loading, authenticatedUser } = authContext;

	useEffect(() => {
		authenticatedUser();
		// eslint-disable-next-line
	}, []);

	return (
		<Route
			{...props}
			render={(props) => (!auth && !loading ? <Redirect to="/" /> : <Component {...props} />)}
		/>
	);
};

export default PrivateRoute;
