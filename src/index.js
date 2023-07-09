import { getFormData, addToMainPanel } from "./modules/dom/domControl";
import { Task } from "./modules/items/task";
import { TaskList } from "./modules/items/taskList";
import { saveData, loadData } from "./utils/dataStorage";

const mainPanel = document.getElementById("main-panel-wrapper");

window.onload = loadData("test");

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();

	let formData = getFormData();
	let newTask = new Task(formData.title, formData.date, formData.priority);
	saveData("test", newTask);
	addToMainPanel(newTask);
});
