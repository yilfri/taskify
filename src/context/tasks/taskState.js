import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import axiosClient from '../../config/axios';
import {
	TASKS_PROJECT,
	ADD_TASK,
	DELETE_TASK,
	VALIDATE_TASK,
	STATE_TASK,
	ACTUAL_TASK,
	UPDATE_TASK,
	CLEAN_TASK
} from '../../types';

const TaskState = (props) => {
	const initialState = {
		tasksproject: [],
		errortask: false,
		taskselected: null
	};

	// Reducer
	const [state, dispatch] = useReducer(TaskReducer, initialState);

	// Functions CRUD
	const getTasks = async (project) => {
		console.log(project);
		try {
			const response = await axiosClient.get('/api/tasks', { params: { project } });

			console.log(response);

			dispatch({
				type: TASKS_PROJECT,
				payload: response.data.tasks
			});
		} catch (error) {
			console.log(error);
		}
	};

	const addTask = async (task) => {
		console.log(task);
		try {
			const response = await axiosClient.post('/api/tasks', task);
			console.log(response);

			dispatch({
				type: ADD_TASK,
				payload: task
			});
		} catch (error) {
			console.log(error.response);
		}
	};

	const validateTask = () => {
		dispatch({
			type: VALIDATE_TASK
		});
	};

	const deleteTask = (id) => {
		dispatch({
			type: DELETE_TASK,
			payload: id
		});
	};

	const updateStateTask = (task) => {
		dispatch({
			type: STATE_TASK,
			payload: task
		});
	};

	const saveActualTask = (task) => {
		dispatch({
			type: ACTUAL_TASK,
			payload: task
		});
	};

	const updateTask = (task) => {
		dispatch({
			type: UPDATE_TASK,
			payload: task
		});
	};

	const cleanTask = () => {
		dispatch({
			type: CLEAN_TASK
		});
	};
	return (
		<TaskContext.Provider
			value={{
				tasksproject: state.tasksproject,
				errortask: state.errortask,
				taskselected: state.taskselected,
				getTasks,
				addTask,
				validateTask,
				deleteTask,
				updateStateTask,
				saveActualTask,
				updateTask,
				cleanTask
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskState;
