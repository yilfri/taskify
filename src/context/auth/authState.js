import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

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
			console.log(response.data);

			dispatch({
				type: REGISTRATION_SUCCESFUL,
				payload: response.data
			});

			//Getting user.
			authenticatedUser();
		} catch (error) {
			const alert = {
				msg: error.response.data.msg,
				category: 'alerta-error'
			};
			dispatch({
				type: REGISTRATION_ERROR,
				payload: alert
			});
		}
	};

	const authenticatedUser = async () => {
		const token = localStorage.getItem('token');
		if (token) {
			tokenAuth(token);
		}
		try {
			const response = await axiosClient.get('/api/auth');
			dispatch({
				type: GET_USER,
				payload: response.data.user
			});
		} catch (error) {
			console.log(error.response);
			dispatch({
				type: LOGIN_ERROR
			});
		}
	};

	const loginUser = async (data) => {
		try {
			const response = await axiosClient.post('/api/auth', data);

			dispatch({
				type: LOGIN_SUCCESFUL,
				payload: response.data
			});

			//Getting user.
			authenticatedUser();
		} catch (error) {
			const alert = {
				msg: error.response.data.msg,
				category: 'alerta-error'
			};
			dispatch({
				type: LOGIN_ERROR,
				payload: alert
			});
		}
	};

	// Log Out.
	const logout = () => {
		dispatch({
			type: LOG_OUT
		});
	};
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				auth: state.auth,
				user: state.user,
				message: state.message,
				registerUser,
				loginUser,
				authenticatedUser,
				logout
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
