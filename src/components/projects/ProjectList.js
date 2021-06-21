import React, { useEffect, useContext, useRef } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {
	// Ref to avoid problems with CCSTransition
	const nodeRef = useRef(null);

	// Extract project from Context
	const projectsContext = useContext(projectContext);
	const { projects, message, getProjects } = projectsContext;

	// Alert Context.
	const alertContext = useContext(AlertContext);
	const { alert, showAlert } = alertContext;

	// Get projects
	useEffect(() => {
		//Sí hay un error.
		if (message) {
			showAlert(message.msg, message.category);
		}

		getProjects();
		// eslint-disable-next-line
	}, [message]);

	// Check if have projects
	if (projects.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{alert ? <div className={`alerta ${alert.category}`}>{message.msg}</div> : null}
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
