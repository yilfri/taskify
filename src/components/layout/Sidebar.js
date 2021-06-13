import React from 'react';
import NewProject from '../projects/NewProject';

const Sidebar = () => {
	return (
		<aside>
			<h1>TASKIFY</h1>
			<NewProject />
			<div className="proyectos">
				<h2>Your Projects</h2>
			</div>
		</aside>
	);
};

export default Sidebar;
