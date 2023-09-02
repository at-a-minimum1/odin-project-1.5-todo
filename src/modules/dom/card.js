// BEM stands for Block Element Modifier, and it is a popular naming convention and methodology for writing maintainable and scalable CSS code. BEM helps create a clear and understandable class naming structure by following a specific pattern.
import { format, toISOString } from "date-fns";

export function createCard(inputTitle, inputDate, inputPriority, inputTaskId) {
	// Block
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card");
	cardWrap.dataset.taskId = inputTaskId;

	// Block elements
	const checkboxSection = document.createElement("div");
	checkboxSection.classList.add("card__checkbox__section");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.classList.add("card__checkbox__section__checkbox");

	const titleSection = document.createElement("div");
	titleSection.classList.add("card__title__section");
	const title = document.createElement("h1");
	title.classList.add("card__title__section__title");
	title.textContent = inputTitle;

	const dateSection = document.createElement("div");
	dateSection.classList.add("card__date__section");
	const date = document.createElement("h1");
	date.classList.add("card__date__section__date");
	const formattedDate = format(new Date(inputDate), "MM/dd/yyyy");
	date.textContent = formattedDate;

	const expandButtonSection = document.createElement("div");
	expandButtonSection.classList.add("card__expand__button__section");
	const expandButton = document.createElement("button");
	expandButton.classList.add("card__expand__button__section__button");
	expandButton.textContent = "Expand";

	// Block form section
	const formWrap = document.createElement("div");
	formWrap.classList.add(
		"card__title__section__form-wrap",
		"card__title__section__form-wrap--hidden"
	);

	// Form section that replaces title
	const formTitle = document.createElement("label");
	formTitle.setAttribute("for", "formTitle");
	formTitle.textContent = "Title";
	const formInputTitle = document.createElement("input");
	formInputTitle.setAttribute("type", "text");
	formInputTitle.value = inputTitle;
	const formPriority = document.createElement("label");
	formPriority.setAttribute("for", "priorityDropdown");
	formPriority.textContent = "Priority";
	const formSelectPriority = document.createElement("select");
	formSelectPriority.setAttribute("id", "priorityDropdown");
	// Create a high priority option
	const formSelectPriorityHigh = document.createElement("option");
	formSelectPriorityHigh.setAttribute("value", "formSelectPriorityHigh");
	formSelectPriorityHigh.textContent = "High";
	// Create the Normal priority option (and set it as selected)
	const formSelectPriorityNormal = document.createElement("option");
	formSelectPriorityNormal.setAttribute("value", "formSelectPriorityMedium");
	formSelectPriorityNormal.textContent = "Normal";
	// Create the Low priority option
	const formSelectPriorityLow = document.createElement("option");
	formSelectPriorityLow.setAttribute("value", "formSelectPriorityLow");
	formSelectPriorityLow.textContent = "Low";
	if (inputPriority == "low") {
		formSelectPriorityLow.setAttribute("selected", "");
	}
	if (inputPriority == "medium") {
		formSelectPriorityNormal.setAttribute("selected", "");
	} else {
		formSelectPriorityHigh.setAttribute("selected", "");
	}

	formSelectPriority.append(
		formSelectPriorityHigh,
		formSelectPriorityNormal,
		formSelectPriorityLow
	);

	const formDate = document.createElement("label");
	formDate.setAttribute("for", "formDate");
	formDate.textContent = "Due Date";
	const formInputDate = document.createElement("input");
	formInputDate.setAttribute("type", "date");
	formInputDate.setAttribute("id", "formDate");
	// formInputDate.setAttribute("value", inputDate);
	const dateString = inputDate.slice(0, 10);
	formInputDate.setAttribute("value", dateString);

	// formInputDate.defaultValue = inputDate;

	// Append form elements
	formWrap.append(
		formTitle,
		formInputTitle,
		formPriority,
		formSelectPriority,
		formDate,
		formInputDate
	);

	// Description area
	const descriptionHeader = document.createElement("h3");
	descriptionHeader.classList.add(
		"card__date__section__header",
		"card__date__section__header--hidden"
	);
	descriptionHeader.textContent = "Description";

	const descriptionTextarea = document.createElement("textarea");
	descriptionTextarea.classList.add(
		"card__date__section__textarea",
		"card__date__section__textarea--hidden"
	);

	// Save and Delete buttons
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add(
		"card__expand__button__section__button-container",
		"card__expand__button__section__button-container--hidden"
	);
	const saveButton = document.createElement("button");
	saveButton.classList.add(
		".card__expand__button__section__button-container__save__button"
	);
	saveButton.textContent = "Save";
	saveButton.id = `saveButton-${inputTaskId}`;

	const deleteButton = document.createElement("button");
	deleteButton.classList.add(".button-container__delete__button");
	deleteButton.id = `deleteButton-${inputTaskId}`;
	deleteButton.textContent = "Delete";

	buttonContainer.append(saveButton, deleteButton);

	// Block modifiers
	applyPriorityStyle(checkboxSection, expandButtonSection, inputPriority);

	// Append elements
	checkboxSection.append(checkbox);
	titleSection.append(title, formWrap);
	dateSection.append(date, descriptionHeader, descriptionTextarea);
	expandButtonSection.append(expandButton, buttonContainer);

	cardWrap.append(
		checkboxSection,
		titleSection,
		dateSection,
		expandButtonSection
	);
	// Event listeners
	return cardWrap;
}

