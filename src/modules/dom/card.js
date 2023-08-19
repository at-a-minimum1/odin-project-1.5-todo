// BEM stands for Block Element Modifier, and it is a popular naming convention and methodology for writing maintainable and scalable CSS code. BEM helps create a clear and understandable class naming structure by following a specific pattern.

// export function createCard(inputTitle, inputDate, inputPriority) {
export function createCard() {
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

export function styleCard(inputPriority, isChecked) {
	// Style card logic here
}
