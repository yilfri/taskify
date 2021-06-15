import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';
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
		tasks: [
			{ id: 1, name: 'Pick Platform', state: false, projectId: 1 },
			{ id: 2, name: 'Pick colors', state: true, projectId: 2 },
			{ id: 3, name: 'Pick pay services', state: false, projectId: 3 },
			{ id: 4, name: 'Pick Platform', state: false, projectId: 4 },
			{ id: 5, name: 'Pick colors', state: true, projectId: 2 },
			{ id: 6, name: 'Pick pay services', state: false, projectId: 1 },
			{ id: 7, name: 'Pick Platform', state: false, projectId: 1 },
			{ id: 8, name: 'Pick colors', state: true, projectId: 3 },
			{ id: 9, name: 'Pick pay services', state: false, projectId: 3 },
			{ id: 10, name: 'Pick Hosting', state: true, projectId: 4 },
			{ id: 11, name: 'Pick Platform', state: false, projectId: 1 },
			{ id: 12, name: 'Pick colors', state: true, projectId: 3 },
			{ id: 13, name: 'Pick pay services', state: false, projectId: 3 },
			{ id: 14, name: 'Pick Hosting', state: true, projectId: 4 }
		],
		tasksproject: null,
		errortask: false,
		taskselected: null
	};

	// Reducer
	const [state, dispatch] = useReducer(TaskReducer, initialState);

	// Functions CRUD
	const getTasks = (projectId) => {
		dispatch({
			type: TASKS_PROJECT,
			payload: projectId
		});
	};

	const addTask = (task) => {
		task.id = uuidv4();
		dispatch({
			type: ADD_TASK,
			payload: task
		});
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
				tasks: state.tasks,
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
