// BEM stands for Block Element Modifier, and it is a popular naming convention and methodology for writing maintainable and scalable CSS code. BEM helps create a clear and understandable class naming structure by following a specific pattern.
import { format } from "date-fns";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";

export function createCard(
	inputTitle,
	inputDate,
	inputPriority,
	inputDescription,
	inputTaskId,
	inputComplete
) {
	// Icons
	const editIcon = document.createElement("img");
	editIcon.src = "../src/modules/items/icons/tabler_edit.svg";
	const saveIcon = document.createElement("img");
	saveIcon.src = "../src/modules/items/icons/ant-design_save-outlined.svg";

	const trashIcon = document.createElement("img");
	trashIcon.src = "../src/modules/items/icons/Vector.svg";
	const mediumPriorityIcon = document.createElement("img");
	mediumPriorityIcon.src =
		"../src/modules/items/icons/flat-color-icons_medium-priority@2x.png";
	const highPriorityIcon = document.createElement("img");
	highPriorityIcon.src =
		"../src/modules/items/icons/flat-color-icons_high-priority.svg";

	// Icon classes
	mediumPriorityIcon.classList.add("card__date__section__icon");
	highPriorityIcon.classList.add("card__date__section__icon");
	// Block
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card");
	cardWrap.dataset.taskId = inputTaskId;

	// Block elements
	const checkboxId = `checkbox-${inputTaskId}`;
	const checkboxSection = document.createElement("label");
	checkboxSection.classList.add("card__checkbox__section");
	checkboxSection.setAttribute("for", checkboxId);

	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.classList.add("card__checkbox__section__checkbox");
	checkbox.id = checkboxId;
	// checkbox.checked = true;

	// Custom checkbox //
	const customCheckbox = document.createElement("span");
	customCheckbox.classList.add("card__checkbox__section__span");

	const titleSection = document.createElement("div");
	titleSection.classList.add("card__title__section");
	const title = document.createElement("h1");
	title.classList.add("card__title__section__title");
	title.textContent = inputTitle;

	const dateSection = document.createElement("div");

	dateSection.classList.add("card__date__section");
	// Change the style of the card based on if the task is complete or not
	if (inputComplete === false) {
		titleSection.classList.add("inner-shadow");
		dateSection.classList.add("inner-shadow");
	} else {
		checkbox.checked = true;
		cardWrap.classList.add("card--complete", "inner-shadow");
	}
	const date = document.createElement("h1");
	date.classList.add("card__date__section__date");
	const formattedDate = format(new Date(inputDate), "MM/dd/yyyy");
	date.textContent = formattedDate;

	const expandButtonSection = document.createElement("div");
	expandButtonSection.classList.add("card__expand__button__section");
	const expandButton = document.createElement("button");
	expandButton.classList.add("card__expand__button__section__button");
	editIcon.classList.add("card__expand__button__section__button");
	expandButton.appendChild(editIcon);
	expandButton.type = "button";

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
	formInputTitle.classList.add("card__title__section__form-wrap__input");

	const formPriority = document.createElement("label");
	formPriority.setAttribute("for", "priorityDropdown");
	formPriority.textContent = "Priority";
	const formSelectPriority = document.createElement("select");
	formSelectPriority.setAttribute("id", "priorityDropdown");
	formSelectPriority.classList.add("card__title__section__form-wrap__select");
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
	formInputDate.classList.add("card__title__section__form-wrap__input");

	let dateString;
	if (typeof inputDate == "string") {
		dateString = inputDate.slice(0, 10);
	} else {
		dateString = inputDate.toISOString().slice(0, 10);
	}
	formInputDate.setAttribute("value", dateString);

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
	const descriptionContainer = document.createElement("div");
	descriptionContainer.classList.add(
		"card__date__section__container",
		"card__date__section__container--hidden"
	);

	const descriptionHeader = document.createElement("h3");
	descriptionHeader.classList.add("card__date__section__container__header");
	descriptionHeader.textContent = "Description";

	const descriptionTextarea = document.createElement("textarea");
	descriptionTextarea.classList.add("card__date__section__container__textarea");
	descriptionTextarea.value = inputDescription;

	// Save and Delete buttons
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add(
		"card__expand__button__section__button-container",
		"card__expand__button__section__button-container--hidden"
	);
	const saveButton = document.createElement("button");
	saveButton.classList.add(
		".card__expand__button__section__button-container__button"
	);

	// saveButton.textContent = "S";
	saveButton.appendChild(saveIcon);
	saveButton.id = `saveButton-${inputTaskId}`;
	saveIcon.id = `saveButton-${inputTaskId}`;

	const deleteButton = document.createElement("button");
	deleteButton.classList.add(
		".card__expand__button__section__button-container__button"
	);
	deleteButton.id = `deleteButton-${inputTaskId}`;
	trashIcon.classList.add(
		".card__expand__button__section__button-container__button"
	);
	deleteButton.appendChild(trashIcon);

	buttonContainer.append(saveButton, deleteButton);

	// Block modifiers
	// applyPriorityStyle(checkboxSection, expandButtonSection, inputPriority);

	// Append elements
	checkboxSection.append(checkbox, customCheckbox);
	titleSection.append(title, formWrap);
	descriptionContainer.append(descriptionHeader, descriptionTextarea);
	// dateSection.append(date, descriptionHeader, descriptionTextarea);
	dateSection.append(date, descriptionContainer);
	if (inputPriority == "high") {
		dateSection.append(highPriorityIcon);
	}
	if (inputPriority == "medium") {
		dateSection.append(mediumPriorityIcon);
	}
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

// TODO Delete the following priority styling function and all of it's corresponding references.
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
