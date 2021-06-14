import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
	PROJECT_FORM,
	GET_PROJECT,
	ADD_PROJECT,
	VALIDATE_FORM,
	ACTUAL_PROJECT
} from '../..//types';
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
		form: false,
		errorform: false,
		project: null
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

	const showError = () => {
		dispatch({
			type: VALIDATE_FORM
		});
	};

	const actualProject = (projectId) => {
		dispatch({
			type: ACTUAL_PROJECT,
			payload: projectId
		});
	};

	return (
		<projectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				errorform: state.errorform,
				project: state.project,
				showForm,
				getProjects,
				addProject,
				showError,
				actualProject
			}}
		>
			{props.children}
		</projectContext.Provider>
	);
};

export default ProjectState;
