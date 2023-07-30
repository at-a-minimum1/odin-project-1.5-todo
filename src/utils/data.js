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

export function getAllTasks() {
	let allTasks = [];
	for (const project of projectData) {
		allTasks.push(...project.array);
	}
	return allTasks;
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
	console.log(currentProject);
	console.log(typeof currentProject);
	let tempProject = currentProject.array;
	tempProject.push(newTask);
	currentProject.array = tempProject;

	saveData("project-data", projectData);

	dom.addToMainPanel(newTask);
}

export function removeTask(taskId) {
	const { taskList, taskIndex, task } = getTaskAndListById(taskId);

	taskList.array.splice(taskIndex, 1);
	saveData("project-data", projectData);
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

export function sortTasks(taskList, sortBy) {
	let tempArray = [...taskList.array];
	// Logic for sorting by title
	if (sortBy == "title") {
		tempArray.sort((task1, task2) => {
			if (task1.title < task2.title) return -1;
			if (task1.title > task2.title) return 1;
			return 0;
		});
	}
	// Logic for sorting by date
	if (sortBy == "date") {
	}
	// Logic for sorting by priority
	if (sortBy == "priority") {
	}
	return tempArray;
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
