import React, { useEffect, useState } from "react";
import Todo from "./todo.jsx";
import HeadTodo from "./headTodo.jsx";

import { getTodos, putTodos } from "../../services/services.js";

//create your first component
const Home = () => {
	const [addTodo, setAddTodo] = useState("");
	const [todoList, setTodoList] = useState([
		{
			label: "Añade una tarea nueva!",
			importance: "normal",
			done: false,
		},
	]);
	const [checkValue, setCheckValue] = useState("");

	useEffect(() => {
		getTodos()
			.then((response) => response.json())
			.then((responseJson) => {
				const apiTodoList = responseJson;
				setTodoList(apiTodoList);
			})
			.catch((err) => console.log(err));
	}, []);

	const checkList = (event, id) => {
		let arrCheck = [...todoList];
		if (event.target.checked) {
			arrCheck[id].done = true;
			setTodoList(arrCheck);
		} else {
			arrCheck[id].done = false;
			setTodoList(arrCheck);
		}
		putTodos(arrCheck);
		setTodoList(arrCheck);
	};

	const deleteTodo = (id) => {
		let editedTodoList = [...todoList];
		if (editedTodoList.length == 1) {
			let editedTodoList = [
				{
					label: "Añade una tarea nueva!",
					importance: "normal",
					done: false,
				},
			];
			putTodos(editedTodoList);
			return setTodoList(editedTodoList);
		} else {
			editedTodoList.splice(id, 1);
			putTodos(editedTodoList);
			return setTodoList(editedTodoList);
		}
	};

	const addNewTodo = () => {
		if (!checkValue || !addTodo) {
			alert("Asegurate de llenar bien los campos");
		} else {
			let newTodoList = [
				...todoList,
				{ label: addTodo, importance: checkValue, done: false },
			];
			const normalTodoList = newTodoList.filter(
				(todo) => todo.importance == "normal"
			);
			const importantTodoList = newTodoList.filter(
				(todo) => todo.importance == "important"
			);
			const urgentTodoList = newTodoList.filter(
				(todo) => todo.importance == "urgent"
			);
			newTodoList = urgentTodoList.concat(
				importantTodoList.concat(normalTodoList)
			);
			setTodoList(newTodoList);
			putTodos(newTodoList);
		}
	};

	const todoText = (event) => setAddTodo(event.target.value);

	const selectImportance = (event) => setCheckValue(event.target.value);

	return (
		<div className="container-fluid d-flex justify-content-center align-items-start p-0 vh-100">
			<div
				style={{ minWidth: "560px" }}
				className="my-5 bg-light p-5 border border-info border-2 rounded">
				<HeadTodo
					todoText={todoText}
					selectImportance={selectImportance}
					addNewTodo={addNewTodo}
				/>
				{todoList.map((todo, index) => (
					<Todo
						key={index}
						id={index}
						importance={todo.importance}
						textContent={todo.label}
						deleteTodo={deleteTodo}
						checkList={checkList}
						isCheck={todo.done}
					/>
				))}
				<div className="d-flex justify-content-center">
					<span className="badge bg-info text-dark me-2">
						Normales:{" "}
						{
							todoList.filter(
								(todo) => todo.importance == "normal"
							).length
						}
					</span>
					<span className="badge bg-warning text-dark mx-2">
						Importantes:{" "}
						{
							todoList.filter(
								(todo) => todo.importance == "important"
							).length
						}
					</span>
					<span className="badge bg-danger mx-2">
						Urgentes:{" "}
						{
							todoList.filter(
								(todo) => todo.importance == "urgent"
							).length
						}
					</span>
					<span className="badge bg-success ms-2">
						Tareas Completadas:{" "}
						{todoList.filter((todo) => todo.done == true).length}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
