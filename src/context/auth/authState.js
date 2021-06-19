import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';

import {
	REGISTRATION_SUCCESFUL,
	REGISTRATION_ERROR,
	GET_USER,
	LOGIN_SUCCESFUL,
	LOGIN_ERROR,
	LOG_OUT
} from '../../types';

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		auth: null,
		user: null,
		message: null
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Functions.

	// Register user.
	const registerUser = async (data) => {
		try {
			const response = await axiosClient.post('/api/users', data);
			console.log(response);

			dispatch({
				REGISTRATION_SUCCESFUL
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: REGISTRATION_ERROR
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				auth: state.auth,
				user: state.user,
				message: state.message,
				registerUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
