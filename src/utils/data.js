import { Task } from "./modules/items/task";
// import { saveData, loadData } from "../items";
import { saveData, loadData } from "./dataStorage";
import { TaskList } from "../modules/items/taskList";
// import { getFormData } from "../dom/domControl";
// import { getFormData } from "../modules/dom/domControl";

const allTasks = new TaskList("project-0", []);
const project1 = new TaskList("project-1", []);
let projectData = [allTasks, project1];

export function getAllProjects() {
	return projectData;
}

export function instantiateLocalStorage() {
	// Check if local storage is empty
	if (localStorage.length === 0) {
		// Local storage is empty, handle the situation as needed
		projectData = [allTasks, project1];
		saveData("project-data", projectData);
		console.log("Local storage is empty.");
	} else {
		// Local storage has data, you can proceed with loading and working with the data
		data.projectData = loadData("project-data");
		console.log("Local storage contains data.");
	}
}

export function addTask(formData) {
	let newTask = new Task(formData.title, formData.date, formData.priority);
	let currentProject = getCurrentProject();
	// TODO change this to save the updated projectData object
	// TODO push the new task to a project list
	console.log(currentProject + " contains " + newTask);

	addToProjectData(newTask, currentProject);
	saveData("project-data", projectData);
	currentProject.array.push(newTask);

	addToMainPanel(newTask);
}

export function addToProjectData(task, taskList) {
	const dataTaskList = getProjectFromData(taskList);
	console.log(dataTaskList);
	dataTaskList.array.push(task);
	// const currentProject = getCurrentProject();
	// const currentProjectArray = projectData.find(
	// () => (taskList.title = currentProject)
	// );
}

export function addProject() {
	const projectTitle = document.getElementById("project-title").value;
	// Add project logic here
	const newTaskList = new TaskList(projectTitle, []);

	// Add to project list wrapper
	addToProjectList(newTaskList);
}

export function getProjectFromData(project) {
	let dataProject;
	if (project instanceof TaskList) {
		console.log("instance of tasklist");
		dataProject = projectData.find(
			(taskList) => taskList.title === project.title
		);
	} else {
		console.log("not instance of tasklist");
		dataProject = projectData.find((taskList) => taskList.title === project);
		console.log(project + " =? " + dataProject);
	}
	return dataProject;
}

export function getCurrentProject() {
	const projectList = document.getElementById("project-list");

	const currentProject = projectList.value;
	const currentProjectArray = getProjectFromData(currentProject);

	return currentProjectArray;
}
