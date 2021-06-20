import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';
import AuthContext from '../../context/auth/authContext';

const Projects = () => {
	//Extract auth info.
	const authContext = useContext(AuthContext);
	const { authenticatedUser } = authContext;

	useEffect(() => {
		authenticatedUser();
	}, []);

	return (
		<div className="contenedor-app">
			<Sidebar />
			<div className="seccion-principal">
				<Header />
				<main>
					<TaskForm />
					<div className="contenedor-tareas">
						<TasksList />
					</div>
				</main>
			</div>
		</div>
	);
};

export default Projects;
