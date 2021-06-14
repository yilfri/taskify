import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { TASKS_PROJECT } from '../../types';

const TaskState = (props) => {
	const initialState = {
		tasks: [
			{ name: 'Pick Platform', state: false, projectId: 1 },
			{ name: 'Pick colors', state: true, projectId: 2 },
			{ name: 'Pick pay services', state: false, projectId: 3 },
			{ name: 'Pick Platform', state: false, projectId: 4 },
			{ name: 'Pick colors', state: true, projectId: 2 },
			{ name: 'Pick pay services', state: false, projectId: 1 },
			{ name: 'Pick Platform', state: false, projectId: 1 },
			{ name: 'Pick colors', state: true, projectId: 3 },
			{ name: 'Pick pay services', state: false, projectId: 3 },
			{ name: 'Pick Hosting', state: true, projectId: 4 }
		],
		tasksproject: null
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

	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks,
				tasksproject: state.tasksproject,
				getTasks
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskState;
