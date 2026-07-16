import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

import * as addToDoProperties from "./addToDoProperties.js";
import Project from "./createProject.js";
import { ToDos } from "./createToDo.js";
import { addToDoToProject } from "./addToDoToProject.js";

const title = new Project("title");
console.log(title);
const something = new ToDos("eat an avocado");
console.log(something);
console.log("Add properties to todo");
addToDoProperties.addDescription(something, "Avocados are healthy so I need to eat one.");
addToDoProperties.addDueDate(something, "Today");
addToDoProperties.addPriority(something, "Urgent");
console.log(something);
console.log("Add todo to project");
addToDoToProject(title, something);
console.log(title);