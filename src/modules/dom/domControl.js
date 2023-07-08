export function getFormData() {
	const taskTitle = document.getElementById("task-title") || "test title";
	const taskDate = document.getElementById("task-due-date") || "test date";
	const taskPriority =
		document.getElementById("task-priority") || "test-priority";
	const formData = {
		title: taskTitle.value,
		date: taskDate.value,
		priority: taskPriority.value,
	};
	console.log(formData);
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
	if (task.priority == "low") {
		console.log("Low priority");
	}
	console.log(task);
	// Append the card element to the main panel
	mainPanel.append(cardWrap);
}
