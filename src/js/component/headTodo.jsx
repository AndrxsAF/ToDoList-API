import React from "react";
import PropTypes from "prop-types";

const HeadTodo = (props) => {
	return (
		<div className="input-group mx-0 mb-3">
			<input
				type="text"
				className="form-control"
				aria-label="Text input with dropdown button"
				placeholder="Añadir nueva tarea..."
				onChange={(event) => props.todoText(event)}
			/>
			<button
				className="btn btn-outline-secondary dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Prioridad
			</button>
			<ul className="dropdown-menu dropdown-menu-end">
				<li>
					<a className="dropdown-item" href="#">
						<input
							className="form-check-input me-2"
							type="radio"
							name="task"
							id="normal"
							value="normal"
							onChange={(event) => props.selectImportance(event)}
						/>
						Normal
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						<input
							className="form-check-input me-2"
							type="radio"
							name="task"
							id="important"
							value="important"
							onChange={(event) => props.selectImportance(event)}
						/>
						Importante
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						<input
							className="form-check-input me-2"
							type="radio"
							name="task"
							id="urgent"
							value="urgent"
							onChange={(event) => props.selectImportance(event)}
						/>
						Urgente
					</a>
				</li>
				<li className="d-flex justify-content-center mt-2">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => props.addNewTodo()}>
						Añadir tarea
					</button>
				</li>
			</ul>
		</div>
	);
};

HeadTodo.propTypes = {
	selectImportance: PropTypes.func,
	todoText: PropTypes.func,
	addNewTodo: PropTypes.func,
};

export default HeadTodo;
