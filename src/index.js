import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";
import "./styles.scss";

// https://isotropic.co/best-browsers-for-developers/
// TODO download a new browser and run this from there to determine if bug is from Chromium or not

window.onload = () => {
	data.instantiateLocalStorage();
	const projectData = data.getProjectData();
	dom.instantiateProjectList(projectData);
	dom.updateMainPanel(projectData[0]);
};

const projectDropdown = document.getElementById("project-list");
projectDropdown.addEventListener("change", (event) => {
	let currentProject = data.getCurrentProject();
	dom.clearMainPanel();
	dom.updateMainPanel(currentProject);
});

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", (event) => {
	event.preventDefault();
	const formData = dom.getFormData();

	const newTask = data.addTask(formData);
	dom.addToMainPanel(newTask);
});

const addProjectButton = document.getElementById("add-project");
addProjectButton.addEventListener("click", (event) => {
	event.preventDefault();
	data.addProject();
	dom.addToProjectList();
});

const sortDropdownButton = document.getElementById("sort-dropdown");
sortDropdownButton.addEventListener("click", (event) => {
	// Toggle hidden elements
	const sortOptions = document.getElementById("sort-options");
	const elementsToToggle = {
		"project-display__sort-wrapper__sort-options": sortOptions,
	};
	dom.toggleHideElement(elementsToToggle);
});

const todayButton = document.getElementById("today-button");
todayButton.addEventListener("click", () => {
	handleFilterClick("Today");
});

const nextWeekButton = document.getElementById("next-week-button");
nextWeekButton.addEventListener("click", () => {
	handleFilterClick("Next Week");
});

const importantButton = document.getElementById("important-button");
importantButton.addEventListener("click", () => {
	handleFilterClick("Important");
});
// TODO Maybe use hover effects to reveal and hide the elements.
// sortDropdown.addEventListener("pointerleave", () => {
const addCardButton = document.getElementById("testAddCard");
addCardButton.addEventListener("click", () => {
	dom.addCardTest();
});
// 	const sortOptions = document.getElementById("sort-options");
// 	dom.toggleHidden(sortOptions);
// });

function handleFilterClick(fliterBy) {
	let filteredTasks = data.filterTasks(fliterBy);
	dom.updateProjectHeader(fliterBy);
	dom.clearMainPanel();
	dom.updateMainPanel(filteredTasks);
}

function handleSortClick(sortBy) {
	let currentProject = data.getCurrentProject();
	let sortedArray = data.sortTasks(currentProject, sortBy);
	dom.clearMainPanel();
	dom.updateMainPanel(sortedArray);
}
// const sortButtons = document.querySelectorAll(".sort-button");
const sortButtons = document.querySelectorAll(
	".sort-wrapper__sort-options__button"
);

sortButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const sortBy = button.dataset.sort;
		handleSortClick(sortBy);
	});
});

// Event delegations
const resultsPanel = document.getElementById("main-panel-wrapper");
resultsPanel.addEventListener("click", (event) => {
	// If event matches whatever do something
	if (event.target.matches(".delete-button")) {
		//TODO get the delete button working with new card component. After getting the expand button to work.
		let currentProject = data.getCurrentProject();
		const taskId = event.target.closest(".card-wrapper").dataset.taskId;
		data.removeTask(taskId);
		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	}
	if (event.target.matches(".card__expand__button__section__button")) {
		const taskId = event.target.closest(".card").dataset.taskId;
		console.log(taskId);
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		data.addTask();
	}
});
