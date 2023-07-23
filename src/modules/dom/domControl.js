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
		taskList.array.forEach((element) => {
			addToMainPanel(element);
		});
	});
}

export function addToProjectList() {
	const projectDropDown = document.getElementById("project-list");
	const projectTitle = document.getElementById("project-title").value;
	const projectValue = "project-" + projectDropDown.options.length;
	// console.log(projectValue + ": " + projectTitle);
	const newOption = document.createElement("option");
	newOption.value = projectValue;
	newOption.textContent = projectTitle;
	projectDropDown.appendChild(newOption);
}

export function instantiateProjectList(projectData) {
	// Get the projectDropDown values and then add more projects to the list with the above function? Maybe add a parameter that takes in the data from the data class?
	projectData.forEach((element) => {
		// TODO change the value to a position in the array rather than the title.
		// TODO or not?
		const projectDropDown = document.getElementById("project-list");

		const newOption = document.createElement("option");
		newOption.value = element.title;
		newOption.textContent = element.title;
		projectDropDown.appendChild(newOption);
	});
}