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
import newProjectForm from "./newProjectForm.js";
import { getProjects, addProject, findProject } from "./state.js";

const mainContainer = document.getElementById("project-display");
const sidebar = document.getElementById("sidebar");
const newProjectBtn = document.getElementById("new-btn");
const mainContainerTitle = document.getElementById("main-content-title");




// -------------------------------------------------------
// Create basic dataset for testing setup:
// -------------------------------------------------------
const lifeList = new Project("Life");
addProject(lifeList);

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

sidebar.addEventListener("click", (e) => {
  if (!event.target.classList.contains("projectBtn")) return;
    const projectId = event.target.dataset.id;
    const thisProject = findProject(projectId);
    mainContainerTitle.textContent = `${thisProject.title}`;
    showToDoList(thisProject, mainContainer);
});

newProjectBtn.addEventListener("click", (e) => {
  console.log("New Project form generating");
  newProjectForm();
});
