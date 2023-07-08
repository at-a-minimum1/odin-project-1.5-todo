function getFormData(event) {
    event.preventDefault();
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
