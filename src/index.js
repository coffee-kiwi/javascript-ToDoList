import "./styles.css";

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

import * as addToDoProperties from "./addToDoProperties.js";
import Project from "./createProject.js";
import { ToDos } from "./createToDo.js";
import { addToDoToProject } from "./addToDoToProject.js";
import { showProject } from "./showProjects.js";
import { showToDoList } from "./showToDoList.js";


const mainContainer = document.getElementById("project-display");
const sidebar = document.getElementById("sidebar");

const myProjects = [];
const lifeList = new Project("Life");
myProjects.push(lifeList);
console.log(myProjects);


// -------------------------------------------------------
// Create basic dataset for testing setup:
// -------------------------------------------------------
const something = new ToDos("eat an avocado");

addToDoProperties.addDescription(something, "Avocados are healthy so I need to eat one.");
addToDoProperties.addDueDate(something, "Today");
addToDoProperties.addPriority(something, "Urgent");

addToDoToProject(lifeList, something);

const eatFish = new ToDos("eat a fish");
addToDoToProject(lifeList, eatFish);

showProject(lifeList, sidebar);
// -------------------------------------------------------
// End dataset
// -------------------------------------------------------


const projectButtons = document.querySelectorAll(".projectBtn")
projectButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const projectId = button.dataset.id;
    const thisProject = myProjects.find((element) => element.id === projectId);
    showToDoList(thisProject, mainContainer);
  })
});
