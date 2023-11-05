import { Task } from "../modules/items/task";
import { saveData, loadData } from "./dataStorage";
import { TaskList } from "../modules/items/taskList";
import { isToday, isWithinInterval, addWeeks } from "date-fns";

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
	let newTask = new Task(
		formData.title,
		formData.date,
		formData.priority,
		formData.description,
		formData.complete
	);
	let currentProject = getCurrentProject();
	let tempProject = currentProject.array;
	tempProject.push(newTask);
	currentProject.array = tempProject;

	saveData("project-data", projectData);

	return newTask;
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
	const priorityMap = {
		high: 1,
		medium: 2,
		low: 3,
	};

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
		tempArray.sort((task1, task2) => {
			if (task1.date < task2.date) return -1;
			if (task1.date > task2.date) return 1;
			return 0;
		});
	}
	// Logic for sorting by priority
	if (sortBy == "priority") {
		tempArray.sort((task1, task2) => {
			const priority1 = priorityMap[task1.priority];
			const priority2 = priorityMap[task2.priority];
			return priority1 - priority2;
		});
	}
	return tempArray;
}

export function filterTasks(filterBy) {
	const allTasks = getAllTasks();
	const today = new Date();
	const nextWeek = addWeeks(today, 1);
	switch (filterBy) {
		case "Today":
			return allTasks.filter((task) => isToday(new Date(task.date)));
		case "This Week":
			return allTasks.filter((task) =>
				isWithinInterval(new Date(task.date), { start: today, end: nextWeek })
			);
		case "Important":
			return allTasks.filter((task) => task.priority === "high");
		default:
			return allTasks;
	}
}

export function getCurrentProject() {
	const projectList = document.getElementById("project-dropdown");
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
	// const projectInput = document.getElementById("project-title").value;
	const projectInput = document.getElementById("input-project").value;
	const newTaskList = new TaskList(projectInput, []);

	let existingProjectName = false;
	for (const project of projectData) {
		if (project.title === projectInput) {
			existingProjectName = true;
			break;
		}
	}
	if (!existingProjectName) {
		projectData.push(newTaskList);
		saveData("project-data", projectData);
	} else {
		// TODO move this to a modal
		console.error(
			"Project title already exists. Please choose a different title!"
		);
	}
}
// TODO finish this delete project function
export function deleteProject(inputProject) {
	const selectedProject = getProjectFromData(inputProject);
	let projectDataArray = Object.values(projectData);
	// let projectDataArray = [...projectData.array];
	// projectData;

	// const projectIndex = projectData.array.findIndex(selectedProject);
	// if (projectIndex != -1) {
	// 	projectData.array.splice(projectIndex, 1);
	// 	saveData("project-data", projectData);
	// }

	let projectIndex = 0;
	for (const project of projectData) {
		if (project === selectedProject) {
			let testRemove = Object.values(project);
			console.log(testRemove);
			console.log(projectDataArray);
			// projectDataArray.array.splice(projectIndex, 1);
			projectDataArray.splice(projectIndex, 1);
			console.log(projectDataArray);
			projectData = projectDataArray;
			saveData("project-data", projectData);
		}
		projectIndex++;
	}

	// const { taskList, taskIndex, task } = getTaskAndListById(taskId);

	// taskList.array.splice(taskIndex, 1);
	// saveData("project-data", projectData);
}

export function updateTask(
	taskId,
	inputTitle,
	inputDate,
	inputPriority,
	inputDescription
) {
	const { taskList, taskIndex, task } = getTaskAndListById(taskId);
	task.title = inputTitle;
	task.date = inputDate;
	task.priority = inputPriority;
	task.description = inputDescription;

	saveData("project-data", projectData);
}

export function toggleComplete(taskId) {
	const { taskList, taskIndex, task } = getTaskAndListById(taskId);
	if (task.complete === true) {
		task.complete = false;
	} else {
		task.complete = true;
	}
	saveData("project-data", projectData);
}