export function applyPriorityStyle(
	checkboxSection,
	expandButtonSection,
	priority
) {
	const priorityClassCheckbox = `card__checkbox__section--priority--${priority}`;
	const priorityClassExpandButton = `card__expand__button__section--priority--${priority}`;
	expandButtonSection.classList.remove(
		"card__expand__button__section--priority--high",
		"card__expand__button__section--priority--medium",
		"card__expand__button__section--priority--low"
	);
	checkboxSection.classList.remove(
		"card__checkbox__section--priority--high",
		"card__checkbox__section--priority--medium",
		"card__checkbox__section--priority--low"
	);

	expandButtonSection.classList.add(priorityClassExpandButton);
	checkboxSection.classList.add(priorityClassCheckbox);
}

// export function styleCard(inputPriority, isChecked, ...args) {
// 	// Style card logic here
// 	const checkboxSection = args[0];
// 	const expandButtonSection = args[1];

// 	// Remove existing priority modifier
// 	checkboxSection.classList.remove(
// 		"card__expand__button__section--priority--high",
// 		"card__expand__button__section--priority--medium",
// 		"card__expand__button__section--priority--low"
// 	);

// 	if (inputPriority == "high") {
// 		checkboxSection.classList.add(
// 			"card__expand__button__section--priority--high"
// 		);
// 		const element = elementsToToggle[className];
// 	}
// 	if (inputPriority == "medium") {
// 		checkboxSection.classList.add(
// 			"card__expand__button__section--priority--medium"
// 		);
// 		const element = elementsToToggle[className];
// 	}
// 	if (inputPriority == "low") {
// 		checkboxSection.classList.add(
// 			"card__expand__button__section--priority--low"
// 		);
// 		const element = elementsToToggle[className];
// 	}
// 	if (element) {
// 		element.classList.toggle(`${className}--hidden`);
// 	}
// }

export function createTestCard() {
	// Block
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card");

	// Block elements
	const checkboxSection = document.createElement("div");
	checkboxSection.classList.add("card__checkbox__section");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.classList.add("card__checkbox__section__checkbox");

	const titleSection = document.createElement("div");
	titleSection.classList.add("card__title__section");
	const title = document.createElement("h1");
	title.classList.add("card__title__section__title");
	title.textContent = "Title"; //TODO change this to take param

	const dateSection = document.createElement("div");
	dateSection.classList.add("card__date__section");
	const date = document.createElement("h1");
	date.classList.add("card__date__section__date");
	date.textContent = "Date"; //TODO change to take param

	const expandButtonSection = document.createElement("div");
	expandButtonSection.classList.add("card__expand__button__section");
	const expandButton = document.createElement("button");
	expandButton.classList.add("card__expand__button__section__button");
	expandButton.textContent = "Expand";

	// Block form section
	const formWrap = document.createElement("div");
	formWrap.classList.add("card__form-wrap");

	// Block elements form section
	// TODO Possibly make the form section modular and import it?
	// Block modifiers

	// Append elements
	checkboxSection.append(checkbox);
	titleSection.append(title);
	dateSection.append(date);
	expandButtonSection.append(expandButton);

	cardWrap.append(
		checkboxSection,
		titleSection,
		dateSection,
		expandButtonSection
	);
	// Event listeners
	return cardWrap;
}
