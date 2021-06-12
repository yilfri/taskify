import React from 'react';

const TaskForm = () => {
	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input type="text" name="name" className="input-text" placeholder="Task Name..." />
				</div>

				<div className="contenedor-input">
					<input type="submit" value="Add Task" className="btn btn-primario btn-submit btn-block" />
				</div>
			</form>
		</div>
	);
};

export default TaskForm;
