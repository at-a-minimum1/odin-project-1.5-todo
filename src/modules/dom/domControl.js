import { format } from "date-fns";
import { TaskList } from "../items/taskList";

export function getFormData() {
	const taskTitle = document.getElementById("task-title").value || "Test Title";
	const taskDate = document.getElementById("task-due-date").value || new Date();
	const taskPriority =
		document.getElementById("task-priority").value || "Test Priority";
	const formData = {
		title: taskTitle,
		date: taskDate,
		priority: taskPriority,
	};
	return formData;
}

export function addToMainPanel(task) {
	const mainPanel = document.getElementById("main-panel-wrapper");
	const formattedDate = format(new Date(task.date), "MM/dd/yyyy");
	// Append the items in a card element
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card-wrapper");
	// Add the dataset taskId to the card wrap
	cardWrap.dataset.taskId = task.id;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.classList.add("delete-button");

	cardWrap.append(task.title);
	cardWrap.append(formattedDate);
	cardWrap.append(task.priority);
	cardWrap.append(deleteButton);
	// Append the card element to the main panel
	mainPanel.append(cardWrap);
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
		// const projectDisplay = document.getElementById("project-header");
		// projectDisplay.textContent = taskList.title;
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
	const projectDisplay = document.getElementById("project-header");
	projectDisplay.textContent = projectName;
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

export function toggleHidden(html) {
	html.classList.toggle("hide");
}
