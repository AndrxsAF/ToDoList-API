import React, { useState } from "react";
import Todo from "./todo.jsx";
import NoTodo from "./noTodo.jsx";
import HeadTodo from "./headTodo.jsx";

//create your first component
const Home = () => {
	const [addTodo, setAddTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [checkValue, setCheckValue] = useState("");

	const checkList = (event, id) => {
		let arrCheck = [...todoList];
		if (event.target.checked) {
			arrCheck[id][2] = true;
			setTodoList(arrCheck);
		} else {
			arrCheck[id][2] = false;
			setTodoList(arrCheck);
		}
		setTodoList(arrCheck);
		console.log(event);
	};

	const deleteTodo = (id) => {
		let editedTodoList = [...todoList];
		editedTodoList.splice(id, 1);
		console.log(editedTodoList);
		return setTodoList(editedTodoList);
	};

	const addNewTodo = () => {
		if (!checkValue || !addTodo) {
			alert("Asegurate de llenar bien los campos");
		} else {
			let newTodoList = [...todoList, [addTodo, checkValue, false]];
			const normalTodoList = newTodoList.filter(
				(todo) => todo[1] == "normal"
			);
			const importantTodoList = newTodoList.filter(
				(todo) => todo[1] == "important"
			);
			const urgentTodoList = newTodoList.filter(
				(todo) => todo[1] == "urgent"
			);
			newTodoList = urgentTodoList.concat(
				importantTodoList.concat(normalTodoList)
			);
			setTodoList(newTodoList);
		}
	};

	const todoText = (event) => setAddTodo(event.target.value);

	const selectImportance = (event) => setCheckValue(event.target.value);

	console.log({ todoList });
	console.log({ addTodo });
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
				{!todoList.length ? (
					<NoTodo />
				) : (
					todoList.map((todo, index) => (
						<Todo
							key={index}
							id={index}
							importance={todo[1]}
							textContent={todo[0]}
							deleteTodo={deleteTodo}
							checkList={checkList}
							isCheck={todo[2]}
						/>
					))
				)}
				<div className="d-flex justify-content-center">
					<span className="badge bg-info text-dark me-2">
						Normales:{" "}
						{todoList.filter((todo) => todo[1] == "normal").length}
					</span>
					<span className="badge bg-warning text-dark mx-2">
						Importantes:{" "}
						{
							todoList.filter((todo) => todo[1] == "important")
								.length
						}
					</span>
					<span className="badge bg-danger mx-2">
						Urgentes:{" "}
						{todoList.filter((todo) => todo[1] == "urgent").length}
					</span>
					<span className="badge bg-success ms-2">
						Tareas Completadas:{" "}
						{todoList.filter((todo) => todo[2] == true).length}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
