import React, { useState } from 'react';

const NewProject = () => {
	// Create state
	const [project, setProject] = useState({
		name: ''
	});

	// Destructuring state value.
	const { name } = project;

	// Handle Event
	const handleChange = (e) => {
		setProject({
			...project,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<button type="button" className="btn btn-block btn-primario">
				New Project
			</button>
			<form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					className="input-text"
					value={name}
					placeholder="Project Name"
					onChange={handleChange}
				/>

				<input type="submit" value="Add Project" className="btn btn-primario btn-block" />
			</form>
		</>
	);
};

export default NewProject;
