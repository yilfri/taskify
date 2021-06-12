import React from 'react';
import Task from './Task';

const TasksList = () => {
	const tasksProject = [
		{ name: 'Pick Platform', state: false },
		{ name: 'Pick colors', state: true },
		{ name: 'Pick pay services', state: false },
		{ name: 'Pick Hosting', state: true }
	];
	return (
		<>
			<h2>Project: E-Commerce</h2>

			<ul className="listado-tareas">
				{tasksProject.length === 0 ? (
					<li className="tarea">
						<p>You don't have Tasks</p>
					</li>
				) : (
					tasksProject.map((task) => <Task task={task} />)
				)}
			</ul>
			<button type="button" className="btn btn-eliminar">
				Delete Project
			</button>
		</>
	);
};

export default TasksList;
