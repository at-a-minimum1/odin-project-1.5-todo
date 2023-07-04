// import { updateData } from "../modules/dom/domControl";

export function saveData(key, value) {
	let dataArray = JSON.parse(localStorage.getItem(key)) || [];

	dataArray.push(value);
	localStorage.setItem(key, JSON.stringify(dataArray));
}

export function loadData(key) {
	const dataArray = JSON.parse(localStorage.getItem(key)) || [];
	updateData(dataArray);
}
