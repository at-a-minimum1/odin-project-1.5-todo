// BEM stands for Block Element Modifier, and it is a popular naming convention and methodology for writing maintainable and scalable CSS code. BEM helps create a clear and understandable class naming structure by following a specific pattern.


export function createCard(title, date, priority) {
	// Block
	const cardWrap = document.createElement("div");
	cardWrap.classList.add("card-wrapper");
	// Block elements
	const checkboxSection = document.createElement("div");
	checkboxSection.classList.add("checkbox__section");
	const titleSection = document.createElement("div");
	titleSection.classList.add("title__section");
	const dateSection = document.createElement("div");
	dateSection.classList.add("date__section");
	const expandButtonSection = document.createElement("div");
	expandButtonSection.classList.add("expand__button__section");

	// Block modifiers

	// Create card logic here
	return cardWrap;
}

export function styleCard() {
	// Style card logic here
}
