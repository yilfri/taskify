import React from 'react';

const Project = ({ project }) => {
	return (
		<li>
			<button type="submit" className="btn btn-blank">
				{project.name}
			</button>
		</li>
	);
};

export default Project;
