import {
	REGISTRATION_SUCCESFUL,
	REGISTRATION_ERROR,
	GET_USER,
	LOGIN_SUCCESFUL,
	LOGIN_ERROR,
	LOG_OUT
} from '../../types';

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case REGISTRATION_SUCCESFUL:
		case LOGIN_SUCCESFUL:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				auth: true,
				message: null,
				loading: false
			};
		case GET_USER:
			return {
				...state,
				auth: true,
				user: action.payload,
				loading: false
			};
		case LOG_OUT:
		case LOGIN_ERROR:
		case REGISTRATION_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				auth: null,
				message: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
