import {
	PROJECT_FORM,
	GET_PROJECT,
	ADD_PROJECT,
	VALIDATE_FORM,
	ACTUAL_PROJECT,
	DELETE_PROJECT
} from '../..//types';

export default (state, action) => {
	switch (action.type) {
		case PROJECT_FORM:
			return {
				...state,
				form: true
			};
		case GET_PROJECT:
			return {
				...state,
				projects: action.payload
			};
		case ADD_PROJECT:
			return {
				...state,
				projects: [...state.projects, action.payload],
				form: false,
				errorform: false
			};
		// Validate Form
		case VALIDATE_FORM:
			return {
				...state,
				errorform: true
			};
		case ACTUAL_PROJECT:
			return {
				...state,
				project: state.projects.filter((project) => project.id === action.payload)
			};
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter((project) => project.id !== action.payload),
				project: null
			};
		default:
			return state;
	}
};
