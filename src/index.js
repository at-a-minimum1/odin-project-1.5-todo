import * as dom from "./modules/dom/domControl";
import * as data from "./utils/data";
import "./styles.scss";

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

	const newTask = data.addTask(formData);
	dom.addToMainPanel(newTask);
	dom.clearForm();
});

const projectDropdownButton = document.getElementById("project-dropdown");
projectDropdownButton.addEventListener("click", () => {
	const parentDiv = document.getElementById("hiddenProjectOptions");
	dom.hideAllElements(parentDiv);
	const projectOptions = document.getElementById("project-options");
	const elementsToToggle = {
		"project-display__project-wrapper__project-options": projectOptions,
	};
	dom.toggleHideElement(elementsToToggle);
});

const sortDropdownButton = document.getElementById("sort-dropdown");
sortDropdownButton.addEventListener("click", () => {
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
	handleFilterClick("This Week");
});

const importantButton = document.getElementById("important-button");
importantButton.addEventListener("click", () => {
	handleFilterClick("Important");
});

function handleFilterClick(filterBy) {
	let filteredTasks = data.filterTasks(filterBy);
	dom.updateProjectHeader(filterBy);
	dom.clearMainPanel();
	dom.updateMainPanel(filteredTasks);
}

function handleSortClick(sortBy) {
	let currentProject = data.getCurrentProject();
	let sortedArray = data.sortTasks(currentProject, sortBy);
	dom.clearMainPanel();
	dom.updateMainPanel(sortedArray);
	const sortOptions = document.getElementById("sort-options");
	const elementsToToggle = {
		"project-display__sort-wrapper__sort-options": sortOptions,
	};
	dom.toggleHideElement(elementsToToggle);
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
	const selectedCard = event.target.closest(".card");
	const taskId = selectedCard.dataset.taskId;
	const deleteBtn = document.getElementById(`deleteButton-${taskId}`);
	const saveBtn = document.getElementById(`saveButton-${taskId}`);
	const checkbox = document.getElementById(`checkbox-${taskId}`);

	const cardInputs = selectedCard.querySelectorAll(
		".card__title__section__form-wrap__input"
	);
	const cardPriority = selectedCard.querySelector(
		".card__title__section__form-wrap__select"
	);
	const cardInputDescription = selectedCard.querySelector(
		".card__date__section__container__textarea"
	);

	deleteBtn.addEventListener("click", () => {
		let currentProject = data.getCurrentProject();
		data.removeTask(taskId);
		dom.clearMainPanel();
		dom.updateMainPanel(currentProject);
	});
	saveBtn.addEventListener("click", () => {
		let inputTitle = "Test Save Button";
		let inputDate = "2003-05-04";
		let inputPriority = "high";
		let inputDescription = "Test Save Description";
		let cardInputsArray = Array.from(cardInputs);

		inputTitle = cardInputsArray[0].value;
		inputDate = cardInputsArray[1].value;
		inputPriority = cardPriority.value.slice(18).toLowerCase();
		inputDescription = cardInputDescription.value;

		data.updateTask(
			taskId,
			inputTitle,
			inputDate,
			inputPriority,
			inputDescription
		);

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

		const descriptionContainer = card.querySelector(
			".card__date__section__container"
		);
		const buttonContainer = card.querySelector(
			".card__expand__button__section__button-container"
		);
		const checkbox = card.querySelector(".card__checkbox__section__span");

		const icon = card.querySelector(".card__date__section__icon");

		const cardElementsToToggle = {
			"card__title__section__form-wrap": formWrap,
			"card__title__section__title": titleSection,
			"card__date__section__date": dateElement,
			"card__date__section__container": descriptionContainer,
			"card__expand__button__section__button-container": buttonContainer,
			"card__checkbox__section__span": checkbox,
			"card__date__section__icon": icon,
		};
		dom.toggleHideElement(cardElementsToToggle);
	}
	if (event.target === checkbox) {
		const taskData = data.getTaskAndListById(taskId);
		const card = event.target.closest(".card");

		const titleSection = card.querySelector(".card__title__section");
		const dateSection = card.querySelector(".card__date__section");
		const cardElementsToToggle = {
			"card": card,
			".card__date__section": dateSection,
			".card__title__section": titleSection,
		};
		dom.toggleCompleteElement(cardElementsToToggle);
		data.toggleComplete(taskId);
	}
});

const projectHeader = document.getElementById("project-header");
projectHeader.addEventListener("click", (event) => {
	const newProjectButton = document.getElementById("add-project-button");
	if (event.target === newProjectButton) {
		data.addProject();
		const projectData = data.getProjectData();
		dom.clearProjectList();
		dom.instantiateProjectList(projectData);
	}

	if (
		event.target.matches(
			".project-display__project-wrapper__project-options__wrapper__button"
		)
	) {
		const selectedProject = data.getProjectFromData(event.target.value);
		dom.clearMainPanel();
		dom.updateMainPanel(selectedProject);
	}
	if (
		event.target.matches(
			".project-display__project-wrapper__project-options__wrapper__delete-button"
		)
	) {
		// Expand the div to the right by making the dialogue box visible.
		const projectTitle = event.target.value;
		const projectTitleNoSpace = projectTitle.replace(/ /g, "");
		const parentDiv = document.getElementById("hiddenProjectOptions");

		const optionWrapper = document.getElementById(
			`wrapper-${projectTitleNoSpace}`
		);
		const elementsToToggle = {
			"shadow-panel__option-wrapper": optionWrapper,
		};

		dom.hideAllElements(parentDiv);
		dom.toggleHideElement(elementsToToggle);
	}
	if (
		event.target.matches(
			".shadow-panel__option-wrapper__button-wrapper__button"
		)
	) {
		const projectTitle = event.target.value;
		const projectTitleNoSpace = projectTitle.replace(/ /g, "");
		const deleteBtn = document.getElementById(`${projectTitleNoSpace}-delete`);
		if (event.target === deleteBtn) {
			data.deleteProject(event.target.value);
		}

		dom.clearProjectList();
		const projectData = data.getProjectData();
		dom.instantiateProjectList(projectData);
	}
});

// window.addEventListener('click', (e) => {
//   if (e.target !== dialogBox && e.target !== projectButton) {
//     dialogBox.style.display = 'none';
//   }
