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

export function removeTask(taskId) {
	// logic for removing task
	const selectedTask = getTaskById(taskId);
	const selectedTaskList = getTaskListById(taskId);
	const index = selectedTaskList.indexOf(selectedTask);
	selectedTaskList.splice(index, 1);
}

export function getTaskAndListById(taskId) {
	for (const taskList of projectData) {
		const taskIndex = taskList.array.findIndex((task) => task.id === taskId);
		if (taskIndex !== -1) {
			const task = taskList.array.find((task) => task.id === taskId);
			return { taskList, taskIndex, task };
		}
	}
	return { taskList: null, taskIndex: -1, task: null };
}

// TODO delete the commented out functions once the above function proves capable
// export function getTaskById(taskId) {
// 	const selectedTaskList = projectData.find((taskList) =>
// 		taskList.array.find((task) => task.id === taskId)
// 	);
// 	const selectedTask = selectedTaskList.array.find(
// 		(task) => task.id === taskId
// 	);
// 	return selectedTask;
// }

// export function getTaskListById(taskId) {
// 	const selectedTaskList = projectData.find((taskList) =>
// 		taskList.array.find((task) => task.id === taskId)
// 	);
// 	return selectedTaskList;
// }

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
