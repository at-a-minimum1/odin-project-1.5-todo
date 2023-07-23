import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";

window.onload = () => {
	data.instantiateLocalStorage();
	const projectData = data.getProjectData();
	dom.instantiateProjectList(projectData); //TODO uncommment out line to populate list
	dom.updateData(projectData);
};

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	const formData = dom.getFormData();
	data.addTask(formData);
	// dom.addToMainPanel();
});

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", (event) => {
	event.preventDefault();
	data.addProject();
	dom.addToProjectList();
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
