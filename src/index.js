import {
	getFormData,
	addToMainPanel,
	addToProjectList,
} from "./modules/dom/domControl";

import * as data from "./modules/items/data";

// const mainPanel = document.getElementById("main-panel-wrapper");
const allTasks = new TaskList("project-0", []);
const project1 = new TaskList("project-1", []);

// TODO loadData now returns a value instead of adding the values directly to the DOM. So the following commented out line has to be refactored into two steps.
// window.onload = loadData("project-data");
window.onload = function () {
	// Check if local storage is empty
	if (localStorage.length === 0) {
		// Local storage is empty, handle the situation as needed
		projectData = [allTasks, project1];
		saveData("project-data", projectData);
		console.log("Local storage is empty.");
	} else {
		// Local storage has data, you can proceed with loading and working with the data
		data.projectData = loadData("project-data");
		console.log("Local storage contains data.");
	}
};

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	data.addTask();
});

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", (event) => {
	event.preventDefault();
	data.addProject();
});

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		data.addTask();
	}
});

const dropDownProject = document.getElementById("project-list");
dropDownProject.addEventListener("change", (event) => {
	data.getCurrentProject();
});

// TODO change the key value to "projects" and then fill out the projects and the current project with all the tasks on load.
