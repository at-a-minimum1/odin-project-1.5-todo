import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";

window.onload = () => {
	data.instantiateLocalStorage();
	const projectData = data.getProjectData();
	const startingProject = projectData[0].array;
	dom.instantiateProjectList(projectData);
	dom.updateMainPanel(startingProject);
};

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	const formData = dom.getFormData();
	data.addTask(formData);
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
	let currentProject = data.getCurrentProject();
	dom.clearMainPanel();
	dom.updateMainPanel(currentProject.array);
});

const resultsPanel = document.getElementById("main-panel-wrapper");
resultsPanel.addEventListener("click", (event) => {
	// If event matches whatever do something
	if (event.target.matches(".delete-button")) {
		console.log("delete button pressed.");
		const taskId = event.target.closest(".card-wrapper").dataset.taskId;
		data.removeTask(taskId);
		console.log(taskId);
	}
});
