import { Task } from "../modules/items/task";
import { saveData, loadData } from "./dataStorage";
import { TaskList } from "../modules/items/taskList";
import * as dom from "../modules/dom/domControl";

let project0 = new TaskList("project-0", []);
let project1 = new TaskList("project-1", []);
let projectData = [project0, project1];

export function getProjectData() {
	return projectData;
}

export function instantiateLocalStorage() {
	// Check if local storage is empty
	if (localStorage.length === 0) {
		saveData("project-data", projectData);
	} else {
		projectData = loadData("project-data");
	}
}

export function addTask(formData) {
	let newTask = new Task(formData.title, formData.date, formData.priority);
	let currentProject = getCurrentProject();
	let tempProject = currentProject.array;
	tempProject.push(newTask);
	currentProject.array = tempProject;

	saveData("project-data", projectData);

	dom.addToMainPanel(newTask);
}

export function removeTask() {
	// logic for removing task
}

export function sortTasks() {
	// Logic for sorting tasks
}

export function getCurrentProject() {
	const projectList = document.getElementById("project-list");
	const currentProject = projectList.value;
	const currentProjectArray = getProjectFromData(currentProject);

	return currentProjectArray;
}

export function getProjectFromData(project) {
	let dataProject;
	if (project instanceof TaskList) {
		dataProject = projectData.find(
			(taskList) => taskList.title === project.title
		);
	} else {
		dataProject = projectData.find((taskList) => taskList.title === project);
	}
	return dataProject;
}

export function addProject() {
	const projectTitle = document.getElementById("project-title").value;
	const newTaskList = new TaskList(projectTitle, []);

	let existingProjectName = false;
	for (const project of projectData) {
		if (project.title === projectTitle) {
			existingProjectName = true;
			break;
		}
	}
	if (!existingProjectName) {
		projectData.push(newTaskList);
		saveData("project-data", projectData);
	} else {
		console.error(
			"Project title already exists. Please choose a different title!"
		);
	}
}
