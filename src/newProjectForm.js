import { addProject } from "./state.js";
import Project from "./createProject.js";
import { showProject } from "./showProjects.js";


export default function newProjectForm() {

    const formContainer = document.getElementById("form-display");
    const contentTitle = document.getElementById("main-content-title");
    const display = document.getElementById("display");
    display.textContent = "";
    contentTitle.textContent = "Add a new Project:"

    const projectForm = document.createElement("form");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Home");
    titleInput.setAttribute("required", "");

    const message = document.createElement("p");
    message.textContent = "* required"
    message.classList.add("small");

    const lineBreak = document.createElement("br")

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("form-button");
    submitBtn.textContent = "Create New Project";

    projectForm.appendChild(titleInput);
    projectForm.appendChild(message);
    projectForm.appendChild(lineBreak);
    projectForm.appendChild(submitBtn);
    formContainer.appendChild(projectForm);

    submitBtn.addEventListener("click", (e) => {
        console.log(`The validity of this form is: ${projectForm.checkValidity()}`)
        if (projectForm.checkValidity()) {
            formContainer.textContent = "";
            contentTitle.textContent = "";
            const save = Object.fromEntries(new FormData(projectForm));
            const newProject = new Project(save.title);
            addProject(newProject);
            showProject(newProject, document.getElementById("sidebar"));
        } else {
            message.textContent = "Ensure to write a title for this project!"
        } 
    });
}