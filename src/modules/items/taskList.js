export class TaskList {
	constructor(title, array) {
		this.title = title;
		this.array = array || [];
		// TODO maybe include this to associate it with the project you click on in the DOM. 
		// this.id = title + uuidv4();
	}
}
