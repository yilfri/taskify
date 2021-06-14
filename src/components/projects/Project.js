import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {
	const projectsContext = useContext(projectContext);

	const { actualProject } = projectsContext;

	const handleSubmitActualProject = () => {
		actualProject(project.id);
	};
	return (
		<li>
			<button type="submit" className="btn btn-blank" onClick={handleSubmitActualProject}>
				{project.name}
			</button>
		</li>
	);
};

export default Project;
