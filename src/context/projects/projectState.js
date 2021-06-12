import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = (props) => {
	const initialState = {
		form: false
	};

	// Dispatch for run actions
	const [state, dispatch] = useReducer(projectReducer, initialState);

	// Functions CRUD

	return (
		<projectContext.Provider
			value={{
				form: state.form
			}}
		>
			{props.children}
		</projectContext.Provider>
	);
};

export default ProjectState;
