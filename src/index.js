import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

import * as addToDoProperties from "./addToDoProperties.js";
import Project from "./createProject.js";
import { ToDos } from "./createToDo.js";
import { addToDoToProject } from "./addToDoToProject.js";
import { showProject } from "./showProjects.js";


const mainContainer = document.getElementById("project-display");
const sidebar = document.getElementById("sidebar");


const project1 = new Project("title");
console.log(project1);
const something = new ToDos("eat an avocado");
console.log(something);
console.log("Add properties to todo");
addToDoProperties.addDescription(something, "Avocados are healthy so I need to eat one.");
addToDoProperties.addDueDate(something, "Today");
addToDoProperties.addPriority(something, "Urgent");
console.log(something);
console.log("Add todo to project");
addToDoToProject(project1, something);
console.log(project1);
console.log("Add one more todo");
const eatFish = new ToDos("eat a fish");
addToDoToProject(project1, eatFish);
console.log(project1);
showProject(project1, mainContainer);
const project2 = new Project("I LOVE AVOCADOS!!!");
showProject(project2, mainContainer);
showProject(project2, sidebar);
showProject(project1, sidebar);