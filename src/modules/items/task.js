import { v4 as uuidv4 } from "uuid";

export class Task {
	constructor(title, date, priority) {
		this.id = uuidv4();
		this.title = title;
		this.date = date;
		this.priority = priority;
	}
}
