export function saveData(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function loadData(key) {
	const dataArray = JSON.parse(localStorage.getItem(key)) || [];
	return dataArray || [];
}
