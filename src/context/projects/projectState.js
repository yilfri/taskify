import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import axiosClient from '../../config/axios';

import {
	PROJECT_FORM,
	GET_PROJECT,
	ADD_PROJECT,
	VALIDATE_FORM,
	ACTUAL_PROJECT,
	DELETE_PROJECT
} from '../..//types';

const ProjectState = (props) => {
	const initialState = {
		projects: [],
		form: false,
		errorform: false,
		project: null
	};

	// Reducer
	const [state, dispatch] = useReducer(projectReducer, initialState);

	// Functions CRUD
	const showForm = () => {
		dispatch({
			type: PROJECT_FORM
		});
	};

	const getProjects = async () => {
		try {
			const response = await axiosClient.get('/api/projects');

			// Getting Projects.
			dispatch({
				type: GET_PROJECT,
				payload: response.data.projects
			});
		} catch (error) {
			console.log(error);
		}
	};

	const addProject = async (project) => {
		try {
			const response = await axiosClient.post('/api/projects', project);
			// Creating projects.
			dispatch({
				type: ADD_PROJECT,
				payload: response.data
			});
		} catch (error) {
			console.log(error.response);
		}
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

	const deleteProject = (projectId) => {
		dispatch({
			type: DELETE_PROJECT,
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
				actualProject,
				deleteProject
			}}
		>
			{props.children}
		</projectContext.Provider>
	);
};

export default ProjectState;
