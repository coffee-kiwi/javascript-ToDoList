import "./styles.css";
import { format } from 'date-fns';

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
import { getProjects, addProject, findProject, saveProjects, loadProjects  } from "./state.js";

const mainContainer = document.getElementById("display");
const sidebar = document.getElementById("sidebar");
const newProjectBtn = document.getElementById("new-btn");
const mainContainerTitle = document.getElementById("main-content-title");
if (loadProjects() !== null) {
  console.log(`Locally stored projects loaded successfully`);
};
console.log("Check what is inside myProjects now:")
  let loadedProjects = getProjects();  
  loadedProjects.forEach(project => {
        showProject(project, sidebar);
        console.log(`Project is: ${project.title}`);
    });

console.log("Testing date-fns package:");
const today = new Date();
console.log(format(new Date(), "yyyy-MM-dd"));
console.log(`today made from new Date() is ${today}`);
console.log("--------------------------");

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
