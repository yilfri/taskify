import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM, GET_PROJECT, ADD_PROJECT } from '../..//types';
import { v4 as uuidv4 } from 'uuid';

const ProjectState = (props) => {
	const projects = [
		{ id: 1, name: 'Ecommerce' },
		{ id: 2, name: 'Intranet' },
		{ id: 3, name: 'Marketing' },
		{ id: 4, name: 'Development' }
	];
	const initialState = {
		projects: [],
		form: false
	};

	// Dispatch for run actions
	const [state, dispatch] = useReducer(projectReducer, initialState);

	// Functions CRUD
	const showForm = () => {
		dispatch({
			type: PROJECT_FORM
		});
	};

	const getProjects = () => {
		dispatch({
			type: GET_PROJECT,
			payload: projects
		});
	};

	const addProject = (project) => {
		project.id = uuidv4();

		dispatch({
			type: ADD_PROJECT,
			payload: project
		});
	};

	return (
		<projectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				showForm,
				getProjects,
				addProject
			}}
		>
			{props.children}
		</projectContext.Provider>
	);
};

export default ProjectState;
