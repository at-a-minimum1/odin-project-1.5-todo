import { Task } from "../modules/items/task";
import { saveData, loadData } from "./dataStorage";
import { TaskList } from "../modules/items/taskList";
import * as dom from "../modules/dom/domControl";

let allTasks = new TaskList("project-0", []);
let project1 = new TaskList("project-1", []);
let projectData = [allTasks, project1];

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
	// TODO delete tempProject and put the current project there.
	let tempProject = currentProject.array;
	tempProject.push(newTask);
	currentProject.array = tempProject;

	saveData("project-data", projectData);

	dom.addToMainPanel(newTask);
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

export function addToProjectData(task, taskList) {
	const dataTaskList = getProjectFromData(taskList);
	allTasks.array.push(task);
}

export function addProject() {
	const projectTitle = "project-" + projectData.length;
	const newTaskList = new TaskList(projectTitle, []);

	projectData.push(newTaskList);
	saveData("project-data", projectData);
}

// export function addToProjectList(taskList) {
// 	const projectDropDown = document.getElementById("project-list");
// 	const projectTitle = taskList.title;
// 	const projectValue = "project-" + projectDropDown.options.length;
// 	// console.log(projectValue + ": " + projectTitle);
// 	const newOption = document.createElement("option");
// 	newOption.value = projectValue;
// 	newOption.textContent = projectTitle;
// 	projectDropDown.appendChild(newOption);
// }
