export const getTodos = () =>
	fetch("https://assets.breatheco.de/apis/fake/todos/user/andrxsaf", {
		method: "GET",
	});

export const putTodos = (list) =>
	fetch("https://assets.breatheco.de/apis/fake/todos/user/andrxsaf", {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(list),
	});
