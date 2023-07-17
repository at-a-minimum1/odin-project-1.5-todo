import {
	getFormData,
	addToMainPanel,
	addToProjectList,
} from "./modules/dom/domControl";
import { Task } from "./modules/items/task";
import { TaskList } from "./modules/items/taskList";
import { saveData, loadData } from "./utils/dataStorage";

// const mainPanel = document.getElementById("main-panel-wrapper");
const allTasks = new TaskList("project-0", []);
const project1 = new TaskList("project-1", []);

const projectData = [allTasks, project1];

window.onload = loadData("test");

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	addTask();
});

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", (event) => {
	event.preventDefault();
	addProject();
});

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		addTask();
	}
});

const dropDownProject = document.getElementById("project-list");
dropDownProject.addEventListener("change", (event) => {
	getCurrentProject();
});

function addTask() {
	let formData = getFormData();
	let newTask = new Task(formData.title, formData.date, formData.priority);
	let currentProject = getCurrentProject();
	// TODO change this to save the updated projectData object
	// TODO push the new task to a project list
	console.log(currentProject + " contains " + newTask);

	// TODO uncomment out the following line
	saveData("project-data", projectData);
	currentProject.array.push(newTask);

	addToMainPanel(newTask);
}

function addProject() {
	const projectTitle = document.getElementById("project-title").value;
	// Add project logic here
	const newTaskList = new TaskList(projectTitle, []);

	// Add to project list wrapper
	addToProjectList(newTaskList);
}

function getCurrentProject() {
	const projectList = document.getElementById("project-list");

	const currentProject = projectList.value;
	const currentProjectArray = projectData.find(
		(taskList) => (taskList.title = currentProject)
	);

	console.log(currentProject);
	console.log(currentProjectArray);

	return currentProjectArray;
}
// TODO change the key value to "projects" and then fill out the projects and the current project with all the tasks on load.
