import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

const Projects = () => {
	return (
		<div className="contenedor-app">
			<Sidebar />
			<div className="seccion-principal">
				<Header />
				<main>
					<div className="contenedor-tareas"></div>
				</main>
			</div>
		</div>
	);
};

export default Projects;
