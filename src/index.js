import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";

window.onload = () => {
	data.instantiateLocalStorage();
	const projectData = data.getProjectData();
	dom.instantiateProjectList(projectData);
	dom.updateMainPanel(projectData[0]);
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

const dropDownProject = document.getElementById("project-list");
dropDownProject.addEventListener("change", (event) => {
	let currentProject = data.getCurrentProject();
	dom.clearMainPanel();
	dom.updateMainPanel(currentProject);
});

const sortDropdown = document.getElementById("sort-dropdown");
sortDropdown.addEventListener("click", (event) => {
	// Toggle hidden elements
	const sortOptions = document.getElementById("sort-options");
	dom.toggleHidden(sortOptions);
	console.log("Sort dropdown works");
	// console.log()
});

// TODO Maybe use hover effects to reveal and hide the elements.
// sortDropdown.addEventListener("pointerleave", () => {
// 	const sortOptions = document.getElementById("sort-options");
// 	dom.toggleHidden(sortOptions);
// });

const sortDate = document.getElementById("sort-date");
sortDate.addEventListener("click", (event) => {
	console.log("sort date works");
	// Logic for sorting by date
});
const sortPriority = document.getElementById("sort-priority");
sortPriority.addEventListener("click", (event) => {
	console.log("sort priority works");
	// Logic for sort priority here
});
const sortTitle = document.getElementById("sort-title");
sortTitle.addEventListener("click", (event) => {
	console.log("sort title works");
	// Logic for sorting by title here
	let currentProject = data.getCurrentProject();
	let sortedArray = data.sortTasks(currentProject, "title");
	console.log(currentProject);
	console.log(sortedArray);
	dom.clearMainPanel();
	dom.updateMainPanel(sortedArray);
});

// Event delegations
const resultsPanel = document.getElementById("main-panel-wrapper");
resultsPanel.addEventListener("click", (event) => {
	// If event matches whatever do something
	if (event.target.matches(".delete-button")) {
		let currentProject = data.getCurrentProject();
		const taskId = event.target.closest(".card-wrapper").dataset.taskId;
		data.removeTask(taskId);
		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		data.addTask();
	}
});
