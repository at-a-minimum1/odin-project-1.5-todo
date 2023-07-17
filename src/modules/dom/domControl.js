export function getFormData() {
	const taskTitle = document.getElementById("task-title").value || "Test Title";
	const taskDate =
		document.getElementById("task-due-date").value || "04/20/6969";
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
	// Append the items in a card element
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card-wrapper");
	cardWrap.append(task.title);
	cardWrap.append(task.date);
	cardWrap.append(task.priority);
	// Append the card element to the main panel
	mainPanel.append(cardWrap);
}

export function updateData(array) {
	array.forEach((taskList) => {
		taskList.forEach((element) => {
			addToMainPanel(element);
		});
	});

	// array.forEach((element) => {
	// 	addToMainPanel(element);
	// });
}

export function addToProjectList(taskList) {
	const projectDropDown = document.getElementById("project-list");
	const projectTitle = taskList.title;
	const projectValue = "project-" + projectDropDown.options.length;
	// console.log(projectValue + ": " + projectTitle);
	const newOption = document.createElement("option");
	newOption.value = projectValue;
	newOption.textContent = projectTitle;
	projectDropDown.appendChild(newOption);
}

// CHATGPT solution
// export function addToProjectList(taskList) {
//   const projectDropDown = document.getElementById("project-list");
//   const projectTitle = taskList.title;

//   // Determine the next available project number
//   const nextProjectNumber = projectDropDown.options.length;

//   // Create a new option element
//   const newOption = document.createElement("option");

//   // Set the value attribute
//   newOption.value = "project-" + nextProjectNumber;

//   // Set the display text
//   newOption.textContent = projectTitle;

//   // Append the new option to the select dropdown
//   projectDropDown.appendChild(newOption);
// }
