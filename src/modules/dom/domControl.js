import * as cardModule from "./card";

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

export function instantiateProjectList(projectData) {
	projectData.forEach((element) => {
		const projectDropDown = document.getElementById("project-list");

		const newOption = document.createElement("option");
		newOption.value = element.title;
		newOption.textContent = element.title;
		projectDropDown.appendChild(newOption);
	});
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
