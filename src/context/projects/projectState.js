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
	DELETE_PROJECT,
	ERROR_PROJECT
} from '../..//types';

const ProjectState = (props) => {
	const initialState = {
		projects: [],
		form: false,
		errorform: false,
		project: null,
		message: null
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
			const alert = {
				msg: 'Something has gone wrong',
				category: 'alerta-error'
			};
			dispatch({
				type: ERROR_PROJECT,
				payload: alert
			});
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
			const alert = {
				msg: 'Something has gone wrong',
				category: 'alerta-error'
			};
			dispatch({
				type: ERROR_PROJECT,
				payload: alert
			});
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

	const deleteProject = async (projectId) => {
		try {
			await axiosClient.delete(`/api/projects/${projectId}`);

			dispatch({
				type: DELETE_PROJECT,
				payload: projectId
			});
		} catch (error) {
			const alert = {
				msg: 'Something has gone wrong',
				category: 'alerta-error'
			};
			dispatch({
				type: ERROR_PROJECT,
				payload: alert
			});
		}
	};

	return (
		<projectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				errorform: state.errorform,
				project: state.project,
				message: state.message,
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
