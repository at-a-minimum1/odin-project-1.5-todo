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
	array.forEach((element) => {
		addToMainPanel(element);
	});
}
