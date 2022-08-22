const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
//
const savedToDo = localStorage.getItem("todo");

let toDos = [];
//
let isSavedTodo = false;

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	// li.classList.add("fade-out");
	// setTimeout, 350
	li.classList.add("fade-out");
    setTimeout(() => {
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
	}, 350);
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");

	li.id = newTodo.id;
	span.innerText = newTodo.text;
	button.innerText = "❌"

	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);

	button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
	// isSavedTodo = true;
	isSavedTodo = true;
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
	// isSavedTodo = false;
	isSavedTodo = false;
}