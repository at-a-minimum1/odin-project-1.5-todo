import { v4 as uuidv4 } from "uuid";

export class Task {
	constructor(title, date, priority, description, complete) {
		this.id = uuidv4();
		this.title = title;
		this.date = date;
		this.priority = priority;
		this.description = description || "No description";
		this.complete = complete || false;
	}
}
