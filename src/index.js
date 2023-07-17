import {
	getFormData,
	addToMainPanel,
	addToProjectList,
} from "./modules/dom/domControl";

import * as data from "./utils/data";

// const mainPanel = document.getElementById("main-panel-wrapper");

// TODO loadData now returns a value instead of adding the values directly to the DOM. So the following commented out line has to be refactored into two steps.
window.onload = data.instantiateLocalStorage();

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	const formData = getFormData();
	data.addTask(formData);
	addToMainPanel();
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

function handleFormSubmit() {
	const formData = getFormData();
}
