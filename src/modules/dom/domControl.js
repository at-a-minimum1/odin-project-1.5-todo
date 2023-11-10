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
	// TODO change when you update the header to a dropdown
	// const projectDisplay = document.getElementById("project-header");
	// projectDisplay.textContent = projectName;
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
}

export function instantiateProjectList(projectData) {
	// TODO Change the project-options to projectOptions in the html and subsequent functions that still call project-options as the id
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
	const optionWrapper = document.createElement("div");
	const buttonWrapper = document.createElement("div");

	const dialogueHeader = document.createElement("h3");
	dialogueHeader.innerText = `Delete ${project.title}?`;

	const deleteButton = document.createElement("button");
	const cancelButton = document.createElement("button");
	deleteButton.innerText = "Delete";
	cancelButton.innerText = "Cancel";

	// TODO Add event listeners here?
	// cancelButton.addEventListener();
	// deleteButton.addEventListener();

	optionWrapper.value = project.title;
	optionWrapper.classList.add("shadow-panel__option-wrapper");
	optionWrapper.classList.add("shadow-panel__option-wrapper--hidden");
	dialogueHeader.classList.add("shadow-panel__option-wrapper__header");
	buttonWrapper.classList.add("shadow-panel__option-wrapper__button-wrapper");
	deleteButton.classList.add(
		"shadow-panel__option-wrapper__button-wrapper__button"
	);
	cancelButton.classList.add(
		"shadow-panel__option-wrapper__button-wrapper__button"
	);

	const projectTitleNoSpace = project.title.replace(/ /g, "");

	// deleteButton.id = `delete-${project.title}`;
	deleteButton.id = `delete-${projectTitleNoSpace}`;
	cancelButton.id = `cancel-${projectTitleNoSpace}`;
	optionWrapper.id = `wrapper-${projectTitleNoSpace}`;

	buttonWrapper.appendChild(deleteButton);
	buttonWrapper.appendChild(cancelButton);

	// optionWrapper.appendChild(dialogueHeader);
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

// TODO Delete the following function
// export function createConfirmDialogueBox() {
// 	const dialogueBoxWrapper = document.createElement("div");
// 	dialogueBoxWrapper.classList.add("dialogue-box-wrapper");
// 	const promptHeader = document.createElement("h6");
// 	promptHeader.innerText = "Are you sure you want to delete this project?";

// 	const buttonWrapper = document.createElement("div");
// 	buttonWrapper.classList.add("dialogue-box-wrapper__button-wrapper");
// 	const confirmButton = document.createElement("button");
// 	confirmButton.textContent = "Delete";
// 	const cancelButton = document.createElement("button");
// 	cancelButton.textContent = "Cancel";
// 	buttonWrapper.appendChild(confirmButton);
// 	buttonWrapper.appendChild(cancelButton);
// 	// dialogueBoxWrapper.appendChild(promptHeader, confirmButton, cancelButton);
// 	dialogueBoxWrapper.appendChild(promptHeader);
// 	dialogueBoxWrapper.appendChild(buttonWrapper);
// 	return dialogueBoxWrapper;
// }
