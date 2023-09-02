import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";
import "./styles.scss";

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
	const taskId = event.target.closest(".card").dataset.taskId;
	const deleteBtn = document.getElementById(`deleteButton-${taskId}`);
	const saveBtn = document.getElementById(`saveButton-${taskId}`);
	deleteBtn.addEventListener("click", () => {
		let currentProject = data.getCurrentProject();
		data.removeTask(taskId);
		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	});
	saveBtn.addEventListener("click", () => {
		// TODO get the values from the form elements in the card and put them in the following variables.
		console.log("save button: " + taskId);
		const inputTitle = "Test Save Button";
		const inputDate = "2003-05-04";
		const inputPriority = "high";
		const inputDescription = "Test Save Description";
		data.updateTask(
			taskId,
			inputTitle,
			inputDate,
			inputPriority,
			inputDescription
		);
		// Add all the params taskId, inputTitle, inputDate, inputPriority, inputDescription
		let currentProject = data.getCurrentProject();

		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	});
	if (event.target.matches(".button-container__delete__button")) {
		let currentProject = data.getCurrentProject();
		const taskId = event.target.closest(".card").dataset.taskId;
		data.removeTask(taskId);
		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	}
	if (event.target.matches(".card__expand__button__section__button")) {
		const card = event.target.closest(".card");
		const taskId = card.dataset.taskId;
		const titleSection = card.querySelector(".card__title__section__title");
		const formWrap = card.querySelector(".card__title__section__form-wrap");
		const dateElement = card.querySelector(".card__date__section__date");
		const descriptionHeader = card.querySelector(
			".card__date__section__header"
		);
		const descriptionTextarea = card.querySelector(
			".card__date__section__textarea"
		);

		const buttonContainer = card.querySelector(
			".card__expand__button__section__button-container"
		);
		const checkbox = card.querySelector(".card__checkbox__section__checkbox");

		const cardElementsToToggle = {
			"card__title__section__form-wrap": formWrap,
			"card__title__section__title": titleSection,
			"card__date__section__date": dateElement,
			"card__date__section__header": descriptionHeader,
			"card__date__section__textarea": descriptionTextarea,
			"card__expand__button__section__button-container": buttonContainer,
			"card__checkbox__section__checkbox": checkbox,
		};
		dom.toggleHideElement(cardElementsToToggle);
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key == "Enter") {
		event.preventDefault();
		data.addTask();
	}
});
