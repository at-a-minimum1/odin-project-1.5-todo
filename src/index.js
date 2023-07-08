import { getFormData, addToMainPanel } from "./modules/dom/domControl";
import { Task } from "./modules/items/task";

const mainPanel = document.getElementById("main-panel-wrapper");

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();

	let formData = getFormData();
	let newTask = new Task(formData.title, formData.date, formData.priority);
	addToMainPanel(newTask);
	// mainPanel.append(newTask);
});

// function component() {
// 	const helloWorld = document.createElement("div");
// 	helloWorld.innerText = "Hello World Again";
// 	return helloWorld;
// }

// document.body.appendChild(component());
