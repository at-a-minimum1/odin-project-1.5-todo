import { getFormData } from "./modules/dom/domControl";
// import { addToPanel, clearPanel } from "./modules/dom/domControl";

const addTaskButton = document.getElementById("add-task");
const formData = addTaskButton.addEventListener("click", getFormData());

function component() {
	const helloWorld = document.createElement("div");
	helloWorld.innerText = "Hello World Again";
	return helloWorld;
}

// document.body.appendChild(component());
