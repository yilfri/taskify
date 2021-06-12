import React from 'react';
import Project from './Project';

const ProjectList = () => {
	const projects = [{ name: 'Ecommerce' }, { name: 'Intranet' }, { name: 'Marketing' }];

	return (
		<ul className="listado-proyectos">
			{projects.map((project) => (
				<Project project={project} />
			))}
		</ul>
	);
};

export default ProjectList;
