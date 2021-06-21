import React, { useEffect, useContext, useRef } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {
	// Ref to avoid problems with CCSTransition
	const nodeRef = useRef(null);

	// Extract project from Context
	const projectsContext = useContext(projectContext);
	const { projects, getProjects } = projectsContext;

	// Get projects
	useEffect(() => {
		getProjects();
		// eslint-disable-next-line
	}, []);

	// Check if have projects
	if (projects.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			<TransitionGroup>
				{projects.map((project) => (
					<CSSTransition key={project._id} nodeRef={nodeRef} timeout={200} classNames="proyecto">
						<Project project={project} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
};

export default ProjectList;
