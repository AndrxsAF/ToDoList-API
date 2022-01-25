import PropTypes from "prop-types";
import React from "react";

const Todo = (props) => {
	if (props.importance === "urgent") {
		return (
			<div
				id={props.id}
				className="alert alert-danger d-flex justify-content-between"
				role="alert">
				<p className="mb-0">{props.textContent}</p>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value="on"
						checked={props.isCheck ? "checked" : ""}
						onChange={(e) => props.checkList(e, props.id)}></input>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={() => props.deleteTodo(props.id)}></button>
				</div>
			</div>
		);
	} else if (props.importance === "important") {
		return (
			<div
				id={props.id}
				className="alert alert-warning d-flex justify-content-between"
				role="alert">
				<p className="mb-0">{props.textContent}</p>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value="on"
						checked={props.isCheck ? "checked" : ""}
						onChange={(e) => props.checkList(e, props.id)}></input>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={() => props.deleteTodo(props.id)}></button>
				</div>
			</div>
		);
	} else {
		return (
			<div
				id={props.id}
				className="alert alert-info d-flex justify-content-between"
				role="alert">
				<p className="mb-0">{props.textContent}</p>
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value="on"
						checked={props.isCheck ? "checked" : ""}
						onChange={(e) => props.checkList(e, props.id)}></input>
					<button
						type="button"
						className="btn-close"
						aria-label="Close"
						onClick={() => props.deleteTodo(props.id)}></button>
				</div>
			</div>
		);
	}
};

Todo.propTypes = {
	importance: PropTypes.string,
	id: PropTypes.number,
	textContent: PropTypes.string,
	deleteTodo: PropTypes.func,
	checkList: PropTypes.func,
	isCheck: PropTypes.bool,
};

export default Todo;
