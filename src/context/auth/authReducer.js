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
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				auth: true,
				message: null
			};
		case REGISTRATION_ERROR:
			return {
				...state,
				auth: false,
				message: action.payload
			};
		default:
			return state;
	}
};
