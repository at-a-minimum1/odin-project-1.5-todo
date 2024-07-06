import * as cardModule from "./card";
import { format } from "date-fns";

export function getFormData() {
	const taskTitle = document.getElementById("task-title").value || "Test Title";
	const taskDate = document.getElementById("task-due-date").value || new Date();
	const taskPriority =
		document.getElementById("task-priority").value || "Test Priority";
	const taskDescription =
		document.getElementById("task-description").value || "Test Description";
	const formData = {
		title: taskTitle,
		date: taskDate,
		priority: taskPriority,
		description: taskDescription,
		complete: false,
	};
	return formData;
}

export function addToMainPanel(task) {
	const mainPanel = document.getElementById("main-panel-wrapper");
	const newCard = cardModule.createCard(
		task.title,
		task.date,
		task.priority,
		task.description,
		task.id,
		task.complete
	);
	mainPanel.append(newCard);
}

export function instaniateMainPanel(taskData) {
	taskData.forEach((taskList) => {
		taskList.array.forEach((element) => {
			addToMainPanel(element);
		});
	});
}

export function updateMainPanel(taskList) {
	if (Array.isArray(taskList)) {
		taskList.forEach((element) => {
			addToMainPanel(element);
		});
	} else {
		updateProjectHeader(taskList.title);
		taskList.array.forEach((element) => {
			addToMainPanel(element);
		});
	}
}

export function clearMainPanel() {
	const mainPanel = document.getElementById("main-panel-wrapper");
	mainPanel.innerHTML = "";
}

export function updateProjectHeader(projectName) {
	const projectDropdown = document.getElementById("project-dropdown");
	projectDropdown.innerText = projectName;
	projectDropdown.value = projectName;
}

export function addToProjectList() {
	const projectDropDown = document.getElementById("project-list");
	const projectTitle = document.getElementById("project-title").value;
	const projectValue = projectTitle;

	const existingProjectsArray = Array.from(projectDropDown.options).map(
		(option) => option.textContent
	);
	const isExistingProject = existingProjectsArray.includes(projectTitle);

	if (!isExistingProject) {
		const newOption = document.createElement("option");
		newOption.value = projectValue;
		newOption.textContent = projectTitle;
		projectDropDown.appendChild(newOption);
	} else {
		console.error("Project name already exists");
	}
}

export function clearProjectList() {
	const projectOptions = document.getElementById("project-options");
	projectOptions.innerHTML = "";
	const projectOptionsMenu = document.getElementById("hiddenProjectOptions");
	projectOptionsMenu.innerHTML = "&nbsp;";
}

export function instantiateProjectList(projectData) {
	const projectOptions = document.getElementById("project-options");
	const hiddenProjectOptions = document.getElementById("hiddenProjectOptions");

	projectData.forEach((project) => {
		let optionWrapper = createProjectOption(project);
		let menuWrapper = createProjectOptionMenu(project);
		hiddenProjectOptions.appendChild(menuWrapper);
		projectOptions.appendChild(optionWrapper);
	});

	const inputWrapper = document.createElement("div");
	const inputProject = document.createElement("input");
	inputProject.placeholder = "Add a new project";
	inputProject.id = "input-project";
	inputProject.maxLength = "25";
	const addButton = document.createElement("button");
	addButton.textContent = "+";
	addButton.classList.add(
		"project-display__project-wrapper__project-options__wrapper__add-button"
	);
	addButton.id = "add-project-button";
	inputWrapper.appendChild(inputProject);
	inputWrapper.appendChild(addButton);
	projectOptions.appendChild(inputWrapper);
}

// Creates and returns html elements that are project buttons
function createProjectOption(project) {
	const optionWrapper = document.createElement("div");
	optionWrapper.classList.add(
		"project-display__project-wrapper__project-options__wrapper"
	);
	const projectOptionButton = document.createElement("button");
	projectOptionButton.classList.add(
		"project-display__project-wrapper__project-options__wrapper__button"
	);
	projectOptionButton.value = project.title;
	projectOptionButton.textContent = project.title;
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "X";
	deleteButton.value = project.title;

	deleteButton.classList.add(
		"project-display__project-wrapper__project-options__wrapper__delete-button"
	);

	optionWrapper.appendChild(projectOptionButton);
	optionWrapper.appendChild(deleteButton);

	return optionWrapper;
}
// Creates html elements that contain the buttons to delete and edit the projects
function createProjectOptionMenu(project) {
	const projectTitle = project.title;
	const projectTitleNoSpace = projectTitle.replace(/ /g, "");
	const optionWrapper = document.createElement("div");
	const buttonWrapper = document.createElement("div");

	const deleteButton = document.createElement("button");
	const cancelButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	cancelButton.innerText = "Cancel";

	optionWrapper.value = project.title;
	optionWrapper.classList.add("shadow-panel__option-wrapper");
	optionWrapper.classList.add("shadow-panel__option-wrapper--hidden");
	buttonWrapper.classList.add("shadow-panel__option-wrapper__button-wrapper");
	deleteButton.classList.add(
		"shadow-panel__option-wrapper__button-wrapper__button"
	);
	cancelButton.classList.add(
		"shadow-panel__option-wrapper__button-wrapper__button"
	);

	deleteButton.value = project.title;
	deleteButton.id = `${projectTitleNoSpace}-delete`;

	optionWrapper.id = `wrapper-${projectTitleNoSpace}`;

	buttonWrapper.appendChild(deleteButton);
	buttonWrapper.appendChild(cancelButton);

	optionWrapper.appendChild(buttonWrapper);

	return optionWrapper;
}

export function toggleHideElement(elementsToToggle) {
	// Takes in the key value pair where the key is a classname and the value is an dom element.
	for (const className in elementsToToggle) {
		const element = elementsToToggle[className];
		if (element) {
			element.classList.toggle(`${className}--hidden`);
		}
	}
}

export function toggleCompleteElement(elementsToToggle) {
	for (const className in elementsToToggle) {
		const element = elementsToToggle[className];
		if (element) {
			element.classList.toggle(`${className}--complete`);
			element.classList.toggle("inner-shadow");
		}
	}
}
export function clearForm() {
	const titleForm = document.getElementById("task-title");
	const dateForm = document.getElementById("task-due-date");
	const priorityForm = document.getElementById("task-priority");
	const descriptionForm = document.getElementById("task-description");
	titleForm.value = "";
	let currentDate = new Date();
	dateForm.value = format(currentDate, "yyyy-MM-dd");
	priorityForm.value = "low";
	descriptionForm.value = "";
}

// Hides all the open divs inside a parent div.
export function hideAllElements(parentDiv) {
	for (const child of parentDiv.children) {
		if (child.classList.length < 2) {
			const className = child.classList.item(0);
			child.classList.toggle(`${className}--hidden`);
		}
	}
}
